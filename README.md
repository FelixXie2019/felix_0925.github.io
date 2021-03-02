# JS基础

## 1.var & let & const

### 变量提升

var声明的变量会自动提升到函数的作用域顶部

```
function foo(){
    console.log(agr);
    var age = 12;
}
foo()   // undefined

等价于

function foo(){
    var age;
    console.log(age);
    age = 12;
}
foo();   // undefined
```

##### let声明的范围是块作用域，而var声明的范围是函数作用域

```
let age;
let age;    //SyntaxError; 标识符age已经声明

let age=30;
console.log(age);   // 30
if(true){
    let age=12;
    console.log(age);  // 12
}
```

let声明的变量不会在作用域中被提升

```
console.log(age);   //ReferenceError: age没有定义
let age=12;
```
在解析代码时，JS引擎也会注意出现在块后面的let声明，只不过在此之前不能以任何方式来引用未声明的变量。在let声明之前的执行瞬间被称为"暂时性死区"，在此阶段引用任何后面才声明的变量都会抛出ReferenceError。

##### const的行为跟let基本相同，唯一一个区别使用它声明变量时必须同时初始化化变量，且尝试修改const声明的变量会导致运行时错误

### es6 for循环中let和var区别详解

```
for(var i=0;i<5;i++){
  setTimeout(()=>{
    console.log(i);//5个5
  },100) 
}
console.log(i);//5
console.log('=============')
//var是全局作用域，有变量提升的作用，所以在for中定义一个变量，全局可以使用，循环中的每一次给变量i赋值都是给全局变量i赋值。
 
for(let j=0;j<5;j++){
  setTimeout(()=>{
    console.log(j);//0,1,2,3,4
  },100) 
}
console.log(j);//报错 j is not defined
//let是块级作用域,只能在代码块中起作用，在js中一个{}中的语句我们也称为叫一个代码块，每次循环会产生一个代码块，每个代码块中的都是一个新的变量j;
```




## 2. JS的数据类型

1. 基本数据类型（7）：Boolean, String, Number, Undefined, Null, Symbol(ES6 新增), BigInt
2. 引用数据类型：Object, Function, Array, RegExp, Set, Date

## 3.判断数据类型

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
