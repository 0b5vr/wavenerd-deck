export type ShaderVersion = 1 | 2;

const SUPPORTED_SHADER_VERSIONS: ShaderVersion[] = [1, 2];

const regexPragma = /^[\t ]*#pragma[\t ]+wavenerd_shader_version\b(.*)$/m;
const regexPragmaGlobal = /^[\t ]*#pragma[\t ]+wavenerd_shader_version\b.*$/mg;

/**
 * Parse `#pragma wavenerd_shader_version <n>` from the given code.
 *
 * Returns the shader version and the code without the pragma line.
 * The pragma line is replaced with an empty line so line numbers are preserved.
 * Defaults to version 1 when the pragma is absent.
 */
export function parseShaderVersion(code: string): { version: ShaderVersion; code: string } {
  const match = code.match(regexPragma);
  if (match == null) {
    return { version: 1, code };
  }

  const value = match[1].trim();
  const version = Number(value) as ShaderVersion;

  if (!/^\d+$/.test(value) || !SUPPORTED_SHADER_VERSIONS.includes(version)) {
    throw new Error(
      `Unsupported wavenerd_shader_version: "${value}". Supported versions: ${SUPPORTED_SHADER_VERSIONS.join(', ')}`,
    );
  }

  return { version, code: code.replace(regexPragmaGlobal, '') };
}
