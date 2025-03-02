// `fetch()`** is a built-in JavaScript function used to make HTTP requests (such as GET, POST, etc.) to a server and return a **Promise**. 
// It's commonly used for retrieving data from APIs or sending data to a server asynchronously.

// Syntax:

//javascript
// fetch(url, options)
//   .then(response => response.json())  // Parse the response as JSON
//   .then(data => console.log(data))     // Handle the data
//   .catch(error => console.log(error)); // Handle errors

// - **`url`**: The URL you want to send the request to.
// - **`options`** (optional): An object to customize the request (e.g., method, headers, body).

// Example:

// javascript
// Making a GET request to an API
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())  // Parse JSON response
//   .then(data => console.log(data))    // Log the data
//   .catch(error => console.error('Error:', error));  // Handle any errors


// Example with POST request:

// javascript
// Making a POST request with data
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
})
  .then(response => response.json())  // Parse JSON response
  .then(data => console.log(data))    // Log the returned data
  .catch(error => console.error('Error:', error));  // Handle any errors


// Key Points:
// - **Asynchronous**: `fetch()` returns a **Promise**, so it works asynchronously.
// - **Response Handling**: The `response` object is not automatically the content itself; you typically call `.json()`, `.text()`, or other methods on the response to extract data.

