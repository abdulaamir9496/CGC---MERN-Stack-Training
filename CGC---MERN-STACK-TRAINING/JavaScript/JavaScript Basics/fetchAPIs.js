// In JavaScript, **`fetch`** is a method used to make network requests, such as fetching data from a server. It returns a **Promise** that resolves to the **Response** object representing the request's response.

// Example:

// javascript
// fetch('https://api.example.com/data')
//     .then(response => response.json())  // Parse JSON from response
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// It's commonly used for working with APIs and handling asynchronous data requests.

// fetch("https://api.github.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

fetch("https://github.com/users/abdulaamir9496")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error))


    fetch('https://api.example.com/data')
    .then(response => {
      // Check if the response is JSON
      if (response.ok && response.headers.get('content-type').includes('application/json')) {
        return response.json();
      } else {
        throw new Error('Not a JSON response');
      }
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  