#!/usr/bin/env node

import {
	createConnection,
	type InitializeResult,
	ProposedFeatures,
	TextDocumentSyncKind,
	TextDocuments,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { computeSyntaxDiagnostics } from "./diagnostics/syntaxDiagnostics.js";

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

connection.onInitialize((): InitializeResult => {
	return {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
		},
	};
});

documents.onDidChangeContent((change) => {
	const diagnostics = computeSyntaxDiagnostics(change.document);
	connection.sendDiagnostics({
		diagnostics,
		uri: change.document.uri,
	});
});

documents.listen(connection);
connection.listen();
