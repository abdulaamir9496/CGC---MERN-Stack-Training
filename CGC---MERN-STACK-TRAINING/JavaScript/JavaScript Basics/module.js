// In JavaScript, a module is a reusable piece of code that can be imported and exported between different files. 
// It helps organize code by dividing it into smaller, manageable pieces. 
// You can use the export keyword to share functions, objects, or variables from a module, and the import keyword to bring them into another file. 
// This promotes better structure and modularity in JavaScript applications.

// // math.js (module)
// export const add = (a, b) => a + b;

// // app.js (importing)
// import { add } from './math.js';
// console.log(add(2, 3)); // Output: 5

// Exporting individual functions
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }

  
  // Importing specific functions from the module
import { add, subtract } from './math.js';

console.log(add(5, 3));       // Output: 8
console.log(subtract(5, 3));  // Output: 2


// Exporting an object
export const user = {
    name: 'Alice',
    age: 25
  };

const PI = 3.14;

// Default export of a function
export default function multiply(a, b) {
    return a * b;
  }

  
  export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export function add(a, b) {
    return a + b;
  }
  export function subtract(a, b) {
    return a - b;
  }

  // Re-exporting all exports from math.js
export * from './math.js';


// console.log(this);  //{} empty object
// console.log(this.module);  //undefined

module.exports = PI;