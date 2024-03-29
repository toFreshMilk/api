module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    // 'no-param-reassign': 'warn',
    'import/no-dynamic-require': 'off',
    'no-console': 'off',
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'implicit-arrow-linebreak': 0,
    'arrow-body-style': 0,
    'linebreak-style': 0,
  },
}
