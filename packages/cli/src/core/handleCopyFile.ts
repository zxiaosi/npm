import { spinner } from '@clack/prompts';

const s = spinner();

export default async function () {
  s.start('Starting...');

  s.stop('Done!');
}
