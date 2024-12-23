function divide(a,b){ 
    try{
    if(b===0){
    
    throw new Error("division by zero is not allowed")
    
    }
    let result = a/b; console.log(result); // 0.5
    }
    
    catch(e){
    console.log(e.message);
    }
    finally{
    
    console.log(" Execution completed");
    
    }
    }
    divide(20,0);
    