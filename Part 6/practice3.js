/*Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output :
"United States of America"*/


const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter array elements", (arr) => {
    let array = arr.split(',');
        console.log(largest(array));
        rl.close();
})

function largest(array) {

    let ans = '';
    for (a of array) {
        if (a.length > ans.length) {
            ans = a;
        }
    }
    return ans;
    
}