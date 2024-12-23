//StringiInterpolation&StringConcatination
function myInfo(fname, lname, country){
    return `My name is ${fname} ${lname} .${country} is my favorite country`;//Stringinterpolation
}
console.log(myInfo("Priya", "Karanam","India"));

function myInfo(fname, laname, country){
    return "My name is "+fname+" "+laname+". "+country+"is my favorite country";
}
console.log(myInfo("Sowjanya","Ravuri","India"));