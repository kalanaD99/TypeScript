
/*
//===Read only=======
class person{
    getNic(): any {
        throw new Error("Method not implemented.");
    }
    name: string;
    age: number;
    readonly nic: string; // cannot update when using read only keyword....

    constructor(name: string, age: number, nic: string) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
}

let person1 = new person('kalana',24,'199908400628');
console.log(person1);
person1.name = "Janith";
console.log(person1);
/!*
----ReadOnly keyword-----
person1.nic = "199958258588";*!/ // cannot update while using read only keyword

*/



/*


//====Private===========
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


//tuple
// tuple is a colletion which is ordered and unchangeable

let data : [string,number,string,boolean,number] = ['kalana',2,'amma',true,1];
