// var name='小红';
// function a() {
//     var name='小白';
//     console.log(this.name);
// }
// function d(i) {
//     return i();
// }
// var b={
//     name:'小黄',
//     detail:function (){
//         console.log(this.name);
//     },
//     bibi:function (){
//         return function() {
//             console.log(this.name);
//         }
//     }
// }
// var c=b.detail;
// b.a=a;
// var e=b.bibi();
// a();
// c();
// b.a();
// d(b.detail);
// e();

// a.call(b);


let str='https://www.baidu.com?a=b&c=d&f=g&h=j'
let index=str.indexOf('?')
let right=str.substring(22)
let str1=right.split('&')

console.log(str1);