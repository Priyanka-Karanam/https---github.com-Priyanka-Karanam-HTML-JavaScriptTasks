//reuse existing object resources we use call fun//
var customer={
    name:"priya",address:"Jaggayyapet",
    detials:function(){
        return this.name+"\t"+this.address
    }
}
    console.log(customer.detials());
      var customer2={
        name:"venky",address:"Hyd",
        
      }
      console.log(customer.detials.call(customer2));
