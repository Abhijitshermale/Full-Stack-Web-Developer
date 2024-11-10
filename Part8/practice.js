/*Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.*/

let nums = [1, 2, 3, 4, 5]

const sqr = nums.map((n) => n * n);
console.log('sqr: ', sqr);

let sum = sqr.reduce((res, n) => res + n)
console.log('sum: ', sum);

console.log("Average is : " + sum / nums.length);

/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.*/

console.log(nums.map((n) => n + 5));

/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array*/

let arr = ["Abhijit", "Srushti", "Sagar", "Darshan"]
console.log(arr.map((s) => s.toUpperCase()));

/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/

let doubleAndReturnArgs = (arr, ...arg) => [
    ...arr, ...arg.map((n) => n * 2)
];

console.log('doubleAndReturnArgs([4,3,2,1],4,5): ', doubleAndReturnArgs([4, 3, 2, 1], 4, 5));

/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.*/

let mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })
console.log(mergeObjects({ name: 'Abhi', id: 325 }, {city:'Mumbai', salary:30000}));