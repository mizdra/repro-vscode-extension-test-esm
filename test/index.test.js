import assert from 'node:assert/strict';

// The following will hang the test.
import * as vscode from 'vscode';

// The following will NOT hang the test.
// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
// const vscode = require('vscode');

assert.equal(1, 2);
