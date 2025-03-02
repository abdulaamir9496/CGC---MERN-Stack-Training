const PI = require("./module");

console.log(PI);

// Importing specific functions from the module
import { add, subtract } from './math.js';

console.log(add(5, 3));       // Output: 8
console.log(subtract(5, 3));  // Output: 2

// Importing the default export
import multiply from './math.js';

console.log(multiply(2, 3));  // Output: 6
  
    // Renaming imported functions
import { add as sum, subtract as difference } from './math.js';

console.log(sum(5, 3));        // Output: 8
console.log(difference(5, 3)); // Output: 2



  // Importing the user object
import { user } from './user.js';

console.log(user.name);  // Output: Alice
console.log(user.age);   // Output: 25
