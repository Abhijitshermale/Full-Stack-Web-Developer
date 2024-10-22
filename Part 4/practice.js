/*Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

// rl.question("Enter the array list : ", (arr) => {
//     let array = arr.split(' ').map(Number)
//     rl.question("Enter the number, Which u want to delete : ", (n) => {
//         let num2 = parseInt(n);
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] == num2) {
//                 array.splice(i,1);
//             }
//         }
//         console.log(array);
//         rl.close()
//     })
// })

/*Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6*/

// rl.question("Enter the number : ", (n) => {
//     console.log("The Length of " + n + " is " + n.length);
//     rl.close();
// })

/*Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25*/

// rl.question("Enter the number : ", (n) => {
//     let num = n;
//     let ans = 0
//     for (i = 0; i < num.length; i++){
//         ans += parseInt(num[i]);
//     }
//     console.log("The sum of all digit : " + ans);
//     rl.close();
// })

/*Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1*/

// rl.question("Enter the number : ", (n) => {
//     let num = parseInt(n);
//     let ans = 1
//     // for (i = 0; i < num.length; i++){
//         for (j = 1; j <= num; j++){
//             ans *= j;
//         }
//     // }
//     console.log("The factorial of given number is : " + ans);
//     rl.close();
// })

/*Qs5. Find the largest number in an array with only positive numbers.*/

rl.question("Enter the array list : ", (arr) => {
    let array = arr.split(' ').map(Number)
    let ans = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= ans) {
                ans = array[i];
            }
        }
        console.log("The largest number in array is : "+ ans);
        rl.close()
})