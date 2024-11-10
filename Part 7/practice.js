// const average = (a) => {
//     let sum = 0
//     a.forEach(element => {
//         sum += element;
//     });
//     return sum / a.length;
// };

// console.log('average([1,2,3]): ', average([1,2,3]));


// const isEven = (a) => {
//     if (a % 2 == 0) {
//         return "Number is Even";
//     } else {
//         return "Number is Odd";
//     }
// }

// console.log('isEven(5): ', isEven(5));


const object = {
    message: "Hello World",
    logMessage() {
        console.log(this.message);
    }
}

setTimeout(object.logMessage, 1000)