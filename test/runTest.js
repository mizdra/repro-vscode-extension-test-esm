import { resolve } from 'node:path';
import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    const extensionDevelopmentPath = import.meta.dirname;

    // The following will hang the test.
    const extensionTestsPath = resolve(import.meta.dirname, 'runner.cjs');

    // The following will NOT hang the test.
    // const extensionTestsPath = resolve(import.meta.dirname, 'runner.js');

    await runTests({ extensionDevelopmentPath, extensionTestsPath });
  } catch (err) {
    console.error(err);
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
