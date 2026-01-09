let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
    if (currentMode === "light"){
        currentMode = "dark";
        // document.querySelector("body").style.backgroundColor= "black";
        body.classList.add("dark")
        body.classList.remove("light");
    }else{
        currentMode = "light";
        // document.querySelector("body").style.backgroundColor= "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
})