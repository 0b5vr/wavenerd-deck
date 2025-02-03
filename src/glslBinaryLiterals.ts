const regexPragma = /^\s*#pragma\s+use_binary_literals\s*$/mg;
const regexBinaryLiterals = /\b(0b[01]+)([u]?)\b/mg;

export function glslBinaryLiterals(code: string): string {
  if (!regexPragma.test(code)) {
    return code;
  }

  code = code.replace(regexPragma, '');

  return code.replaceAll(regexBinaryLiterals, (_, binary, modifier) => {
    return parseInt(binary.slice(2), 2).toString() + modifier;
  });
}
