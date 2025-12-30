// Filter out marks greater than or equal to 90 from the array

let marks = [85, 92, 78, 90, 88];

let filteredMarks = marks.filter((mark) => {
    return mark >= 90;
});

console.log(filteredMarks);