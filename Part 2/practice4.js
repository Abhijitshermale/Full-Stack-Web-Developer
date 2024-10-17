const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the string : ", (st) => {
    const str = st;
    if ((str[0] == "a" || str[0] == "A") && str.length > 5) {
        console.log("Its golden String");
    } else {
        console.log("Its NOT golden String");
    }
    rl.close();
})