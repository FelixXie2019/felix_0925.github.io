# 前端面试
# JS基础

## JS的数据类型

     1. 基本数据类型（7）：Boolean, String, Number, Undefined, Null, Symbol(ES6 新增), BigInt
     2. 引用数据类型：Object, Function, Array, RegExp, Set, Date

## 判断数据类型

### typeof

对于基本数据类型来说，除了 null 都可以显示正确的类型，typeof 对于引用数据类型来说，除了函数都会显示 object。

```

typeof 5 // 'number'
typeof '5' // 'string'
typeof undefined // 'undefined'
typeof false// 'boolean'
typeof Symbol() // 'symbol'
console.log(typeof null)  //object
console.log(typeof NaN)   //number

typeof [] // 'object'
typeof {} // 'object'
typeof new RegExp   // 'object'
typeof new Date   // 'object'
typeof console.log // 'function'

```
注意： 调用typeof null返回的是"object", 因为特殊值null被认为是一个对空对象的引用。
