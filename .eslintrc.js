// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //忽略缩进问题
    'indent': 0,
    //函数定义时括号前面要不要空格
    'space-before-function-paren': 0,
    //禁止在非赋值或条件语句中使用 new 操作符
    'no-new': 0,
    'one-var': 0,
    'spaced-comment': 0,
    'semi':0,
    'eqeqeq': 0
  }
}
