exports.run = async function run() {
  // The following will hang the test.
  require('./index.test.js');

  // The following will NOT hang the test.
  // await import('./index.test.js');
}
