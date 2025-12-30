// filter : creates a new array of elements that gives true for the condition specified in the callback function.
// syntax: array.filter(callback(currentValue, index, array), thisArg)
// where,
// callback: function that is called for every element of the array. It takes three arguments:  
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter was called upon.
// thisArg (optional): Value to use as this when executing callback.

// all even numbers
let numbers = [10, 15, 20, 25, 30, 35, 40];

let evenNumbers = numbers.filter((val) => {
    return val % 2 === 0;
})
console.log(evenNumbers); // [10, 20, 30, 40]