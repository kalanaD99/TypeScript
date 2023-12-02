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

function updateTbl() {
    table.innerHTML = "";
    accounts.map(r => {
        let record_element = document.createElement('tr');
        let record_data = `<td>${r.owner_name}</td>
                                  <td>${r.fixed_amount}</td>
                                  <td>${r.interest_rate}</td>
                                   <td>${r.annual_interest}</td>`
        record_element.innerHTML = record_data;
        table.appendChild(record_element);
    });


    update_btn.addEventListener('click', () => {
        console.log("paka");
        let new_interest = update_input_fixed;
        let new_Account: Account[] = [];
        rate = +new_interest;
        accounts.map(r => {
            r.interest_rate = rate;
            r.annual_interest = (r.interest_rate * rate) / 100;
            new_Account.push(r);
        })
        accounts = new_Account;
        updateTbl();
    });
}