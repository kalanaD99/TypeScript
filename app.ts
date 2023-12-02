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
/*

class person{
    name: string;
    age: number;
    private nic: string; // cannot update when using read only keyword....

    constructor(name: string, age: number, nic: string) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
    getNic(){
        return this.nic;
    }
}

let person1 = new person('kalana',24,'199908400628');
console.log(person1.name);

//console.log(person1.nic); == cannot access directly while using private key word
console.log(person1.getNic());

            //DB connection
//===========================================
class DBConnection {
  static connection: string;

    private constructor(value: string) {
       DBConnection.connection = value;
    }
    static getConnection(){
        if(!DBConnection.connection){
            new DBConnection('test-Connection');
        }
        return DBConnection.connection;
    }
}

let connection: string =DBConnection.getConnection();
console.log('Connection',connection);*/


//===================bank======================
/*

let owner_name_input_element = document.getElementById('ownerName')as HTMLInputElement ;
let fixed_Amount_input_element = document.getElementById('fixedAmount')as HTMLInputElement ;
let add_fix_button = document.getElementById('addFixBtn');

add_fix_button.addEventListener('click',()=>{
    let owner_name = owner_name_input_element.value;
    let fixed_amount = fixed_Amount_input_element.value;

    console.log("OwnerName ", owner_name);
    console.log("Amount ", fixed_amount);

})
*/

//===========================Bank.html - Type 1 =====================================

var ownerDB: { name: string, amount: number, interestRate: number, annualInterest: number }[] = [];


/* tsc app.ts --watch --> Auto compile ( ts --> js) */

/*let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
let owner_fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
let add_fix_btn_element = document.getElementById('addFixBtn');*/

/*
add_fix_btn_element.addEventListener("click", () => {
    let name = owner_name_input_element.value;
    let amount: any = owner_fixed_amount_input_element.value;

    console.log("Owner name :", name);
    console.log("fixed amount :", amount);

    //console.log(Owner : ${name}, fixed amount : ${amount});


    var ownerObject = {
        name: name,
        amount: amount,
        interestRate: 0,
        annualInterest: 0
    }

    ownerDB.push(ownerObject);
    loadOwner();


    /!* update Interest *!/
    document.getElementById('updateInterestBtn').addEventListener("click", () => {
        console.log("clicked..")
        let new_interest_rate = document.getElementById('newInterestRate') as HTMLInputElement;

        let newRate: any = new_interest_rate.value;


        ownerDB.forEach(owner => {
            owner.interestRate = newRate;
            owner.annualInterest = ((owner.amount / 100) * newRate) * 12;
        })

        loadOwner()
    })

})


function loadOwner() {
    let table = document.getElementById('fixedDepositTableBody');
    let rows = "";
    for (let i = 0; i < ownerDB.length; i++) {
        /create HTML row/

        rows += `<tr><td>${ownerDB[i].name}</td><td>${ownerDB[i].amount}</td><td>${ownerDB[i].interestRate}</td><td>${ownerDB[i].annualInterest}</td></tr>`;
    }
    table.innerHTML=rows;
}
*/

/*
//============================== Type 2 =========================

let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
let owner_fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
let add_fix_btn_element = document.getElementById('addFixBtn');
let table = document.getElementById('fixedDepositTableBody');
let update_btn = document.getElementById('updateInterestBtn');
let update_input_fixed = document.getElementById('newInterestRate');

class Account {
    owner_name: string;
    fixed_amount: number;
    interest_rate: number;
    annual_interest: number;

    constructor(owner_name: string, fixed_amount: number, rate: number, annual_interest: number) {
        this.owner_name = owner_name;
        this.fixed_amount = fixed_amount;
        this.interest_rate = rate;
        this.annual_interest = annual_interest;
    }
    updateRate( rate : number): void{
        this.interest_rate = rate;
        this.annual_interest = (this.fixed_amount + rate)/100;
    }
}
let rate = 12.5;
let accounts: Account[] =[];
add_fix_btn_element.addEventListener('click', () => {

    let owner_name = owner_name_input_element.value;
    let fixed_amount = owner_fixed_amount_input_element.value;

    let annual_interest = (+fixed_amount * rate)/100;
    let  account = new Account(owner_name,+fixed_amount,rate,annual_interest);
    accounts.push(account);

    console.log(`owner= ${owner_name}, fixed amount= ${fixed_amount}`);
    updateTbl();

});

function updateTbl(){
    table.innerHTML = "";
    accounts.map(r=>{
        let record_element = document.createElement('tr');
        let record_data = `<td>${r.owner_name}</td>
                                  <td>${r.fixed_amount}</td>
                                  <td>${r.interest_rate}</td>
                                   <td>${r.annual_interest}</td>`
        record_element.innerHTML= record_data;
        table.appendChild(record_element);
    });


    update_btn.addEventListener('click',()=>{
        console.log("paka");
        let new_interest = update_input_fixed;
        let new_Account: Account[] =[];
        rate = +new_interest;
        accounts.map(r=>{
           r.interest_rate =rate;
           r.annual_interest = (r.interest_rate * rate)/100;
           new_Account.push(r);
        })
        accounts = new_Account;
        updateTbl();
    })
}*/

//union
/*
// union

let array: (number | string | boolean)[] = [1, 2, "Hello", true];

class Student {
    id: number;
    name: string;
    college: string;
    faculty: string;
}

class Teacher {
    id: number;
    name: string;
    subject: string;
    college: string;
}

class Soldier {
    id: number;
    name: string;
    post: string;
}
*/

/*
//Enum

enum  Roles{
    SUPER_ADMIN,
    ADMIN =1,
    MANAGER,
    SELLER,
    BUYER
}

let myRole: Roles = Roles.ADMIN;

function sendingMessages(role:Roles){
    switch (role){
        case Roles.SUPER_ADMIN:
            console.log("Hello Super Admin");
            break;
        case Roles.ADMIN:
            console.log("Admin");
            break;
        case Roles.MANAGER:
            console.log("Hello Manager");
            break;
        case Roles.BUYER:
            console.log("Hello Buyer");
            break;
        case Roles.SELLER:
            console.log("Hello Seller");
            break;
    }
}*/
//heritage
class person{
    name:string;
    nic:string;
    age:number;
}
