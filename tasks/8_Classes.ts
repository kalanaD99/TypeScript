
//===Read only=======
class person{
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
/*
----ReadOnly keyword-----
person1.nic = "199958258588";*/ // cannot update while using read only keyword



