module.exports = {
 overrides: [{
    files: ['*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
      },
  }],
  plugins: [
    "prettier",
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "prettier/prettier": "warn",
  },
}
