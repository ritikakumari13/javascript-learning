// function to count number of vowels in a string
function giveVowelsCounts(str){
    str = str.toLowerCase();
    let count = 0;
    for(let char of str){
        if(char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

// using arrow function
const giveVowelsCounts = (str) => {
    str = str.toLowerCase();
    let count = 0;
    for(let char of str){
        if(char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

console.log(`Number of vowels in 'Hello World' = `, giveVowelsCounts("Hello World"));

