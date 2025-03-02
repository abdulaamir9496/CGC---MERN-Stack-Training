// console.log(a);   //undefined.

// var a = 10;  


// var a = 10;
// // console.log(a);
// let handler = () => {
//   //   console.log("I am an ASYNC operation");
// };
// setTimeout(handler, 1000);

// // console.log("After Async operation");

// const add = (a, b, cb) => {
//   setTimeout(() => {
//     var c = a + b;
//     // console.log(c);
//     cb(c, "add");
//     // return c;
//   }, 3000);
// };

// const subtract = (a, b, cb) => {
//   setTimeout(() => {
//     var c = a - b;
//     // console.log(c);
//     cb(c, "subtract");
//     // return c;
//   }, 3000);
// };

// let resAdd,
//   resSub = 0;

// let callBackFn = (result, type) => {
//   //   console.log(result);
//   //   res = result;
//   //   console.log(res);
//   if (type === "add") {
//     resAdd = result;
//     console.log(resAdd, "RES ADD");
//   } else {
//     resSub = result;
//     console.log(resSub, "RES SUB");
//   }
// };

// // const res = add(10, 20);
// // add(10, 20, callBackFn);
// // subtract(10, 20, callBackFn);
// // console.log(res);

// add(10, 50, (result) => {
//   subtract(result, 20, callBackFn);
// });


// In JavaScript, **`async`** functions provide a simpler way to work with asynchronous code using Promises. An `async` function always returns a Promise, and within it, you can use **`await`** to pause execution until a Promise resolves or rejects.

//Key Concepts of `async`/`await`:
// - **`async`**: A function declared with `async` always returns a Promise.
// - **`await`**: Can only be used inside an `async` function to pause execution until the Promise is resolved or rejected.

//Code Example:

// javascript
// Async function to simulate an async operation
async function exampleFunction() {
    try {
    let result = await new Promise((resolve, reject) => {
      let success = true; // Simulate success or failure
        if(success) {
        resolve("Operation was successful!");
        } else {
        reject("Operation failed.");
        }
    });

    console.log(result); // If Promise is fulfilled
    } catch (error) {
    console.log(error); // If Promise is rejected
    }
}

exampleFunction();

// ### Breakdown:
// 1. **`async`**: Declares the function as asynchronous.
// 2. **`await`**: Pauses execution until the Promise resolves or rejects.
// 3. **`try`/`catch`**: Handles both success (`resolve`) and failure (`reject`) scenarios.

// - If `success` is `true`, the message "Operation was successful!" will be logged.
// - If `success` is `false`, the message "Operation failed." will be logged.

// ------------------------------------------------------------------------------------------------
// Two ways of writing Asynchronous Code:

//Step-by-Step Execution
// When working with **asynchronous code** in JavaScript (such as with **`async`/`await`** or **Promises**), JavaScript doesn't block the entire program while waiting for tasks like network requests or file I/O. Instead, it continues executing other code, and when the asynchronous task is complete, it resumes the execution from where it left off.

//Step-by-step execution** explains how JavaScript processes asynchronous code:

// 1. **Call Stack**: JavaScript starts executing code from the top and processes synchronously.
// 2. **Event Loop**: If there’s an asynchronous task (like a Promise), it’s added to the **microtask queue** or **task queue**.
// 3. **Promise Resolution**: The Promise is resolved, and once the synchronous tasks are completed, the event loop picks up the Promise from the queue to continue execution.

// ### Example of Step-by-Step Execution (using `async/await`):


async function example() {
  console.log("Start");

  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000); // Simulate an async task (like a network request)
  });

  console.log(result);  // This happens after 2 seconds
  console.log("End");
}

example();


//Execution Flow:
// 1. **Start** is logged immediately.
// 2. The `await` pauses the execution of the `example()` function for 2 seconds until the Promise resolves.
// 3. After 2 seconds, `"Promise resolved!"` is logged, followed by `"End"`.
// 4. The event loop allows other tasks to run in between the `await` delay, preventing blocking.

// ---

// ### Another Way of Writing Asynchronous Code: **Callbacks**

// Another older approach to handle asynchronous code is **callbacks**.

// - A **callback** is a function passed as an argument to another function, and it’s called when the asynchronous task completes.

// ### Example with Callbacks:

// javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}

fetchData((result) => {
  console.log(result);  // This will run after 2 seconds
});


// Execution Flow:
// 1. The `fetchData` function simulates an async task and executes the provided callback after 2 seconds.
// 2. The callback function logs `"Data fetched!"` after 2 seconds.

// ---------------------------------

//Summary:
// - **Step-by-Step Execution**: In asynchronous code, JavaScript continues to execute synchronous code while waiting for asynchronous operations. After the async task completes, it resumes.
// - **Callback-based Asynchronous**: This older approach uses functions passed as arguments, but it can lead to **callback hell** if many nested callbacks are involved.


//Parallel execution: runs the code of two conditions at a time.

