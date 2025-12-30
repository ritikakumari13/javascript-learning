let arr = [85,97,44,37,60];

let sum = 0;
// for(let i=0; i< arr.length; i++){
//     sum += arr[i];
// }

for(let el of arr){
    sum += el;
}

let avg = sum / arr.length;
console.log(`Average of array = `, avg);