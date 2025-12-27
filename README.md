## How to reproduce

```console
$ npm i

$ npm start
> repro-vscode-test-esm@1.0.0 start
> node test/runTest.js

✔ Validated version: 1.107.1
✔ Found at https://update.code.visualstudio.com/1.107.1/darwin-arm64/stable?released=true
✔ Downloaded VS Code into /Users/mizdra/src/github.com/mizdra/repro-vscode-test-esm/.vscode-test/vscode-darwin-arm64-1.107.1
[main 2025-12-27T10:40:48.366Z] update#setState disabled
[main 2025-12-27T10:40:48.367Z] update#ctor - updates are disabled by the environment
ChatSessionStore: Migrating 0 chat sessions from storage service to file system
Started initializing default profile extensions in extensions installation folder. file:///Users/mizdra/src/github.com/mizdra/repro-vscode-test-esm/.vscode-test/extensions
Started local extension host with pid 48672.
Completed initializing default profile extensions in extensions installation folder. file:///Users/mizdra/src/github.com/mizdra/repro-vscode-test-esm/.vscode-test/extensions
MCP Registry configured: https://api.mcp.github.com
Settings Sync: Account status changed from uninitialized to unavailable
Extension host (LocalProcess pid: 48672) is unresponsive.
UNRESPONSIVE extension host: starting to profile NOW
(...hangs here...)
```
