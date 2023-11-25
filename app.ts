console.log("Hello TypeScript");

//why ts
function sum(num1: number, num2: number){
    return num1 + num2;
}

let n1 = '10';
let n2 = 20;

let value1 = sum(+n1,+n2);
console.log(value1);

let value2 = sum(+n1,+n2);
console.log(value2);

           //primitive number String Boolean
//-------------------------------------------------//
function sendSum(num1: number, num2: number, name: string, isWithName: boolean){
    let result = isWithName ? `Hi ${name}, Sum is ${num1 + num2}` : `Sum is ${num1 + num2}`;
    return result;
}

let num1: number = 10;
let num2: number = 10;
let myName : string = 'Kalana';
let withName : boolean = true;

let result1 = sendSum(10, 20,'Kalana', true);
console.log(result1);
let result2= sendSum(10, 20,'Kalana', false);
console.log(result2);

            //functions
//----------------------------------//

//function findSum(num1: number,num2: number):number(return wenna ona type ek define krnawa){
//return num1+num2+"" (methanin define krnne return wenna ona type eka );
//return `sum is ${num1+num2}`; string type ek

function findSum(num1: number,num2: number){
    return num1+num2;
}
/*function findTheSum(num1: number, num2: number){
    return `Sum is ${num1+num2}`;
}*/

function findTheSum(num1: number|string , num2: number|string){
    if (typeof num1 === 'string' || typeof num2 === 'string'){ // type guard
        return +num1 + +num2;
    }else{
        return num1 + num2;
    }
}
let result = findSum(10,20);
console.log("result :"+result);

/*let result3 = findTheSum(20,40);
console.log(result3)*/


