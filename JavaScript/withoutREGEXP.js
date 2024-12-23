var str= "Happy Holi to everyone "; 
function occurence(str,char){
    var strarray=str.split('');
     console.log(strarray); 
    
    var result=strarray.filter( function(value)
    { 
        return value == char;
    })
    
    console.log(result);
    }
    
    occurence(str,'p');
    
    