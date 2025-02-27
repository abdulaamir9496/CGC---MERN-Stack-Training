// const arr = [5, 6, 7, 8, 9];

//sum with for loop not functional way.
// function findSum() {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log("The sum of all the array using non functional for loop is: ", findSum());

//sum with reduce function functional way
//acc : accumulator || curr: current value
// const reduceSum = arr.reduce(function(acc, curr) {
//     acc += curr;
//     return acc;
// }, 0);

// console.log("The sum of all the array using reduce function is: ", reduceSum);

//find max value using the for loop non functional way
// function findMaxValue(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log("The max of all the array using non functional for loop is: ", findMaxValue(arr));

//find max of all elements in array using reduce function
// const reduceMax = arr.reduce(function(max, curr){
//     if(curr > max) {
//         max = curr;
//     }
//     return max;
// }, 0);

// console.log("The max of all the array using reduce function is: ", reduceMax);

//LEVEL: Difficulty

//Array of objects which has 3 properties firstName, lastName and age.
//Like the data we get from the APIs. The more real world example

const users = [
    {firstName: "Muhammad", lastName: "Aamir", age: 28},
    {firstName: "Abdul", lastName: "Muqeet", age: 39},
    {firstName: "Muhammad", lastName: "Shaihaan", age: 23},
    {firstName: "Muhammad", lastName: "Sohail", age: 23},
    {firstName: "Muhammad", lastName: "Imran", age: 35},
    {firstName: "Abdul", lastName: "Nadeem", age: 35}
];

//TASK: find out the list of user's fullName
//Example: ["Muhammad Aamir", "Abdul Muqeet",..etc.,]

//What function we would be using here ? //We use map() function here.
// const output = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output);

//Using reduce function getting output for specific age people like below 30years.
// const output = users.reduce(function(acc, curr) {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

// console.log(output);


//TASK: using map() + filter() functions (is also known as chaining methods)
//Find age lessthan 30 + firstName || age lessthan 30 + lastName
//Ran map() function on left out array after filter() function is runing.
const ageLessThan = users.filter((x) => x.age < 30).map((x) => x.firstName);
const ageLessThan1 = users.filter((x) => x.age < 30).map((x) => x.lastName);

console.log(ageLessThan);
console.log(ageLessThan1);