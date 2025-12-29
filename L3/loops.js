// loops

// for loop
// for(initialization; condition; increment/decrement)
// for(let i = 1;i <= 5;i++){
//     console.log("You can do it!!!!");
//     console.log(i);
// }

// console.log("loop has ended!");

// sum of first n natural numbers
// let n = parseInt(prompt("Enter a number: "));10
// let sum = 0;
// for(let i = 1; i<= n ; i++){
//     sum += i;
// }

// console.log("sum = ",sum);

// console.log(i); // error: i is not defined because of block scope of let (if used var then it will be accessible here but always prefer let/const over var)

// while loop
// while(condition){
    // code to be executed
    // update condition
// }

// let count = 1;
// while(count <= 5){
//     console.log("you can do this!!!");
//     count++;
// }

// do-while loop
// do{
    // code to be executed
    // update condition
// }while(condition);

// let i = 1;
// do{
//     console.log("you can do this!!!")
//     i++;
// }while(i<=5);

// for-of loop: used to iterate over iterable objects (like arrays, strings, etc.)
// let str = "JavaScript";

// for(let i of str){ // iterates over each character in the string
//     console.log("i = ",i);
// }

// for-in loop: used to iterate over the properties of an object
let student = {
    name: "Tina",
    age: 21,
    isStudying: true,
};

for(let key in student){
    console.log("key =", key, "value =", student[key]);
}