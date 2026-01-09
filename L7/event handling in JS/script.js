let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button was Clicked!")
// }

let box = document.querySelector("div");

// box.onmouseover = () => {
//     console.log("Mouse is inside the box!")
// };

// even object

// btn1.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// };

// box.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// };

// event listeners: we can add multiple event listeners to a single element

btn1.addEventListener("click", (event) => {
    console.log("button 1 was clicked!")
    console.log(event.type); // can access event object here
});

btn1.addEventListener("click", () => {
    console.log("button 2 was clicked!")
});

// removing event listeners

const handlerRemove = () => {
    console.log("Handler was removed");
};

btn1.removeEventListener("click",handlerRemove);