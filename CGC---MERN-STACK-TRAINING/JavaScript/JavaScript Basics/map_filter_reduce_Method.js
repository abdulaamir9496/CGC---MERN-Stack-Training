// The `reduce()` method in JavaScript is used to apply a function to an accumulator and each item in an array (from left to right) to reduce it to a single value, such as a sum, product, or other aggregation.

// ### Syntax:
// ```js
// array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// ```

// - `callback`: A function that is executed on each element in the array.
// - `accumulator`: The accumulated result from the previous iteration.
// - `currentValue`: The current element being processed in the array.
// - `initialValue`: (Optional) The initial value to start with.

// ---

// ### Examples:

// ### 1. **Sum of All Numbers**

// #### Example: Summing an Array of Numbers
// ```js
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);  // Output: 15
// ```

// In this example:
// - `accumulator` starts at 0 (the initial value).
// - For each element, the current value is added to the accumulator.

// ---

// ### 2. **Finding the Maximum Value**

// #### Example: Finding the Maximum Number in an Array
// ```js
// const numbers = [3, 5, 7, 2, 8];

// const max = numbers.reduce((accumulator, currentValue) => {
//     return currentValue > accumulator ? currentValue : accumulator;
// }, numbers[0]);

// console.log(max);  // Output: 8
// ```

// In this example:
// - `accumulator` starts at the first element (`numbers[0]`).
// - Each element is compared, and the larger value is returned as the accumulator.

// ---

// ### 3. **Flattening an Array of Arrays**

// #### Example: Flattening an Array
// ```js
// const arrays = [[1, 2], [3, 4], [5, 6]];

// const flattened = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

// console.log(flattened);  // Output: [1, 2, 3, 4, 5, 6]
// ```

// In this example:
// - `accumulator` is an empty array `[]`.
// - `currentValue` is each array, and `concat()` is used to merge it into the accumulator.

// ---

// ### 4. **Counting Occurrences of Items**

// #### Example: Counting Frequencies of Elements in an Array
// ```js
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const count = fruits.reduce((accumulator, currentValue) => {
//     accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
//     return accumulator;
// }, {});

// console.log(count);  // Output: { apple: 3, banana: 2, orange: 1 }
// ```

// In this example:
// - `accumulator` starts as an empty object `{}`.
// - For each fruit, it counts how many times it appears.

// ---

// ### 5. **Chaining Multiple Operations**

// You can chain `reduce()` with other operations to perform more complex aggregations.

// #### Example: Sum of Even Numbers
// ```js
// const numbers = [1, 2, 3, 4, 5, 6];

// const sumEven = numbers.reduce((accumulator, currentValue) => {
//     return currentValue % 2 === 0 ? accumulator + currentValue : accumulator;
// }, 0);

// console.log(sumEven);  // Output: 12
// ```

// In this example:
// - Only even numbers are summed up, and odd numbers are ignored.

// ---

// ### Key Points:
// - `reduce()` is powerful for accumulating values and transforming arrays.
// - It can be used for tasks like summing values, flattening arrays, and more.
// - You can provide an `initialValue` for the accumulator (which is optional).

// Let me know if you'd like more detailed examples or explanations!

//reducer has (callback function and initialValue)
//callback function: 
//initialValue: what will be initialie value on the basis of what we want to result in.

// const res = arr.reduce((callback function takes two values accumulator, initialValue) => {
// return;
// }, {});

const arr = ["a", "a", "a", "b", "b", "b", "c","c", "d", "d", "e"]; 
const res = arr.reduce((acc, val) => {
    if(!acc[val]){   //true it will come inside the accumulator
        acc[val] = 1;
    } else {   //if already exist in if statement, then it will come in else condition and increment the value.
        acc[val] += 1;
    }
    return acc;   //returns the accumulator.
}, {});

