const readline = require('readline');
let number = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (num) => {
   number = parseInt(num);
  if (number % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}
  rl.close();
});

// let number = prompt("Enter your numbr :")

