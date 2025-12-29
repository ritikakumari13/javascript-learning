// conditional statements

// if stsatement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}

// if-else statement
let number = 7;
if (number % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// else-if ladder
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}   

// ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05;
console.log(discount);

// switch statement: not used very often in js
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday"); 
        break;
    case 4:
        console.log("Thursday"); 
        break;
    case 5:
        console.log("Friday"); 
        break;
    case 6:
        console.log("Saturday"); 
        break;
    case 7:
        console.log("Sunday"); 
        break;
    default:
        console.log("Invalid day");
}