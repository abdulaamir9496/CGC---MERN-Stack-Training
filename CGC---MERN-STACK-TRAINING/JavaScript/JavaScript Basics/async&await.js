// **`async`** and **`await`** are modern JavaScript keywords used to work with asynchronous code in a more synchronous (readable) style. They simplify working with Promises and make the code easier to write and understand.

// ### Key Concepts:

// 1. **`async`**:
//    - The `async` keyword is used to define a function that will always return a **Promise**.
//    - Inside an `async` function, you can use `await` to pause execution until a Promise resolves.

//    **Syntax**:
//    javascript
//    async function myFunction() {
//      // Code here
//    }


// 2. **`await`**:
//    - The `await` keyword can only be used inside an `async` function.
//    - It pauses the execution of the `async` function until the Promise resolves, and then returns the result.

//    **Syntax**:
//    javascript
//    let result = await somePromise;

// ### Example:
//javascript
// Example of async/await with a promise
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Waits for the fetch to complete
    let data = await response.json(); // Waits for the response to be parsed as JSON
    console.log(data); // Logs the data after the promises are resolved
  } catch (error) {
    console.error('Error:', error); // Catches any errors in the async process
  } finally {
    console.log("Finally finished");
  }
}

fetchData();  // Call the async function

// ### Key Points:
// - **`async` functions return a Promise**, so you can still use `.then()` and `.catch()` if needed.
// - **`await` makes the code look synchronous**, but it doesn’t block the entire program (it only pauses the current async function).
// - **Error handling** is done using `try/catch` blocks inside `async` functions.

// ### Why Use `async/await`?
// - **Cleaner & Readable Code**: Reduces the need for chaining `.then()` and `.catch()`, making asynchronous code look more like synchronous code.
// - **Easier Error Handling**: `try/catch` makes it simpler to handle errors.