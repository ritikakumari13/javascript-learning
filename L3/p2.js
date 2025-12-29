let gameNum = 25;

let num = parseInt(prompt("Enter a number: "));

while (num !== gameNum) {
    alert("Wrong number, guess again!")
    num = parseInt(prompt("Enter a number: "));
}

console.log("Congratulations, you have entered the right number!")