module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': 'typescript',
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-import-helpers'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          e: false,
        },
      },
    ],
  },
}
