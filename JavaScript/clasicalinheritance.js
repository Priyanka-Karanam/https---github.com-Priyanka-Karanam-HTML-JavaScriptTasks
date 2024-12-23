class Animal { constructor(name){
    this.name=name;
    }
    eat(){
    
    console.log(`${this.name} , is eating ...`);
    }
    
    }
    // child class
    
    class Dog extends Animal{ bark(){
    console.log(this.name ,"is smiling!");
    
    }
    }
    
    const obj=new Dog("trixy"); obj.eat();
    obj.bark();
    