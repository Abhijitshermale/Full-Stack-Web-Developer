/*Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”*/

const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter string", (arr) => {
    let str = arr;    
        console.log(unique(str));
        rl.close();
})

function unique(array) {

    let ans = '';
    for (a of array) {
        if (!ans.includes(a)) {
            ans += a
        }
    }
    return ans;
    
}