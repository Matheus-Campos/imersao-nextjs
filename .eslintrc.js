module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off'
  }
}