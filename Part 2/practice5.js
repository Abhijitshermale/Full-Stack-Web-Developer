const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter First Number : ", (n1) => {
    const num1 = parseInt(n1);
    rl.question("Enter Second Number : ", (n2) => {
        const num2 = parseInt(n2);
        rl.question("Enter third number : ", (n3) => {
            const num3 = parseInt(n3);
            if (num1 > num2 && num1 > num3) {
                console.log(num1+" is greater");
            }else if (num2 > num1 && num2 > num3) {
                console.log(num2+" is greater");
            } else {
                console.log(num3+" is greater");
            }
            rl.close();
        })
    })
})