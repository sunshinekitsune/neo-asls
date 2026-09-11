import { DiagnosticSeverity } from "vscode-languageserver";

/**
 * Indicates the category of a DiagnosticCategory from AssemblyScript. This exists because DiagnosticCategory in AssemblyScript is a const enum, which esbuild cannot handle properly.
 */
export const DiagnosticCategory = {
	/** Error message. */
	error: 3,
	/** Informatory message. */
	info: 1,
	/** Overly pedantic message. */
	pedantic: 0,
	/** Warning message. */
	warning: 2,
} as const;

export type DiagnosticCategory = (typeof DiagnosticCategory)[keyof typeof DiagnosticCategory];

/**
 * Maps an AssemblyScript diagnostic category to a VSCode language server diagnostic severity. Pedantic is mapped to info.
 * @param category The AssemblyScript diagnostic category.
 * @returns The equivelent VSCode language server diagnostic severity.
 */
export function mapCategorySeverity(category: DiagnosticCategory): DiagnosticSeverity {
	switch (category) {
		case DiagnosticCategory.pedantic:
		case DiagnosticCategory.info:
			return DiagnosticSeverity.Information;
		case DiagnosticCategory.warning:
			return DiagnosticSeverity.Warning;
		default:
			return DiagnosticSeverity.Error;
	}
}
