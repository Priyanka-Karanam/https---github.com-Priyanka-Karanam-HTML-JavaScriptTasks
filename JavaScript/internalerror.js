function test(x) {
    if (x <= 0)
return;
console.log(x);
    test(x-1); // recursion function()
    }
    test(100000);

