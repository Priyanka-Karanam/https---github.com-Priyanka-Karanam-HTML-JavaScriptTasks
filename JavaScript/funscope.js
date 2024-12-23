var m=function(a,b){
    var c=a+b;
    // console.log(c);
    console.log("it is fun expression");
    console.log("parent fun");
    function sample(){
        console.log(c);
        console.log("it is child function");
    }
    return sample;
}
var inner =m('abc','def');
inner();