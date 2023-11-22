![decimal.js](https://raw.githubusercontent.com/MikeMcl/decimal.js/gh-pages/decimaljs.png)

## 概述

封装了一层：

- 支持 null、undefined、NaN、Infinity、-Infinity 的构造和运算。
- undefined、NaN、Infinity、-Infinity 的运算返回与 js 原始算术、关系运算相同的结果。
- null 运算返回高精度结果。
- 不支持字符串拼接，所有的构造都视为数值（相关）数据。



目前**仅支持**代理以下运算符

```
add
minus
times
dividedBy
modulo
equals
notEqual
greaterThan
greaterThanOrEqualTo
lessThan
lessThanOrEqualTo
```



代码在 `NaslDecimal.mjs`。

方法拦截参考（复制粘贴）了 [JavaScript: How To Intercept Function and Method Calls (plainenglish.io)](https://plainenglish.io/blog/javascript-how-to-intercept-function-and-method-calls)。

其他请见原始项目 decimaljs [MikeMcl/decimal.js: An arbitrary-precision Decimal type for JavaScript (github.com)](https://github.com/MikeMcl/decimal.js)。

## 测试

使用 jest 对  null、undefined、NaN、Infinity、-Infinity 的构造和运算做了严格测试，约 150 个单元测试用例。

命令 `npm run test-nasl-decimal`。

详见 `test/NaslDecimal.spec.mjs`。

```
-----------------|---------|----------|---------|---------|----------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|----------------------
 NaslDecimal.mjs |   98.21 |     97.5 |   97.29 |   98.19 | 8,183
-----------------|---------|----------|---------|---------|----------------------
```

