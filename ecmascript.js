const name = "Anish Pandit";
const age = 23;
const address = "Dharan, Nepal";

console.log("My name is " + name + " and I am " + age + " old and I live in " 
    + address + "."
);


/*
    ECMASCRIPT:
        --is a general-purpose , object-oriented programmming language specification.
        --When a developer writes a codes in a modern web browser or Node.js environmnet, they are using Javascript , which is a superset of the EcmaScript Standard.
        --While the two terms are often used interchangebly , a proper definitation clarifies that Ecmascript is the fundamental , official blueprint, while javascript is the most widely used implementation of that blueprint.

*/

// Template Literals
console.log(`My name is ${name} and I am ${age} old and I live in ${address}.`);
console.log(`My name is ${name} 
and I am ${age} old 
and I live in ${address}.`);


/*

// Destructurin : in JavaScript is a powerful features that allowing for extracting values from arrays or propertirs from objects anf assigning them to distinct variables in a concise and readable way.
 
its of Two types:
1. Object Destructring
    - this allows you to ectract properties from objects and assign them to variables , typically with the same name as the property.we can change the name also of the key ! 
*/
const person = {
    name: "Anish",
    ages: 23
};
const {name:firstName,ages} = person;
console.log(firstName);
console.log(ages);

/**
    2. Array Destructuring
        - this allows you to unpack values from arrays into individuals variables.
 */

const colors = ["Red" , "Green" , "Yellow"];
const[firstColor, secondColor,thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// Spread Operator(Generally we use the spread operator for copying the data)
const profile={
    name: "Ram",
    age:26,
    address: "Itahari"
};

const user = {
    email : "dhiraj.rai@gmail.com",
    password: 1234567890
};

// When we need to combine both the list , there are multiple ways , like 
const userData= {
    name : profile.name,
    age : profile.age,
    address : profile.address,
    email : user.email,
    password : user,
};
console.log(userData);

// Using spread operator to make it ease
const userdatas = {
    ...profile,
    ...user,
};
console.log(userdatas);

// Same this spread operators can be used for array also
const array_demo = ["Ram" , "Shyam", "Dhiraj", "Sita" , 1];
const array_demo1 = ["Red" , "Green" , "Blue" ,"Yellow"];

const userDatass = [...array_demo,...array_demo1];
console.log(userDatass);



// Arrow Function 
/*
    Arrow functions, introduced in ECMAScript 2015 (ES6), provide a concise syntax for writing function expressions in JavaScript. They offer a shorter way to define functions and have distinct characteristics compared to traditional function expressions, particularly regarding the this keyword.

    Key Features and Syntax:

    Concise Syntax:
        -They omit the function keyword.
        -The => (arrow) separates the parameter list from the function   body.
        -For single-expression bodies, curly braces {} and the return -keyword can be omitted for an implicit return.
        -For single parameters, the parentheses () around the parameter can be omitted.
*/


// General type of function
const a = 5;
const b = 5;

function sum () {
    console.log(a + b);
};

sum();


// Arrow Function
const total = () => console.log(a +b );

total();


