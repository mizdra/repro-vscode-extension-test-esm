import * as vscode from 'vscode';

/**
 * @param {import('vscode').ExtensionContext} context 
 */
export function activate(context) {
	console.log('Congratulations, your extension "helloworld-sample" is now active!');
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	context.subscriptions.push(disposable);
}
