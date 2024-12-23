var person={
    firstName:"Priya",
    lastName:"Karanam",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
console.log(person.fullName());
var member={
    firstName:"sindhu",
    lastName:"Thanniru",

}
console.log(person.fullName.bind(member));
