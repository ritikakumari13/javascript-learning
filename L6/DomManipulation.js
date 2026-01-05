// DOM Manipulation

// selecting with ID : getElementById('Id')
// wrong ID will return null

let heading = document.getElementById("heading1");;
console.dir(heading);

// selecting with class
// return html collection
// wrong className return HTMLcollection[]

let headings = document.getElementsByClassName("heading");
console.log(headings);
console.dir(headings);

// selecting with tag

let paras = document.getElementsByTagName("p");
console.log(paras);
console.dir(paras)

// (better way) 
// query selector - can pass id/ class / tag it will detect automatically

let elements = document.querySelector("p"); // returns first element
console.dir(elements);

let elementsAll = document.querySelectorAll("p");
console.dir(elementsAll); // return the NodeList

let headingClass = document.querySelector(".btn");
console.dir(headingClass);
console.log(headingClass);

let headingClassAll = document.querySelectorAll(".btn");
console.dir(headingClassAll);
console.log(headingClassAll);

let idElement = document.querySelector("#heading2");
console.dir(idElement)