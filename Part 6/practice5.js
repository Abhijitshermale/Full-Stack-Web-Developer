/*Qs5. Write a JavaScript function to generate a random number within a range
(start, end).*/


const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter start ans end number", (arr) => {
    let [start, end] = arr.split(' ').map(Number);

        console.log(random(start, end));
        console.log(random(start, end));
        console.log(random(start, end));
        console.log(random(start, end));
        rl.close();
})

function random(start, end) {

    let diff = end - start

    return Math.floor(Math.random()*diff)+start+1;
    
}