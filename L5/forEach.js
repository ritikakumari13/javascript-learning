// methods vs functions

// method : A function that is a property of an object. It is called using the syntax object.method().
// function : A block of code designed to perform a particular task; it is executed when "called" or "invoked".

// forEach method : executes a provided function once for each array element.

// callback function : A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

let numbers = [10, 20, 30, 40, 50];     

// numbers.forEach(function printVal(val){
//     console.log("val = ",val);
// });

// arrow function as callback
numbers.forEach((val) => {
    console.log(val);
});

// forEach parameters: callback function, thisArg (optional)
// callback function parameters: currentValue, index (optional), array (optional)

let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai"];

cities.forEach((city, index, arr) => {
    console.log(`${city} is at index ${index} in [${arr}]`);
});  

// higer order function : A function that takes another function as an argument or returns a function as a result. forEach is an example of a higher order function.
