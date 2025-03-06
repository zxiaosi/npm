import pc from 'picocolors';
import * as p from '@clack/prompts';
import handleCopyFile from './handleCopyFile';
import packageJson from '../package.json';

export default async function () {
  p.intro(`${packageJson.name}@${packageJson.version}`);

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
        p.cancel(pc.white('Until next time! 👋'));
        process.exit(0);
      },
    }
  );

  const fileName =
    framework === 'qiankun-vite5'
      ? `${framework}-lerna6`
      : `${framework}-${monorepo}`;

  const result = await handleCopyFile(fileName);

  p.outro(result);
}
