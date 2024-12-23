var emp={
    name:"emp1",
    address:"Delhi",
    getInfo:function(country,pincode,hno){
        return this.name+"\t"+this.address+"\t"+country+"\t"+pincode+"\t"+hno;
    }
}
var emp2={
    name:"emp2",
    address:"hyd",
}
var arr=["India",521175,"6-263"]
console.log(emp.getInfo.call(emp2,arr[0],arr[1],arr[2]));
console.log(emp.getInfo.apply(emp2,arr));
console.log(emp.getInfo.call(emp,arr[0],arr[1],arr[2]));
console.log(emp.getInfo.apply(emp,arr));