console.log("Hello, World!");

let = false;
console.log(typeof let);

name = 123;
console.log(typeof name);

{
        let city = "New York";
        console.log(city);
}

console.log(city); // This will throw an error because 'city' is not defined outside the block

{
    var bike = "Ducati";
}
console.log(bike); // This will log "Ducati" because 'bike' is defined with 'var' and is function-scoped