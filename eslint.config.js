export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: [
      {
        'no-console': 'off',
        'no-underscore-dangle': [2, { allow: ['__filename', '__dirname'] }],
      },
    ],
  },
];
