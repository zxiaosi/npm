import pc from 'picocolors';
import * as p from '@clack/prompts';

export default async function () {
  p.intro('@zxiaosi/cli');

  const { monorepo, framework } = await p.group(
    {
      monorepo: () =>
        p.select({
          message: 'Select a monorepo tool: ',
          options: [
            { value: 'lerna', label: 'Lerna' },
            { value: 'lerna-lite', label: 'Lerna Lite' },
            { value: 'pnpm-workspace', label: 'Pnpm Workspace' },
          ],
        }),
      framework: () =>
        p.select({
          message: 'Select a framework: ',
          options: [
            { value: 'umi', label: 'Umi' },
            {
              value: 'qiankun-vite',
              label: 'Qiankun + Vite',
              hint: 'node > 18.0.0',
            },
            {
              value: 'qiankun-vite5',
              label: 'Qiankun + Vite5',
              hint: 'node > 16.0.0',
            },
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel(pc.red('Operation cancelled'));
        process.exit(0);
      },
    }
  );

  // const value = await select({
  //   message: 'Select a template',
  //   options: [
  //     { value: 'umi-lerna-npm-workspace', label: 'umi-lerna-npm-workspace' },
  //     {
  //       value: 'umi-lerna-lite-npm-workspace',
  //       label: 'umi-lerna-lite-npm-workspace',
  //     },
  //     { value: 'umi-pnpm-workspace', label: 'umi-pnpm-workspace' },
  //     {
  //       value: 'qiankun-vite-lerna-npm-workspace',
  //       label: 'qiankun-vite-lerna-npm-workspace',
  //     },
  //     {
  //       value: 'qiankun-vite-lerna-lite-npm-workspace',
  //       label: 'qiankun-vite-lerna-lite-npm-workspace',
  //     },
  //     {
  //       value: 'qiankun-vite-pnpm-workspace',
  //       label: 'qiankun-vite-pnpm-workspace',
  //     },
  //     {
  //       value: 'qiankun-vite5-lerna6',
  //       label: 'qiankun-vite5-lerna6',
  //     },
  //   ],
  // });

  const fileName = `${framework}-${monorepo}`;

  console.log(`fileName`, fileName);

  p.outro(pc.green(`Successfully created project !`));
}
