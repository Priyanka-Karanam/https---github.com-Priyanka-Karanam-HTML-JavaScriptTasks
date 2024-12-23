//*1 referred with value to a variable*//
// var m =function add(a,b){
//     var c=a+b;
//     console.log(c);
//     console.log("it is fun expression");
// }
// console.log(m(29,21));
//*2 passing arguments to other fun*//
// function f1(a){
//     a();
//     console.log(a);
// }
// f1(function(){
//     console.log("passing anonymus fun as argument to f1 function");
// })
//* 3 returned another fun *//
function greetings(){
    return function greet(){
        console.log("welcome to my world");
    }
}
var m=greetings();
m();