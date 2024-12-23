// var test=12
// function foo(){
//     console.log(test);
// }
// foo();
//*declaring Multiple variables*//
// var test1=12,
// test2=16,
// test3=14
// function foo(){
//     console.log(test1,test2,test3);
// }
// foo();
//*Variable hoisting*//
// console.log(test);
// var test=12;// we wii get o/p without error the variable hoisted at the top even before execution of the program begins and the variables is initialized with default value of UNDEFINED
//*Example2 REdeclaring the varuable in same global block*//
// var test1=21;
// var test1=29;
// console.log(test1);
//*Ex3:Redeclaring the variable in another scope//*
// var age=23;
// function foo(){
//     var age=27;
//     console.log(age);
// }
// foo();
// console.log(age);
//*Ex4 try to delete the global var using var in "use strict" mode//*
'use strict'; var test=31;
delete (test);
console.log(test);