// In JavaScript, **Promises** are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise can be in one of three states:

// 1. **Pending**: The initial state; the operation is still in progress.
// 2. **Fulfilled**: The operation completed successfully, and the promise has a resulting value.
// 3. **Rejected**: The operation failed, and the promise has a reason (error) for the failure.

// Promises help manage asynchronous code by chaining `.then()` for success and `.catch()` for errors.


// let myPromise = new Promise((resolve, reject) => {
//     let success = true; // Simulate success or failure
    
//     if(success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }
//     });

// myPromise
// .then(result => console.log(result))  // Fulfilled state
// .catch(error => console.log(error));  // Rejected state

// If success is true, the promise is fulfilled, and "Operation was successful!" is logged.
// If success is false, the promise is rejected, and "Operation failed." is logged.    

// ----------------------------------------------------------------
//Chaining in Promises** refers to using the `.then()` method to link multiple asynchronous operations in a sequence. Each `.then()` returns a new Promise, which allows for chaining further `.then()` calls to handle subsequent results.
// Example of Chaining in Promises:

// javascript
let myPromise = new Promise((resolve, reject) => {
    resolve("First task done");
});

myPromise
    .then(result => {
    console.log(result); // "First task done"
    return "Second task done"; // Return value for next .then()
    })
    .then(result => {
    console.log(result); // "Second task done"
    return "Third task done";
    })
    .then(result => {
    console.log(result); // "Third task done"
    })
    .catch(error => {
    console.log(error); // Handles any error in the chain
    });


// ### How it works:
// 1. Each `.then()` takes the result of the previous operation.
// 2. You can chain multiple `.then()` calls for sequential asynchronous operations.
// 3. If any operation in the chain fails, the `.catch()` method is called to handle errors.

// Chaining makes it easier to handle multiple async tasks in sequence without deep nesting.

// ----------------------------------------------------------------

// **`Promise.all()`** is a method in JavaScript that allows you to handle multiple asynchronous operations concurrently. It takes an array (or iterable) of Promises as an argument and returns a single **Promise** that resolves when all the Promises in the array have resolved, or rejects as soon as one Promise is rejected.

//Syntax:
```javascript
Promise.all(iterable)
  .then(results => {
    // results is an array of resolved values from all Promises
  })
  .catch(error => {
    // Handles the first rejected Promise error
  });
```

// ### Key Points:
// - **All Promises Resolve**: The `then()` block is executed only when all Promises resolve.
// - **First Rejection**: If any of the Promises rejects, the `catch()` block is executed immediately, and the rejection reason is passed.

// ### Example:

// javascript
// Simulating async tasks with Promises
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Task 1 done'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Task 2 done'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1500, 'Task 3 done'));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // ["Task 1 done", "Task 2 done", "Task 3 done"]
  })
  .catch(error => {
    console.log(error); // This runs if any of the Promises rejects
  });


// ### Example with Rejection:

//javascript
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Task 1 done'));
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 1500, 'Task 2 failed'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Task 3 done'));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // This won't run because promise2 is rejected
  })
  .catch(error => {
    console.log(error); // "Task 2 failed" (the first rejected Promise)
  });


// ### Summary:
// - **`Promise.all()`** allows you to wait for multiple Promises to resolve simultaneously.
// - It returns a new **Promise** that resolves to an array of results from all the Promises if all of them succeed, or it rejects as soon as any of the Promises reject.

// ----------------------------------------------------------------

// **`Promise.any()`** is a method in JavaScript that takes an array (or iterable) of Promises and returns a **single Promise** that resolves as soon as **any one of the Promises resolves**. If all the Promises are rejected, the returned Promise will reject with an **AggregateError** containing all the rejection reasons.

// ### Syntax:
//javascript
Promise.any(iterable)
  .then(result => {
    // result is the first resolved value from the Promises
  })
  .catch(error => {
    // Handles the case when all Promises are rejected
  });


// ### Key Points:
// - **First Resolution**: The returned Promise resolves with the value of the **first successfully resolved** Promise.
// - **Rejection**: If all the Promises in the iterable reject, the returned Promise will reject with an `AggregateError` containing all the rejection reasons.

// ### Example:

//javascript
let promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Task 1 failed'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Task 2 done'));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 1500, 'Task 3 failed'));

Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result); // "Task 2 done" (first resolved promise)
  })
  .catch(error => {
    console.log(error); // This won't run because one promise resolves
  });


// ### Example with All Rejected Promises:

// javascript
let promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Task 1 failed'));
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Task 2 failed'));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 1500, 'Task 3 failed'));

Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result); // This won't run because all promises are rejected
  })
  .catch(error => {
    console.log(error); // AggregateError: All promises were rejected
  });

  Promise.any();

//Summary:
// -Promise.any() resolves with the value of the **first resolved** Promise in the array.
// - If **all Promises reject**, it rejects with an `AggregateError` containing all rejection reasons.
// - It is useful when you want to handle the first successful result from multiple asynchronous operations.
// ----------------------------------------------------------------

// **`Promise.finally()`** is a method in JavaScript that allows you to run code after a **Promise** is settled, regardless of whether it was resolved or rejected. It is useful for cleanup actions or final steps, such as hiding loading spinners, resetting states, or releasing resources.

//Syntax:
javascript
promise.finally(() => {
  // Code to run after the promise is settled (resolved or rejected)
});


// ### Key Points:
// - **Always Runs**: The callback passed to `finally()` will always be executed, regardless of whether the Promise resolves or rejects.
// - **Does Not Modify the Outcome**: The `finally()` method does not alter the resolved value or rejection reason of the Promise. It only performs side effects.
// - **Chaining**: You can chain `finally()` after `.then()` and `.catch()`.

// ### Example:

// javascript
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Task failed!");
    }
  }, 1000);
});

myPromise
  .then(result => {
    console.log(result); // "Task completed successfully!"
  })
  .catch(error => {
    console.log(error); // "Task failed!"
  })
  .finally(() => {
    console.log("Cleanup or final action (always runs)"); // Runs regardless of resolve or reject
  });


// ### When to Use:
// - When you need to run code after a Promise settles, such as **cleaning up resources** or **updating UI** (e.g., hiding loading indicators), without affecting the outcome of the Promise.