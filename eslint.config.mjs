import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    ignores: [
      '**/docs/**/*',
      '**/dist/**/*',
      '**/types/**/*',
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  stylistic.configs.customize({
    semi: true,
    braceStyle: '1tbs',
    arrowParens: true,
    quoteProps: 'consistent',
  }),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off', // needed for mixin pattern
      '@typescript-eslint/no-empty-object-type': ['error', {
        allowInterfaces: 'with-single-extends', // needed for mixin pattern
      }],
      '@stylistic/max-statements-per-line': ['error', { max: 2 }],
    },
  },
);
