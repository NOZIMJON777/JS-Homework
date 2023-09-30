let str = 'ABACDCA';

let arr = [];

for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
        console.log(str[i]);
    }

    arr.push(str[i])
}