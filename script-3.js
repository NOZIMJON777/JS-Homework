let arr = [1, 2, 2, 3, 3, 4, 4];

let unique = arr.filter((value, index) => {
    return arr.indexOf(value) === index
});
console.log(unique);

// 
// let arr = new Set([1, 2, 2, 3, 3, 4, 4]);
// console.log(arr);