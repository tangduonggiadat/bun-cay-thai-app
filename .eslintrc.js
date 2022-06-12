module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-native', 'react-hooks'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': [
      2,
      {
        skip: ['Button', 'Link', 'NButton', 'H1', 'H2', 'H3', 'Animated.Text'],
      },
    ],
    'react-native/no-single-element-style-arrays': 2,
    'react-hooks/exhaustive-deps': 0,
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  globals: {
    fetch: false,
  },
};
