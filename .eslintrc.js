// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 不校验缩进
    'indent': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    "no-extra-semi": 0, 
    "semi": 0,
    "no-multi-spaces": 0,
    // 三等号
    'eqeqeq': 0,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 引号类型
    "quotes": [0, "single"],
     // 防止格式化代码后单引号变双引号
    "prettier.singleQuote": true,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 校验4个缩进
    // 'vue/script-indent': [
    //   'error',
    //   4,
    //   {
    //     'baseIndent': 1
    //   }
    // ]
  }
}
