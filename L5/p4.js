// Calculate the sum and factorial of first n natural numbers using reduce

let n = parseInt(prompt("Enter a number: "));

let arr = [];

for(let i=0; i<n ; i++){
    arr[i] = i+1;
}

console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log("Sum of first n natural numbers = ", sum);

let product = arr.reduce((prev, curr)=> {
    return prev*curr;
});

console.log("Factorial of first n natural numbers = ", product);