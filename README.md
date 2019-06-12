# 版本号对比工具

用于对比两个版本号的高低，支持大于、小于，等于API

- gt：greater than
- lt：less than
- eq：be equal to（等于判断就不需要了，直接字符串判断即可）

## 使用方法



```js
let superversion = require('superversion');

let A = '4.0.1';
let B = '4.1.0';

superversion(A).is(B) === 'lt'; // true

superversion(A).gt(B); // false
superversion(A).lt(B); // true

```

## todo
    - 支持 alpha 类型的版本号