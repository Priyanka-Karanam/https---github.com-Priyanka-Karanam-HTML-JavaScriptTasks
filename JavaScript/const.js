//Ex1 cannot accept the reassigned values//
// const x=29;
// console.log(x);
// x=21; // we get the error bcz reassign the value.

//Ex2 Variable contains the block scope
const y=21;
{
    const y=20;
    console.log(y);
    {
        const y=29;
        console.log(y);
    }
    {
        const y=45;
        console.log(y);
    }
}
console.log(y);
// Ex 3 variables must ne assigned
// const x;
// x=12;// syntax error bcz cannot initialize value to the const declaration
//EX 4 cannot be hoisted const
// x=3;
// console.log(x);
// const x;// syntax error bcz cannot initialize value to the const declaration