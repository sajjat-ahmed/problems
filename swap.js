//swap temporary way
var a = 5;
var b = 7;
var temp = a;
a = b;
b = temp;
console.log("after swap: a =",a , "b =", b);

//swap
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: a =",x , "b =", y);


//swap JS way
var p = 5;
var q = 7;

[p, q] = [q, p];
console.log("after swap: a =",p , "b =", q);