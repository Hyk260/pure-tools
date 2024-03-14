module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended", // 使用 ESLint 推荐规则
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-undef": "off", // 禁用未声明的变量
    "no-unused-vars": "off", // 禁止未使用过的变量
    "no-case-declarations": "off", // 不允许在case/default子句中使用词法声明
    "arrow-parens": ["error", "always"], // 规则用于控制箭头函数的参数括号，'always'表示参数必须加上括号。
    "prettier/prettier": "warn",
    "vue/valid-define-props": "off",
    "vue/valid-define-emits": "off",
    "no-inner-declarations": "off", // function不允许在嵌套块中使用变量或声明
  },
}
