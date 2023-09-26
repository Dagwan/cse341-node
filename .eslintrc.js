module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {},
  globals: {
    require: true,
    __dirname: true,
    exports: true,
    module: true,
    process: true
  }
};
