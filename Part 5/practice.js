/*Qs1. Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6].*/

// const { stdin, stdout } = require('process');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: stdin,
    output: stdout
})

// let answer = 'y'


    // rl.question("do u want to roll dice press Y/y for yes and N/n for No", (ans) => {
    //     answer = ans.toLowerCase();
    //     if (answer == 'y') {
    //         console.log(Math.floor((Math.random()*5)+1));
    //     } else {
            
    //     }
    //     rl.close();
// })
    

/*Qs2. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name.*/

// let car = {
//     name: 'Baleno',
//     model: 'ESZ',
//     color: 'black'
// }
// console.log(car.name);

/*s3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States.*/

let person = {
    name: 'Abhijit',
    age: 25,
    city : 'Mumbai'
}

person.city = 'Sangamner'
person.country = "India"
console.log('person: ', person);


