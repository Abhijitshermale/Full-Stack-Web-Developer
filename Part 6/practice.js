/*Qs1. Write a JavaScript function that returns array elements larger than a number.*/

const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter array elements", (arr) => {
    let array = arr.split(' ').map(Number);
    rl.question("Enter number : ", (n) => {
        let num = parseInt(n);
        console.log(largest(array, num));
        rl.close();
    })
})

function largest(array, num) {

    let ans = [];
    for (a of array) {
        if (a >= num) {
            ans.push(a);
        }
    }
    return ans;
    
}