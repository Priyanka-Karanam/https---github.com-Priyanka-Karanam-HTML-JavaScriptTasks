//passing an obj as arg for a fun//
var person={
    name :"Priya", age:25
}
function greet(obj){
    console.log(obj.name+"\t"+obj.age);
}
greet(person);