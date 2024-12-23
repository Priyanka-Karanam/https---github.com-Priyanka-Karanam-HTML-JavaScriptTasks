//*Let keyword//*
//*BlockScope//*
{
    let num=21;
    console.log(num);
}
console.log(num);// num is not defined error
//*global Scope//* ex2 var is declared in the main body
let num=21;
console.log(num);
function fun1(){
    console.log(num);
}
fun1();//we can accesses anywhere in the program
//*function scope//* ex3 var declare with in the function we cannot access outside the fun//*
// let num=29;
// console.log(num);
// function fun1(){
//     let num2=21;
//     console.log(num);
//     console.log(num2);
// }
// fun1();
//* EX4 Redeclaring variables in diff blocks
// let x=5;
// {
//     let x=44;
//     console.log(x);
// }
// console.log(x);
//* EX5 Redeclaring var in same blocks
// let x=21;
// {
//     let x=66;
//     console.log(x);

// console.log(x);
// }

// let x=29;


// console.log(x);

