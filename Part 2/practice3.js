const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})

rl.question("Enter the quarter number : ", (num) => {
    const quarter = parseInt(num);
    switch (quarter) {
        case 1: console.log("january, February, March"); break;
        case 2: console.log("April, May, June"); break;
        case 3: console.log("July, August, Sept"); break;
        case 4: console.log("Oct, Nov, Dec"); break;
        default: console.log("not found"); break;
    }
    rl.close();
})
