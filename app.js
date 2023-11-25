console.log("Hello TypeScript");
/*
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
*/
//functions
//----------------------------------//
//function findSum(num1: number,num2: number):number(return wenna ona type ek define krnawa){
//return num1+num2+"" (methanin define krnne return wenna ona type eka );
//return `sum is ${num1+num2}`; string type ek
/*function findSum(num1: number,num2: number){
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
}*/
/*
let result = findSum(10,20);
console.log("result :"+result);

let result3 = findTheSum1(20,40);
console.log(result3);

let result4 = findTheSum2('20',30);
console.log(result4);

*/
/*
             // object
//=================================//

let Student:{
    id: number;
    name: string;
    age: number;
    collage: string
};

Student = {id:1,name: 'Kalana', age:24, collage:'Turiba'};
console.log(Student);


              //Distance Calculator
//============================================//

function calcDistance(location1, location2) {
    var lon1 = location1.lon;
    var lat1 = location1.lat;
    var lon2 = location2.lon;
    var lat2 = location2.lat;
    // ---- calc distance  ----
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // Radius of the Earth in kilometers (mean value)
    var R = 6371;
    // Calculate the distance
    var distance = R * c;
    // ---- calc distance  ----
    return distance;
}
var location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
var location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi
var distance = calcDistance(location_1, location_2);
console.log("Distance: ".concat(distance.toFixed(2), " KM"));

//------------------------------------------------------------------------------------------------
let btn_element= document.getElementById('btn');
let location1_lat_input_element  = document.getElementById('lat1') as HTMLInputElement;
let location1_lon_input_element  = document.getElementById('lon1') as HTMLInputElement;
let location2_lat_input_element  = document.getElementById('lat2') as HTMLInputElement;
let location2_lon_input_element  = document.getElementById('lon2') as HTMLInputElement;
let result_element = document.getElementById('result');

 btn_element.addEventListener('click',()=>{
     let location1_lat = location1_lat_input_element.value;
     let location1_lon = location1_lon_input_element.value;
     let location2_lat = location2_lat_input_element.value;
     let location2_lon = location2_lon_input_element.value;

 })*/
/*
//arrays
//------------------------------------
//types

    let student1 = {id:1, name:'kalana',age:24,faculty: 'cse'};
    let student2 = {id:2, name:'kavindu',age:25,faculty: 'Agri'};
    let student3 = {id:2, name:'kavindu',age:25,faculty: 'Agri',uni:'colombo'};

    //custom type creation with type
    type Graduate = {id: number; name: string, age: number, faculty: string,uni?: string};
    //custom type creation with interface
    interface Graduate2 {
        id: number;
        name: string;
        age: number;
        faculty: string;
        uni?: string;
    }
    let students: Graduate[]=[];
    let teachers: Graduate2[]=[];

         /!*   //uni ? : string ==> optional(?)
    let students: {id: number; name: string, age: number, faculty: string,uni?: string}[] = [];*!/

    students.push(student1);
    students.push(student2);
    students.push(student3);

*/
//Class
//========================================================
var person = /** @class */ (function () {
    function person(name, age, nic) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
    return person;
}());
var person1 = new person('kalana', 24, '199908400628');
console.log(person1);
person1.name = "Janith";
console.log(person1);
