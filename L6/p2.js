let divs = document.querySelectorAll(".box");
console.dir(divs);

// divs[0].innerText="New First Value";
// divs[1].innerText="New Second Value";
// divs[2].innerText="New Third Value";

// using loops

let i = 1;
for (div of divs){
    div.innerText = `This is new value for div ${i}`;
    i++;
}
