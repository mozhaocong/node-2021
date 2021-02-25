// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'quotes': [2, 'single'], // 必须单引号
    // "quotes" : 2, //必须单引号
    'no-undef': 2, // 未定义变量
    'no-multi-spaces': 2, // 多余空格
    'comma-dangle': [2, 'never'], // 不允许或强制在对象字面量或者数组属性的结尾使用逗号
    'no-cond-assign': [2, 'always'], // 条件判断语句中不允许赋值操作
    // 'no-console' : 2, //不允许使用console中所有的方法
    'no-constant-condition': 2, // 不允许在判断中使用常数
    'no-debugger': 2,
    'no-dupe-args': 2, // 方法的参数中不允许有重复值。
    'no-dupe-keys': 2, // 定义对象时不允许有重复的键
    'no-duplicate-case': 2, // switch语句中不允许使用相同的case值
    'no-empty': 2, // 不允许空的块语句
    'no-ex-assign': 2, // 不允许对try...catch语句中catch的参数赋值。(推荐)
    'no-extra-boolean-cast': 2, // 不允许多余的布尔值转换操作。如!!!foo或!!bar ? baz : bat等。
    'no-extra-parens': [2, 'all'], // 不允许在表达式外面套一层多余的括号。"all"（默认）：不允许任何情况下出现的多余的括号。<br>//"functions"：不允许function外面包裹多余的括号，其他表达式除外。
    'no-extra-semi': 2, // 不允许多余的分号
    'no-func-assign': 2, // 不允许为一个函数赋值。
    'no-inner-declarations': 2, // 函数或者变量的声明要放在程序的最外层或者另一个函数体内，不要在if等代码块中定义函数和变量。(推荐)"functions"（默认）：<br>//仅限定函数不允许在代码块中定义。"both"：限定函数和变量都不允许在代码块中定义。
    'no-invalid-regexp': 2, // 不允许在RegExp构造函数中传递不合法的正则表达式字符串。(推荐)
    'no-irregular-whitespace': 2, // 不允许在字符串外面或者注释中使用不规则的空格。(推荐)
    'no-negated-in-lhs': 2, // 在in运算的左侧操作数前不允许使用否定符号!
    'no-obj-calls': 2, // 不允许将Math、JSON等全局的对象当做函数进行调用
    'no-regex-spaces': 2, // 不允许在正则表达式中出现超过1个的连续空格
    'no-sparse-arrays': 2, // 不允许稀疏数组
    'no-unexpected-multiline': 2, // 不允许两行连续但是不相关的代码作为一个连续表达式执行
    'no-unreachable': 2, // 不允许在return、throw、continue、break等中断语句之后出现代码，因为这些代码永远不会被执行到。(推荐)
    'use-isnan': 2, // 判断一个数是否是NaN的时候不允许使用foo === NaN这样的操作，而是使用isNaN函数进行判断。(推荐)
    'valid-jsdoc': 2, // 不允许使用不合法的JSDoc注释。下列选项均可作为配置选项
    'valid-typeof': 2, // typeof的结果必须和一个有效的字符串进行比较，如typeof foo === 'strnig'即是不合法的字符串。(推荐)
    'block-scoped-var': 2, // 不允许在代码块外使用在代码块内定义的变量。
    'curly': 2, // if...else、while等语句必须使用 大括号{}包括。
    'default-case': 2, // switch代码块必须含有一个default分支。
    'eqeqeq': [2, 'always'], // 使用===和!==代替==和!=。(可修复)
    'no-alert': 2, // 不允许使用alert、confirm和prompt方法。
    'no-else-return': 2, // 如果一个if语句含有return，就没有必要使用else语句块了，原本放在else语句块内的代码可以直接写在代码块外。
    'no-eq-null': 2, // 和null比较时，不允许使用==或!=，而是使用===或!==。
    'no-eval': 2, // 不允许使用eval语句。
    'no-extend-native': 2, // 不允许在原生对象的prototype上添加属性。
    'no-fallthrough': 2, // 不允许switch...case出现“贯穿”情况，即一个case代码块执行过之后继续执行下一个case代码块。除非使用break、return、throw或者特殊注释等方法中断下一个case执行。(推荐)
    'no-implicit-coercion': 2, // 不允许使用简写的类型转换方式，如+foo、''+foo，下列选项均可作为配置选项。
    'no-implied-eval': 2, // 不允许使用隐含的eval语句，例如setTimeout('var foo=1;',10)。
    'no-lone-blocks': 2, // 不允许使用没有必要的代码块。
    'no-loop-func': 2, // 不允许在循环中声明函数
    'no-native-reassign': 2, // 不允许对原生对象进行重写。
    'no-redeclare': 2, // 不允许重复定义变量。(推荐)
    'no-script-url': 2, // 不允许使用javascript:这样的语句。
    'no-unused-expressions': 2, // 不允许出现没有被使用的表达式或值
    'no-useless-concat': 2, // 不允许使用没有必要的字符串连接，如"a"+"b"
    'wrap-iife': 2, // 立即执行函数需要使用括号包裹
    'no-shadow-restricted-names': 2, // 声明变量不能覆盖JavaScript中的保留关键字
    'no-shadow': 2, // 不允许在当前作用域内定义作用域外已有的同名变量
    'no-undef-init': 2, // 不允许直接将一个变量定义为undefined，如var foo = undefined;。
    'no-undefined': 2, // 不允许使用undefined作为变量名或者函数形参。
    'no-unused-vars': 2, // 不允许出现定义了但是没有使用的变量。下列选项均可作为配置选项。
    'no-use-before-define': 2, // 变量应该先定义后使用
    'camelcase': [2] // 是否使用驼峰命名法
  }
}
