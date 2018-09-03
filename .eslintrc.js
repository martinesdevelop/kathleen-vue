module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'module'
  },

  env: {
    browser: true,
    node: true
  },

  extends: ['prettier', 'eslint:recommended', 'plugin:vue/recommended'],

  plugins: ['vue', 'prettier', 'import'],

  rules: {
    // 'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 0,

    // vue rules
    'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/require-default-prop': 0,
    'vue/no-unused-components': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 2, // may be 3? =)
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
