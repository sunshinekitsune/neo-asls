/** biome-ignore-all lint/style/useNamingConvention: Mirroring AssemblyScript internals. */

/**
 * Indicates the specific kind of an AssemblyScript Element.
 *
 * This mirrors AssemblyScript's ElementKind enum.
 */
export const ElementKind = {
	/** A Class. */
	Class: 7,
	/** A ClassPrototype. */
	ClassPrototype: 6,
	/** An Enum. */
	Enum: 2,
	/** An EnumValue. */
	EnumValue: 3,
	/** A File. */
	File: 13,
	/** A Function. */
	Function: 5,
	/** A FunctionPrototype. */
	FunctionPrototype: 4,
	/** A Global. */
	Global: 0,
	/** An IndexSignature. */
	IndexSignature: 15,
	/** An Interface. */
	Interface: 9,
	/** An InterfacePrototype. */
	InterfacePrototype: 8,
	/** A Local. */
	Local: 1,
	/** A Namespace. */
	Namespace: 12,
	/** A Property. */
	Property: 11,
	/** A PropertyPrototype. */
	PropertyPrototype: 10,
	/** A TypeDefinition. */
	TypeDefinition: 14,
} as const;

export type ElementKind = (typeof ElementKind)[keyof typeof ElementKind];
