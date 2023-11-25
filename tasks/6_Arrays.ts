//arrays
//------------------------------------

let num_array: number[] = [1,2,3,4];
let str_array: string[] = ['ranil','mahinda','gota'];
let str_num_array : (number|string)[] =[1,2,'ranil',69,'mahinda'];

let student1 = {id:1, name:'kalana',age:24,faculty: 'cse'};
let student2 = {id:2, name:'kavindu',age:25,faculty: 'Agri'};
let  student3 = {id:2, name:'kavindu',age:25,faculty: 'Agri',uni:'colombo'};;

//uni ? : string ==> optional(?)
let students: {id: number; name: string, age: number, faculty: string,uni?: string}[] = [];

students.push(student1);
students.push(student2);
students.push(student3);