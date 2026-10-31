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

class Customer {
    name;
    age;
    isStudent;

    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}

let custoemr1 = new Customer("saman", 20, true);
console.log(custoemr1);

let custoemr2 = new Customer("kamal", 25, false);
console.log(custoemr2);


let student = [
    {
        name: "saman",
        age: 20,
        isStudent: true,
        marks: [
            {
                subject: "Math",
                mark: 90
            },
            {
                subject: "Science",
                mark: 85
            }

        ]
    }
]
console.log(student);
console.log(student[0].marks[0].subject);
console.log(student[0].marks[1].subject);


// -------------------- Arithmetic Operators --------------------//
let a = 10;
a++;
console.log(a); 

let b = 5;

let sum = a + b;
console.log(sum);

// -------------------- Comparison Operators --------------------//
let x = 10;
let y = "10";

console.log(x === y); // Strict equality operator (checks value and type)
console.log(x == y);

// -------------------- Logical Operators --------------------//

if(false || false){
    console.log("Working");
}else{
    console.log("not working");
}

