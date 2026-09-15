/** biome-ignore-all lint/style/useNamingConvention: Mirroring AssemblyScript internals. */

/**
 * Indicates the traits of a AST Node or Program Element from AssemblyScript.
 *
 * This mirrors AssemblyScript's CommonFlags enum.
 */
export const CommonFlags = {
	/** Has an `abstract` modifier. */
	Abstract: 128,
	/** Is ambient, that is either declared or nested in a declared element. */
	Ambient: 32768,
	/** Is (part of) a closure. */
	Closure: 536870912,
	/** Is compiled. */
	Compiled: 8388608,
	/** Has a `const` modifier. */
	Const: 8,
	/** Is a constructor. */
	Constructor: 524288,
	/** Has a `declare` modifier. */
	Declare: 4,
	/** Has a definite assignment assertion `!` as in `x!: i32;`. */
	DefinitelyAssigned: 16384,
	/** Did error. */
	Errored: 16777216,
	/** Has an `export` modifier. */
	Export: 2,
	/** Is generic. */
	Generic: 65536,
	/** Is part of a generic context. */
	GenericContext: 131072,
	/** Has a `get` modifier. */
	Get: 2048,
	/** Has an `import` modifier. */
	Import: 1,
	/** Has a constant value and is therefore inlined. */
	Inlined: 33554432,
	/** Is an instance member. */
	Instance: 262144,
	/** Is internally nullable. */
	InternallyNullable: -2147483648,
	/** Has a `let` modifier. */
	Let: 16,
	/** Is a module export. */
	ModuleExport: 1048576,
	/** Is a module import. */
	ModuleImport: 2097152,
	/** No flags set. */
	None: 0,
	/** Is an overridden method. */
	Overridden: 268435456,
	/** Has a `override` modifier.  */
	Override: 8192,
	/** Has a `private` modifier. */
	Private: 512,
	/** Has a `protected` modifier. */
	Protected: 1024,
	/** Has a `public` modifier. */
	Public: 256,
	/** Is quoted. */
	Quoted: 1073741824,
	/** Has a `readonly` modifier. */
	Readonly: 64,
	/** Is resolved. */
	Resolved: 4194304,
	/** Is scoped. */
	Scoped: 67108864,
	/** Has a `set` modifier. */
	Set: 4096,
	/** Has a `static` modifier. */
	Static: 32,
	/** Is a stub. */
	Stub: 134217728,
} as const;

export type CommonFlags = (typeof CommonFlags)[keyof typeof CommonFlags];
