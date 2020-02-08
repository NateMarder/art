module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['react', 'prettier', 'react-hooks'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'space-before-function-paren': 'never',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
      },
    ],
  },
};
