// Attributes in DOM Manipulation
//getAttribute("attributeName") : used to get attribute value 

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para);

console.log(para.getAttribute("class"));

// setAttribute(attribute, value) : to set the attribute val

console.log(para.setAttribute("class","new-para"));

// style
// node.style

div.style.backgroundColor = "purple";
div.style.fontSize = "30px";
div.style.visibility = "hidden";