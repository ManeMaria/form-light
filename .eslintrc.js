module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', parser: 'flow' }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'quotes-props': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'mouse-events-have-key-events': 'off',
    'comma-dangle': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    indent: 'off',

    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
        },
      },
    ],
  },
};
