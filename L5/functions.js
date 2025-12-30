// functions: A block of code designed to perform a particular task; it is executed when "called" or "invoked".
// function functionName(parameters){
    // code to be executed
// }    

// function definition
function greet(name, greetingMessage){// parameters
    console.log(greetingMessage + ", " + name + "!");
}
// function invocation
greet("Alice", "Hello"); // arguments
greet("Bob", "Good morning");   

// redundancy mitigation using functions

// function to calculate the sum of two numbers
function sum (a, b){
    // a and b are local variables of the function with block scope
    return a + b;
}

console.log(sum(3,4)); // 7

// arrow functions (ES6 feature)
// syntax: const functionName = (parameters) => { // code to be executed }

const sumArrow = (a,b) =>{
    return a + b;
}

console.log(sumArrow(5,6)); // 11

const multiplyArrow = (a,b) => {
    return a * b;
}

console.log(multiplyArrow(3,5));