// console.log("Hello, World!");

// let = false;
// console.log(typeof let);

// name = 123;
// console.log(typeof name);

// {
//         let city = "New York";
//         console.log(city);
// }

//console.log(city); // This will throw an error because 'city' is not defined outside the block

// {
//     var bike = "Ducati";
// }
// console.log(bike); // This will log "Ducati" because 'bike' is defined with 'var' and is function-scoped

//----------------------------------------varibale Declaration---------------------------------------------//

// let name = "John"; // Using 'let' to declare a variable
// let age = 30; // Using 'let' to declare a variable
// let isStudent = true; // Using 'let' to declare a variable
// let customer = [];
// let person = {
//     name: "John",
//     age: 30,
//     isStudent: true,
// };

// console.log(person.name);
// console.log(person.age);

// class Customer {
//     name;
//     age;
//     isStudent;

//     constructor(name, age, isStudent) {
//         this.name = name;
//         this.age = age;
//         this.isStudent = isStudent;
//     }
// }

// let custoemr1 = new Customer("saman", 20, true);
// console.log(custoemr1);

// let custoemr2 = new Customer("kamal", 25, false);
// console.log(custoemr2);


// let student = [
//     {
//         name: "saman",
//         age: 20,
//         isStudent: true,
//         marks: [
//             {
//                 subject: "Math",
//                 mark: 90
//             },
//             {
//                 subject: "Science",
//                 mark: 85
//             }

//         ]
//     }
// ]
// console.log(student);
// console.log(student[0].marks[0].subject);
// console.log(student[0].marks[1].subject);


// -------------------- Arithmetic Operators --------------------//
// let a = 10;
// a++;
// console.log(a); 

// let b = 5;

// let sum = a + b;
// console.log(sum);

// -------------------- Comparison Operators --------------------//
// let x = 10;
// let y = "10";

// console.log(x === y); // Strict equality operator (checks value and type)
// console.log(x == y);

// -------------------- Logical Operators --------------------//

// if(false || false){
//     console.log("Working");
// }else{
//     console.log("not working");
// }

//-------------------- Conditional Statements --------------------//
// let x = 10;
// let y = 20;

// if(x>y){
//     console.log("x is grater than y");
// }else{
//     console.log("x is less than y");
// }

// mark = 10;
// if (mark >= 90){
//     console.log("A+");
// }else if(mark >= 75){
//     console.log("B");
// }else if(mark >= 65){
//     console.log("C");
// }else if(mark >= 50){
//     console.log("D");
// }else{
//     console.log("F");
// }

//-------------------- Switch Statement --------------------//
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // -------------------- For Loops --------------------//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // -------------------- While Loops --------------------//
// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }

// -------------------- Do-While Loops --------------------//
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

console.log("--------------------------------------------------");

let k = 1;
while(k<5){
    console.log(k);
    k++;
}

console.log("--------------------------------------------------");


//do while loop

let j = 0;
do{
    console.log(j);
    j++;
} while(j<5);

console.log("------------------------------------------------------");


let p = 10;
do{
    console.log(p);
    p++;
} while(p<5);