import * as vscode from 'vscode';
import { getProbSaveLocation } from '../parser';
import { existsSync, readFileSync } from 'fs';
import { Problem } from '../types';
import { getJudgeViewProvider } from '../extension';
import { getProblemForDocument } from '../utils';

/**
 * Show the webview with the problem details if a source code with existing
 * saved problem is opened. If switch is to an invalid document of unsaved
 * problem, closes the active webview, if any.
 *
 * @param e An editor
 * @param context The activation context
 */
export const editorChanged = async (e: vscode.TextEditor | undefined) => {
    console.log('Changed editor to', e?.document.fileName, e?.document);

    if (e === undefined || e.document.uri.scheme !== 'file') {
        return;
    }

    const problem = getProblemForDocument(e.document);

    if (problem === undefined) {
        console.log('NO problem!');
        getJudgeViewProvider().extensionToJudgeViewMessage({
            command: 'new-problem',
            problem: undefined,
        });
        return;
    }

    if (getJudgeViewProvider().isViewUninitialized()) {
        vscode.commands.executeCommand('cph.judgeView.focus');
    }

    console.log('Sent problem @', Date.now());
    getJudgeViewProvider().extensionToJudgeViewMessage({
        command: 'new-problem',
        problem,
    });
};

export const editorClosed = (e: vscode.TextDocument) => {
    console.log('Closed editor:', e.uri.fsPath);
    const srcPath = e.uri.fsPath;
    const probPath = getProbSaveLocation(srcPath);

    if (!existsSync(probPath)) {
        return;
    }

    const problem: Problem = JSON.parse(readFileSync(probPath).toString());

    if (getJudgeViewProvider().problemPath === problem.srcPath) {
        getJudgeViewProvider().extensionToJudgeViewMessage({
            command: 'new-problem',
            problem: undefined,
        });
    }
};

export const checkLaunchWebview = () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    editorChanged(editor);
};
