// Write a program to print the square of each number in the array using forEach loop
let arr = [1,2,3,4,5];

// arr.forEach((val) => {
//     console.log(`${val}*${val} = ${val*val}`);
// });

// another way

let calSquare = (arr) => {
    console.log(arr**2);
};

arr.forEach(calSquare);
