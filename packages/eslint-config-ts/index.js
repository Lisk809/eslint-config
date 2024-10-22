const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:@typescript-eslint/recommended', '@kigoo/eslint-config-vanilla'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',

    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-undef': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-await-in-loop': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-private-class-members': 'off',
    '@typescript-eslint/no-unused-labels': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // === new DIY options to set project for ts parser ===
    // '@typescript-eslint/await-thenable': 'warn',
    // '@typescript-eslint/no-misused-promises': 'warn',
    // '@typescript-eslint/promise-function-async': 'warn',

    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
    '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'separate-type-imports' }],
  },
})
