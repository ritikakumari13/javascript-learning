// array: collection of items

let marks1 = 90;
let marks2 = 80;
let marks3 = 85;   

let marks = {
    student1: 90,
    student2: 80,
    student3: 85
};

// related data -> array (linear data structure) ,

let marksArray = [90, 80, 85, 70, 95];

console.log(marksArray);

// length of array
console.log(marksArray.length);

let fruits = ["apple", "banana", "grapes", "mango"];
console.log(fruits);
console.log(fruits.length);

// array is object with index as key
console.log(typeof fruits);

// array incidexing
console.log(fruits[2]);

// modify array element
fruits[1] = "orange";
console.log(fruits);

// array are mutable unlike string
let str = "hello";
str[0] = "H";
console.log(str);

// looping through array : loops 
// iterables : arrays, strings, objects

// for loop
let arr = [10, 20, 30, 40, 50];
for(let i=0; i< arr.length; i++){
    console.log(`arr[${i}] = ${arr[i]}`);
}

// for..of loop : preferred for arrays
for(let el of arr){
    console.log(el);
}

let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai"];
for(let city of cities){
    console.log(city.toUpperCase());
}

