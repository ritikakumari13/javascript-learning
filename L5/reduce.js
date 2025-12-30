// reduce: performs some operations and reduces the array to a single value. It returns a single value.
// syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// where,   
// callback: function that is called for every element of the array. It takes four arguments:
// accumulator: It accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array reduce was called upon.
// initialValue (optional): A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used and skipped as currentValue.    

let numbers = [5, 10, 15, 20];

// sum of all elements
let sum = numbers.reduce((acc, val) => {
    return acc + val;
});

console.log(sum); // 50

// largest element
let largest = numbers.reduce((prev, curr)=> {
    return (curr> prev)? curr : prev;
});
console.log(largest); // 20