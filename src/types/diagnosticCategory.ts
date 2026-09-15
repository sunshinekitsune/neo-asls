/** biome-ignore-all lint/style/useNamingConvention: Mirroring AssemblyScript internals. */

/**
 * Indicates the category of a AssemblyScript diagnostic message.
 *
 * This mirrors AssemblyScript's DiagnosticCategory enum.
 */
export const DiagnosticCategory = {
	/** Error message. */
	Error: 3,
	/** Informatory message. */
	Info: 1,
	/** Overly pedantic message. */
	Pedantic: 0,
	/** Warning message. */
	Warning: 2,
} as const;

export type DiagnosticCategory = (typeof DiagnosticCategory)[keyof typeof DiagnosticCategory];
