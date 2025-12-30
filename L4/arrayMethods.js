// array methods

let fruits = ["apple", "banana", "grapes", "mango"];
console.log(fruits);

// push : add element at the end
console.log(fruits.push('guava'));
console.log(fruits);

// pop : remove element from the end
console.log(fruits.pop());
console.log(fruits);

// toString : convert array to string
console.log(fruits.toString());

// concat : merge two arrays
let vegies = ["carrot", "tomato", "potato"];
let foodItems = fruits.concat(vegies);
console.log(foodItems);

// unshift : add element at the beginning
foodItems.unshift('bread');
console.log(foodItems);

// shift : remove element from the beginning
foodItems.shift();
console.log(foodItems);

// slice : extract a portion of array
let citrus = ["lemon", "orange", "lime", "grapefruit", "tangerine"];
let citrusSlice = citrus.slice(1,4);// from index 1 to index 4 (4 not included)
console.log(citrusSlice);

// splice : add/remove elements from array
let months = ["Jan", "March", "April", "June"];
// add 'Feb' at index 1
months.splice(1,0,'Feb'); // (index, number of elements to remove, elements to add)
console.log(months);

// remove 'April' from array
months.splice(3,1);

// replace 'June' with 'May'
months.splice(3,1,'May');
console.log(months);

// methods can be change the original array like push, pop, unshift, shift, splice
// methods which do not change the original array : toString, concat, slice