let obj = {
    name: 'Test',
    age: 20,
    child: {
        name: 'test',
        age: 10,
        child: {
            age: 5
        }

    }

}

// let sum = 0;
// while (true) {
//     if (obj) {
//         sum += obj.age
//     } else {
//         break
//     }
//     obj = obj.child
// }
// console.log(sum);

let sum = 0;
function recurse(input) {
    sum += input.age;

    if (input.child) {
        recurse(input.child)
    }
}


recurse(obj);
console.log(sum);