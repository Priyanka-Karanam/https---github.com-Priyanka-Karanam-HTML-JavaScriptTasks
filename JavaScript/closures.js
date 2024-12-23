function foo() {
     let b = 1;
    function inner() 
    { 
        return b;
    }
    
    return inner;
    
    }
    
    let getinner = foo();
    console.log(getinner());
     console.log(getinner()); 
     console.log(getinner());
    