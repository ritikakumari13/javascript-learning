let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button was Clicked!")
// }

let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("Mouse is inside the box!")
};

// even object

btn1.onclick = (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
};

box.onclick = (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
};