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
// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// console.log("--------------------------------------------------");

// let k = 1;
// while(k<5){
//     console.log(k);
//     k++;
// }

// console.log("--------------------------------------------------");


// //do while loop

// let j = 0;
// do{
//     console.log(j);
//     j++;
// } while(j<5);

// console.log("------------------------------------------------------");


// let p = 10;
// do{
//     console.log(p);
//     p++;
// } while(p<5);

// ----------------------------- Functions --------------------// 
// normal function
// function myFunction() {
//     console.log("Hello world");
// }

// myFunction();

// // function with parameters
// function getSum(num1, num2) {
//     return num1 + num2;
// }

// console.log(getSum(10, 20));

// //functions with variable 
// let sum = function(num1, num2){
//     return num1 + num2;
// }

// console.log(sum(5,5));

// // arrow function  - method 04 
// let pluSum = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(pluSum(12,12));


// let plusSum = (num1, num2) => num1 + num2;


// let sample = txtValue =>{
//     return txtValue;
// }

// console.log(sample("Hii saman"));

// let sample1 = txtValue => txtValue;

// console.log(sample1("Hii kamal"));

//-----------------------How an object is created in java using a class and a constuct --------------------//
// class customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer1 = new customer("saman", 20, "New York");
// let customer2 = new customer("kamal", 25, "Los Angeles");

// console.log(customer1);
// console.log(customer2);


// ----------------- DOM Manipulation (DOM - Document Object Model) -----------------

// console.log(document);

// document.write("<h1>Hello World</h1>");
// document.write("<h2>Hello World</h2>");



// let number = 0;
// function btnClickMeOnAction(){

//     title.innerText = "Saman Kumara - " + number++;
// }

// -- Number Count APP -- 

// let number = 0;
// function btnIncrementOnAction(){
//   number++;
//   numberCount.innerText = "Number Count - " +number;
// }

// function btnDecrementOnAction(){
//    number--;
//    numberCount.innerText = "Number Count - " +number;

// }


// function btnSubmitOnAction(){
//    let txtName = document.getElementById("txtName");
//    console.log(txtName.value);

//    submitedName.innerText = "My Name is - " + txtName.value;
   
// }


// function btnAddOnAction(){
//     document.getElementById("txtNum1");
//     let inputnum1 = document.getElementById("txtNum1");
//     let inputnum2 = document.getElementById("txtNum2");

//     console.log(inputnum1.value);
//     console.log(inputnum2.value);
//     let result = parseFloat(inputnum1.value) + parseFloat(inputnum2.value);
//     document.getElementById("outPut").innerText = "Out Put Is = " + result;
//     console.log(result);

// }

// function btnSubtractOnAction(){
//     let inputnum1 = document.getElementById("txtNum1");
//     let inputnum2 = document.getElementById("txtNum2");

//     console.log(inputnum1.value);
//     console.log(inputnum2.value);
//     let result = parseFloat(inputnum1.value) - parseFloat(inputnum2.value);
//     document.getElementById("outPut").innerText = "Out Put Is = " + result;
//     console.log(result);
// }


// ---------- Customer Form APP -----------------

// let customerList = [];
// function btnSubmitOnAction() {

//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

//    let customer = {
//          name:txtName,
//          address:txtAddress,
//          age:txtAge,
//          email:txtEmail,
//          salary:txtSalary
//    }
//    console.log(customer);
//    customerList.push(customer);
//    console.log(customerList);
//    btnLoadTableOnAction();
//    resetInputFields();
// }
// function btnLoadTableOnAction(){
//    let tblCustomer = document.getElementById("tblCustomer");

//    tblCustomer.innerHTML += `
//         <tr>
//             <td>Saman</td>
//             <td>Colombo</td>
//             <td>25</td>
//             <td>saman@example.com</td>
//             <td>50000</td>
//         </tr>
//    `
// }


// function btnLoadTableOnAction() {
//      let tblCustomer = document.getElementById("tblCustomer");

//      let body = "";

//      for (let i = 0; i < customerList.length; i++) {
//             body += `
//         <tr>
//             <td>${customerList[i].name}</td>
//             <td>${customerList[i].address}</td>
//             <td>${customerList[i].age}</td>
//             <td>${customerList[i].email}</td>
//             <td>${customerList[i].salary}</td>
//          </tr>
//        `
//      }
//      tblCustomer.innerHTML = body;


// }

// function resetInputFields() {
//     document.getElementById("txtName").value = "";
//     document.getElementById("txtAddress").value = "";
//     document.getElementById("txtAge").value = "";
//     document.getElementById("txtEmail").value = "";
//     document.getElementById("txtSalary").value = "";
// }

// --------------------2026/11/14----------------------------

// let customerList = [
//     {
//         name: "kamal kumar",
//         email: "kamal@example.com",
//         item: [

//         ]
//     },
//     {
//         name: "sita devi",
//         email: "sita@example.com"
//     }
// ]

// console.log(customerList);

// let customerList = [];
// function btnAddCustoemrOnAction() {
//     let name = document.getElementById("txtName").value
//     let address = document.getElementById("txtAddress").value
//     let phone = document.getElementById("txtPhone").value
//     let email = document.getElementById("txtEmail").value

//     console.log(name, address, phone, email);

//     let customer = {
//         name: name,
//         address: address,
//         phone: phone,
//         email: email
//     }
//     console.log(customer);
//     customerList.push(customer);
//     console.log(customerList);
//     btnLoadTableOnAction();
    
// }
// function btnLoadTableOnAction(){
//     let tblCustomer = document.getElementById("tblCustomer")

//     let body = "";
    
//     for(let i = 0; i < customerList.length; i++){

//         body += `
//         <tr>
//           <td>${customerList[i].name}</td>
//           <td>${customerList[i].address}</td>
//           <td>${customerList[i].phone}</td>
//           <td>${customerList[i].email}</td>  
//         </tr>
//         `

//     }
    

//     tblCustomer.innerHTML = body;
// }


// let studentList = [
//     {
//         name: "kamal kumar",
//         age: 20,
//     },
//     {
//         name: "sita devi",
//         age:22
//     },
//     {
//         name: "ram kumar",
//         age: 21
//     }
// ]

// console.log(studentList[2].name);



// let y = Math.floor(Math.random() *10) +1;
// console.log(y);

// function btnSubmitGuessOnAction(){
//     let userGuess =  document.getElementById("txtGuess").value

//     if(userGuess == y){
//         Swal.fire({
//   title: "Congratulations!",
//   width: 600,
//   padding: "3em",
//   color: "#716add",
//   background: "#fff url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cTVudG8xenVwZTJ3MW53dXd4MHF4ZjFueGhhcGZhaHh1cXFqajV2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2Z6S6n38zjPswo/giphy.gif')",
//   backdrop: `
//     rgba(0,0,123,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `
// });
//     }else if(userGuess > y){
//         guess++;
//         alert("Your guess is too high! Try again.");
//     }else{
//         guess++;
//         alert("Your guess is too low! Try again.");
//     }

// }


//
// let var


//const 

// let custoemr = ["Saman","Kumara","Kavindu"]
// console.log(custoemr);
// console.log(typeof custoemr);



// custoemr = "Navindu"

// custoemr.push("Kumara")

// console.log(custoemr);
// console.log(typeof custoemr);


// const customer = ["nimal","kamal","saman"]
// console.log(customer);
// customer.push("kavindu");
// console.log(customer);

// ----------------- arrylist -----------------------------
// -push and reverse methods
// const customerList = [];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);
// customerList.push(4);
// customerList.push(5);


// console.log(customerList);
// customerList.reverse();
// console.log(customerList);


//- filter method
// const productList = [
//     {name:"bun",inStock:true,price:50},
//     {name:"milk",inStock:false,price:100},
//     {name:"egg",inStock:true,price:10},
//     {name:"bread",inStock:false,price:80},
//     {name:"butter",inStock:true,price:150}
// ]

// let inStockProductList = productList.filter(
//     function (product) {
//         return productFilter(product)
//     }
// );
// function productFilter(product){
//     return product.inStock == true;
// }
// console.log(inStockProductList);

// let inStockProductList2 = productList.filter(product => product.inStock == true);

// console.log(inStockProductList2);


// - sort method

// const leterList = ["c","a","b","f","e"]
// console.log(leterList);

// leterList.sort();
// console.log(leterList);

// -map method

// const salaryList = [10000,20000,30000,40000,50000]
// console.log(salaryList);

// let newSalaryList = salaryList.map(salary => salary * 2);
// console.log(newSalaryList);


// -find method
// const studentList = [
//     {name:"kamal",age:20},
//     {name:"nuwan",age:22},
//     {name:"kasun",age:21}
// ]

// let findStudent = studentList.find(student => student.name == "kamal");
// console.log(findStudent);



// ------------------------------ JSON - JavaScript Object Notation -----------------------------


fetch("https://jsonplaceholder.typicode.com/posts/").then(response => response.json()).then(data => {
    console.log(data);

    let table = document.getElementById("tblCustomer");
    

    let tblbody = "";

    data.forEach(element => {
        tblbody += `
            <tr>
             <td>${element.id}</td>
             <td>${element.title}</td>
             <td>${element.userId}</td>
            </tr>
        `
    });
    table.innerHTML = tblbody;
});