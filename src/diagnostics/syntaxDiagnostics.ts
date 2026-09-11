import { Parser } from "assemblyscript";
import type { Diagnostic } from "vscode-languageserver/node";
import type { TextDocument } from "vscode-languageserver-textdocument";
import { mapCategorySeverity } from "./categories.js";

/**
 * Computes AssemblyScript parser errors for a document and converts the result into diagnostic information for VSCode's language server.
 * @param document A document to compute syntax diagnostics for.
 * @returns An array of diagnostic information.
 */
export function computeSyntaxDiagnostics(document: TextDocument): Diagnostic[] {
	const text = document.getText();
	const parser = new Parser();
	parser.parseFile(text, document.uri, true);

	const diagnostics: Diagnostic[] = [];
	for (const message of parser.diagnostics) {
		diagnostics.push({
			message: message.message,
			range:
				message.range === null
					? {
							end: { character: 0, line: 0 },
							start: { character: 0, line: 0 },
						}
					: {
							end: document.positionAt(message.range.end),
							start: document.positionAt(message.range.start),
						},
			severity: mapCategorySeverity(message.category),
			source: "neo-asls",
		});
	}

	return diagnostics;
}
