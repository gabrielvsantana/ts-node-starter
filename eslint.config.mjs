// @ts-check
import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
// @ts-expect-error TS can't find default export
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';


export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  { settings: { 'import/resolver': { typescript: {} } } },
  {
    plugins: { import: fixupPluginRules(importPlugin) },
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: { project: 'tsconfig.json' },
    },
    settings: { 'import/resolver': { typescript: { project: './tsconfig.json' } } },
    rules: {
      'max-len': ['error', { code: 140 }],
      'no-console': 'warn',
      'no-return-await': 'warn',
      'max-classes-per-file': ['warn', 1],
      'no-magic-numbers': ['warn', { ignoreDefaultValues: true, ignoreArrayIndexes: true }],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], ['index', 'object', 'type', 'unknown']],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
