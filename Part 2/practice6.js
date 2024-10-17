const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter First Number : ", (n1) => {
    const num1 = n1;
    rl.question("Enter Second Number : ", (n2) => {
        const num2 = n2;
        if (num1[num1.length - 1] == num2[num2.length - 1]) {
            console.log("Same last digit");
        } else {
            console.log("Not same last digit");
        }
        rl.close();
    })
})