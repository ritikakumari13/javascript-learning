// map: creates a new array with the result of some operations. The value its callback returns are used to form a new array.
// syntax: array.map(callback(currentValue, index, array), thisArg)
// where,
// callback: function that is called for every element of the array. It takes three arguments:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array map was called upon.
// thisArg (optional): Value to use as this when executing callback.

// map to return all elements 
let numbers = [44, 52,13];
numbers.map((val) => {
    console.log(val);
});

let arr = numbers.map((val) => {
    return val;
});
console.log(arr);

// map is to transform each element and return a new array