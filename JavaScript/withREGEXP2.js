var str= "HapPy holi to everyone"; var pattern=/p/gi;
console.log(pattern.test(str));

console.log(str.match(pattern).length);

var s="xcy";

var pattern=/x[abc]y/;
console.log(pattern.test(s));
var text="ABD879"; var pattern=/^[A-Z]/;
console.log(pattern.test(text));
var text="123ABD"; var pattern=/[^A-Z]/;
console.log(pattern.test(text));
var mail="vinay@gmail.com"; var pattern=/@gmail.com/;
console.log(pattern.test(mail));
 
var str="$#%^&a"; var pattern=/\w/;
console.log(pattern.test(str)); var str="ASDE1@#";
var pattern= /\d/;

console.log(pattern.test(str));

var str="1234"; var pattern= /\D/;
console.log(pattern.test(str));

