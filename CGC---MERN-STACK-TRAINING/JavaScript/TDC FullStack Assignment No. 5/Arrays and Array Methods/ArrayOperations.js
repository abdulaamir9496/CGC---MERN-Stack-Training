// Part 2: Arrays and Array Methods
// Task 2: Array Operations
// 1. Create an array fruits containing the following values: ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'] ✅

var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
console.log(fruits);

// 2. Perform the following operations:

// Add "Pineapple" to the end of the array.  ✅ 
fruits.push("Pineapple");
console.log(fruits);

// Remove the first element from the array.  ✅
fruits.shift();
console.log(fruits);

// Insert "Strawberry" at the second position in the array. Find the index of "Mango". ✅
fruits.splice(1, 0, "Strawberry");
console.log(fruits);

// Remove "Orange" from the array.  ✅
fruits.splice(fruits.indexOf("Orange"), 1);
console.log(fruits);

// Sort the array in alphabetical order.  ✅
fruits.sort();
console.log(fruits);

// Reverse the order of the array.  ✅
fruits.reverse();
console.log(fruits);
