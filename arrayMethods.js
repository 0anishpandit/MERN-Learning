// Array Methods
//  1. Map[x,y,z] => [a,b,c]

const data = [3 , 4,56,66,55,96,10,2,35,88];
console.log(data);

// Map Function
console.log("Map ==================================================================");

const mapResult = data.map((value) => value + 10);
console.log(mapResult);

// Filter Function
console.log("Filter ==================================================================");
const data1 = ["a", "b" , "c" , "d" , "e" , "a" , "a"];
const filterResult = data1.filter((value) => value =="a");
console.log(filterResult);

// Find Function
console.log("Find ==================================================================");
const data2 = ["A" , "B" , "C" , "D" , "A" , "B"];
const findResult = data2.find((value) => value == "B");
console.log(findResult);

// Includes , Some , Every Function []=>boolean
console.log("Includes ==================================================================");
const includeResults = data.includes(10); 
console.log(includeResults);

// Includes , Some , Every Function []=>boolean
console.log("Some ==================================================================");
const someResults = data.some((value)=>value>20); 
console.log(someResults);

// Includes , Some , Every Function []=>boolean
console.log("Every ==================================================================");
const everyResults = data.every((value)=>value>20); 
console.log(everyResults);

// New way to write on console where we can print multiple items on single constole statement
console.log({mapResult , findResult , includeResults , someResults , everyResults});