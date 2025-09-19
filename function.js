// Function :- It is a piece of code to perform the Specific task
 

/*
 ::SYNTAX::

    fucntion <functionName> (parameters){
        // code
    }

*/

// Function without parameters i.e no arguments
function test_noparam (){
    // code
    console.log("Hello No Parameter Function");
}

test_noparam();

// Fiunction with one parameter
function test_onePara (name){
    console.log("Hello " + name );
}

test_onePara("Ram");


// Function with multiple parameter(addition)
function addition(num1,num2){
    const add = num1 + num2 ;
    console.log("Your Addition is " +add);
}

addition (5,5);

// Function with single parameter(Square)
function Square(number){
    const result =(number * number);
    console.log("The Square of the given number is " +result);
}
Square(5);

// Return Type 
function percentage(score,total){
    const percent = (score/total) * 100 ;
return percent;
}

const result = percentage(70,100);
console.log("The Percentage is " + result);


// Return Type with default value to the last argument i.e total
function percentages(scores,totals = 50){
    const percents = (scores/totals) * 100 ;
return percents;
}

const results = percentages(100);
console.log("The Percentage is " + results);

// Return Type with default value to the specific argument i.e scores
function percentages1({scores1 = 50,totals1}){
    const percents1 = (scores1/totals1) * 100 ;
return percents1;
}

const results1 = percentages1({totals1:200});
console.log("The Percentage is " + results1);


// Local and Global variable
const test_global = "I am Global Variable";
console.log(test_global);

function test_variable(){
    const local_variable= "I am Local Variable";
    console.log(local_variable);
    console.log(test_global);
}

test_variable();
// console.log(local_variable); //this will through local_variable not defined error


// Function for the cubic number 
function cubic (number3){
    const cube = (number3 * number3 * number3);
return cube;
}

const results3 = cubic(3);
console.log("The cube of the given number is " +results3);

for (let i=1;i<=10;i++){
    const results3 = cubic(i);
    console.log("The cube of " + i +" is " + results3);
}