/*
//functions
//----------------------------------//

//function findSum(num1: number,num2: number):number(return wenna ona type ek define krnawa){
//return num1+num2+"" (methanin define krnne return wenna ona type eka );
//return `sum is ${num1+num2}`; string type ek

function findSum(num1: number,num2: number){
    return num1+num2;
}
function findTheSum1(num1: number, num2: number){
    return `Sum is ${num1+num2}`;


    function findTheSum2(num1: number|string , num2: number|string){
        if (typeof num1 === 'string' || typeof num2 === 'string'){ // type guard
            return +num1 + +num2;
        }else{
            return num1 + num2;
        }
    }
    let result = findSum(10,20);
    console.log("result :"+result);

    let result3 = findTheSum1(20,40);
    console.log(result3)

    let result4 = findTheSum2('20',30);
    console.log(result4);
*/
