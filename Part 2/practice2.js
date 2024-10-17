const readline = require('readline');
let firstName = "";
let age = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your name: ', (name) => {
  rl.question('Enter your age: ', (age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
    rl.close();
  });
});

