const languages=["SQL",45,true,"React"];
console.log(languages);
console.log(typeof(languages));//object
const sample=[];
sample[0]=1;
sample[1]=21;
sample[2]="priya";
sample[3]=true;
console.log(sample[6]);// undefined
console.log(typeof(sample));//object
const js=new Array("ex1","ex2",29,false);
console.log(js);
js[2]=21;
console.log(js);
js[3]=29;
console.log(js);
js.pop();
console.log(js);