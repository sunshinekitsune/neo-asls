import { type Element, Property, PropertyPrototype } from "assemblyscript";
import { CompletionItemKind, DiagnosticSeverity, SymbolKind } from "vscode-languageserver";
import { CommonFlags } from "../types/commonFlags.js";
import { DiagnosticCategory } from "../types/diagnosticCategory.js";
import { ElementKind } from "../types/elementKind.js";

/**
 * Tests whether an AssemblyScript element represents a class field rather than an accessor.
 *
 * @param element The AssemblyScript element to test.
 * @returns True if the element represents a field.
 */
function isFieldElement(element: Element): boolean {
	if (element instanceof Property || element instanceof PropertyPrototype) {
		return element.isField;
	}
	return false;
}

/**
 * Maps an AssemblyScript diagnostic category to an LSP DiagnosticSeverity.
 *
 * @param category The compiler diagnostic category.
 * @returns The mapped LSP DiagnosticSeverity.
 */
export function mapCategorySeverity(category: DiagnosticCategory): DiagnosticSeverity {
	switch (category) {
		case DiagnosticCategory.Pedantic:
			return DiagnosticSeverity.Hint;
		case DiagnosticCategory.Info:
			return DiagnosticSeverity.Information;
		case DiagnosticCategory.Warning:
			return DiagnosticSeverity.Warning;
		case DiagnosticCategory.Error:
			return DiagnosticSeverity.Error;
		default:
			return DiagnosticSeverity.Information;
	}
}

/**
 * Maps an AssemblyScript ElementKind to an LSP SymbolKind.
 *
 * @param kind The syntactic element kind.
 * @returns The mapped LSP SymbolKind.
 */
export function mapElementKindToSymbolKind(kind: ElementKind): SymbolKind {
	switch (kind) {
		case ElementKind.File:
			return SymbolKind.File;
		case ElementKind.Namespace:
			return SymbolKind.Namespace;
		case ElementKind.Class:
		case ElementKind.ClassPrototype:
			return SymbolKind.Class;
		case ElementKind.Interface:
		case ElementKind.InterfacePrototype:
		case ElementKind.TypeDefinition:
			return SymbolKind.Interface;
		case ElementKind.Enum:
			return SymbolKind.Enum;
		case ElementKind.EnumValue:
			return SymbolKind.EnumMember;
		case ElementKind.Function:
		case ElementKind.FunctionPrototype:
			return SymbolKind.Function;
		case ElementKind.Property:
		case ElementKind.PropertyPrototype:
		case ElementKind.IndexSignature:
			return SymbolKind.Property;
		case ElementKind.Global:
		case ElementKind.Local:
			return SymbolKind.Variable;
		default:
			return SymbolKind.Variable;
	}
}

/**
 * Maps an AssemblyScript Element to an LSP SymbolKind.
 *
 * @param element The resolved or unresolved element.
 * @returns The mapped LSP SymbolKind.
 */
export function mapElementToSymbolKind(element: Element): SymbolKind {
	if (element.is(CommonFlags.Constructor)) {
		return SymbolKind.Constructor;
	}
	switch (element.kind) {
		case ElementKind.Function:
		case ElementKind.FunctionPrototype:
			return element.isBound ? SymbolKind.Method : SymbolKind.Function;
		case ElementKind.Global:
		case ElementKind.Local:
			return element.is(CommonFlags.Const) ? SymbolKind.Constant : SymbolKind.Variable;
		case ElementKind.Property:
		case ElementKind.PropertyPrototype:
			return isFieldElement(element) ? SymbolKind.Field : SymbolKind.Property;
		default:
			return mapElementKindToSymbolKind(element.kind);
	}
}

/**
 * Maps an AssemblyScript ElementKind to an LSP CompletionItemKind.
 *
 * @param kind The syntactic element kind.
 * @returns The mapped LSP CompletionItemKind.
 */
export function mapElementKindToCompletionItemKind(kind: ElementKind): CompletionItemKind {
	switch (kind) {
		case ElementKind.File:
			return CompletionItemKind.File;
		case ElementKind.Namespace:
			return CompletionItemKind.Module;
		case ElementKind.Class:
		case ElementKind.ClassPrototype:
			return CompletionItemKind.Class;
		case ElementKind.Interface:
		case ElementKind.InterfacePrototype:
		case ElementKind.TypeDefinition:
			return CompletionItemKind.Interface;
		case ElementKind.Enum:
			return CompletionItemKind.Enum;
		case ElementKind.EnumValue:
			return CompletionItemKind.EnumMember;
		case ElementKind.Function:
		case ElementKind.FunctionPrototype:
			return CompletionItemKind.Function;
		case ElementKind.Property:
		case ElementKind.PropertyPrototype:
		case ElementKind.IndexSignature:
			return CompletionItemKind.Property;
		case ElementKind.Global:
		case ElementKind.Local:
			return CompletionItemKind.Variable;
		default:
			return CompletionItemKind.Text;
	}
}

/**
 * Maps an AssemblyScript Element to an LSP CompletionItemKind.
 *
 * @param element The resolved or unresolved element.
 * @returns The mapped LSP CompletionItemKind.
 */
export function mapElementToCompletionItemKind(element: Element): CompletionItemKind {
	if (element.is(CommonFlags.Constructor)) {
		return CompletionItemKind.Constructor;
	}
	switch (element.kind) {
		case ElementKind.Function:
		case ElementKind.FunctionPrototype:
			return element.isBound ? CompletionItemKind.Method : CompletionItemKind.Function;
		case ElementKind.Global:
		case ElementKind.Local:
			return element.is(CommonFlags.Const)
				? CompletionItemKind.Constant
				: CompletionItemKind.Variable;
		case ElementKind.Property:
		case ElementKind.PropertyPrototype:
			return isFieldElement(element) ? CompletionItemKind.Field : CompletionItemKind.Property;
		default:
			return mapElementKindToCompletionItemKind(element.kind);
	}
}
