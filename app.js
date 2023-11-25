console.log("Hello TypeScript");
//why ts
function sum(num1, num2) {
    return num1 + num2;
}
var n1 = '10';
var n2 = 20;
var value1 = sum(+n1, +n2);
console.log(value1);
var value2 = sum(+n1, +n2);
console.log(value2);
//primitive number String Boolean
function sendSum(num1, num2, name, isWithName) {
    var result = isWithName ? "Hi ".concat(name, ", Sum is ").concat(num1 + num2) : "Sum is ".concat(num1 + num2);
    return result;
}
var num1 = 10;
var num2 = 10;
var myName = 'Kalana';
var withName = true;
var result1 = sendSum(10, 20, 'Kalana', true);
console.log(result1);
var result2 = sendSum(10, 20, 'Kalana', false);
console.log(result2);
//functions
//function findSum(num1: number,num2: number):number(return wenna ona type ek define krnawa){
function findSum(num1, num2) {
    return num1 + num2;
}
var result = findSum(10, 20);
console.log("result :" + result);
