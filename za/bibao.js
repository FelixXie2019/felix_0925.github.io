// // function foo(){  
// //     let a=12;
// //      function foo2(){
// //         console.log(a);
// //     }
// //     return foo2()
// // }
// // foo()

// var name = "The Window";
// var object = {
//     name: "My Object",
//     getNameFunc: function () {
//         return function () {
//             console.log(this);
//             return this.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());
// // var name = "The Window";

// // 　　var object = {
// // 　　　　name : "My Object",

// // 　　　　getNameFunc : function(){
// // 　　　　　　var that = this;
// // 　　　　　　return function(){
// // 　　　　　　　　return that.name;
// // 　　　　　　};

// // 　　　　}

// // 　　};
// // console.log(object.getNameFunc()());


// let normal={
// bibi:'比比',
// biubiu:function foo(){
//     let self=this
//     setTimeout(function(){
//         console.log(self.bibi);
//     }) 
// }
// }
// normal.biubiu()

let arrow={
    bibi:'比比',
    biubiu:function(){
        setTimeout(() => {
            console.log(this.bibi);
        })
        
    }
}
arrow.biubiu()