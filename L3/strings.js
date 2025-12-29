// strings: a sequence of characters enclosed in single quotes(''), double quotes(""), or backticks(``)

// creating strings
let str = "Hello, World!";
let str2 = 'JavaScript is fun!';
let str3 = `Welcome to JavaScript`; // template literals

// inbuilt string properties and methods
// length property
console.log(str.length);
// string indices
console.log(str[5]); // 0-based indexing

// template literals : used for string interpolation and multi-line strings
// string interpolation: embedding expressions inside a string

// let obj ={
//     item: "laptop",
//     price: 50000,
// };

// console.log("the cost of ",obj.item," is ",obj.price, "rupees");
// console.log(`the cost of ${obj.item} is ${obj.price} rupees`); // using template literals , using ${} to embed expressions

// escaping characters
let newLineStr = "Hello,\n\tWorld!"; // \n is used to insert a new line
console.log(newLineStr);
console.log(newLineStr.length); // length includes escape characters

// string methods: functions that perform operations on strings and return a new value
let sampleStr = "  JavaScript String Methods  ";

// toUpperCase() and toLowerCase() : does not modify the original string(as strings are immutable in js) and returns a new string 
console.log(sampleStr.toUpperCase());
console.log(sampleStr.toLowerCase());

// trim(): removes whitespace from both ends of a string
console.log(sampleStr.trim());

// slice(): extracts a section of a string and returns it as a new string
console.log(sampleStr.slice(2, 12)); // from index 2 to index 11, end index is non exclusive

// concat(): joins two or more strings and returns a new string
let strA = "Hello";
let strB = "World";
console.log(strA.concat(strB));
console.log(strA.concat(" ", strB)); // adding space between two strings

// replace(): replaces a specified value with another value in a string
let greetStr = "Hello, World!";
let newGreetStr = greetStr.replace("Hello","Bye");
console.log(newGreetStr);

// replaceAll(): replaces all occurrences of a specified value with another value in a string
let text = "apple banana apple grape apple";
console.log(text.replaceAll("apple","orange"));

// charAt(): 
let str4 = "tina";
console.log(str4.charAt(3));
