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

students.push(student1);
students.push(student2);
students.push(student3);