import { ShaderVersion, parseShaderVersion } from './parseShaderVersion';
import { wrapShaderV1 } from './wrapShaderV1';
import { wrapShaderV2 } from './wrapShaderV2';

const wrapShaderByVersion: Record<ShaderVersion, (code: string) => string> = {
  1: wrapShaderV1,
  2: wrapShaderV2,
};

/**
 * Wrap the user code into a complete fragment shader, based on its `wavenerd_shader_version`.
 */
export function wrapShader(code: string): string {
  const { version, code: codeWithoutPragma } = parseShaderVersion(code);
  return wrapShaderByVersion[version](codeWithoutPragma);
}
