module.exports = {
  root: true,
  plugins: [
    'react-hooks',
    'react',
  ],
  extends: [
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/jsx-no-undef': 'error',
    'linebreak-style': 0,
    'react/prop-types': 'off',
  },
};
