// Variable : Its a memory element(means the variable helps us to check for or occupy the memory, not like we can change the value whenever we need it.)

// we dont need to determine the specific datatype in the js like other programming language 
var ram =10;
var names ="Ram";
var isMAle = false;
console.log(ram);  //this is like a print statement int the js in the console

// Note: We never use the var for the variable declaration since when we use this then again in program we are able to use the same variable name multiple time nmaking the errors in the program.
var age =20;
console.log(age);
var age= 30;
console.log(age);

// There are to alternative for this , i.e "let" & "const" 
// "let" we can change the previous value if we use the let , and we generally dont use "let " unless it is required
let phone =9845613131;
console.log(phone);
phone=3131341651531313;
console.log(phone);

// we use "cosnt" normally unless others are required
const address = "Dharan, Nepal"
console.log(address);

// address="ktm,nepal"  //when we will do this then this will cause an error that assigning to the const variable 
 
// DATATYPES
/*
1. String
2. Number
3. Boolean
4. Object
5. Array
 */

// String Example
const name = "Ram Raj Rai";
console.log(name);

// Number Example
const postalCode = 56700;
console.log(postalCode);

// Boolean Example
const isAdult = false;
console.log(isAdult);

// Object Example(it is like a Key-value pair)
const profile ={
    name: "Anish Pandit",
    ID_Number: 11212799,
    Address: "Dharan, Nepal"
}
console.log(profile);
console.log(profile.ID_Number);

// Array ( its like a Index value(position), index always start from 0)
const marks = ["anish" , 12345, "Dharan,Nepal" , 98420257599];
console.log(marks[2]); 

// If-else / if-else if - esle case
if (58>3){
    console.log("True");
}else{
    console.log("False");
}

if (1>3){
    console.log("True");
}else if (6==6){
    console.log("Equal");
}else{
    console.log("False");
}

// switch case
const day = "monday";
switch (day) {
    case  "saturday":
    console.log("Holiday");
    break;

    case "sunday":
    console.log("Holiday");
    break;

    default:
    console.log("Not Holiday");
    break;

}