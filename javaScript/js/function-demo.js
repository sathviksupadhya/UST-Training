//syntax 1 for creating a function
function sum1(a,b){
    return (a + b);
}

console.log("sum1(4,5):" +sum1(4,5));

let x1 =20;
//syntax 2
let sum2 = function(x,y){
    return (x + y);
}
console.log("sum2(x,y):" + sum2(9,10));

//syntax 3
let sum3 = (x,y) => (x + y);
console.log("sum3(x,y):" + sum3(4,19));