/*Qs4. Write a JavaScript function to count the number of vowels in a String
argument.*/


const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter string", (arr) => {
    let str = arr;    
        console.log(vovels(str.toLowerCase()));
        rl.close();
})

function vovels(str) {
    let v= ['a','e','i','o','u']
    let ans = 0;
    for (a of str) {
        if (v.includes(a)) {
            ans++;
        }
    }
    return ans;
    
}