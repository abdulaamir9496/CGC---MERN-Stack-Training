//converting data into a string is known as serialization.

//having two connections using netwrok (mediatrror is HTTPS) whiihc should be in text form.

// In JavaScript, **serialization** refers to the process of converting data, such as objects or arrays, into a format that can be easily stored or transmitted (like a string). This is typically done to save data to a file, send it over a network, or store it in a database.

// The most common method for serialization in JavaScript is using **JSON** (JavaScript Object Notation). The `JSON.stringify()` method is used to serialize an object into a JSON string.

// Example: JSON: JavaScript Object Notation

//javascript
// let obj = { name: "Alice", age: 25 };
// let serialized = JSON.stringify(obj);
// console.log(serialized);  // Output: '{"name":"Alice","age":25}'

// Deserialization, on the other hand, is the process of converting a serialized string back into an object using `JSON.parse()`.

// Example:

// ```javascript
// let deserialized = JSON.parse(serialized);
// console.log(deserialized);  // Output: { name: "Alice", age: 25 }
// ```

// This process is essential for data transfer and storage in web applications.

// let objStr = JSON.stringify(obj);
// console.log(objStr.name);
// Output : undefined

// let newObj = JSON.parse(objStr);
// let newStr = objStr.replaceAll(":", ";");
// console.log(JSON.parse(newStr));
// Output : SyntaxError: Expected ':'

//JSON.parse converts only objects and arrays. 
//breaknig refernce of objects and arrays/ cloning objects

//Serialization
//breaknig refernce of objects and arrays/ cloning objects

let obj = { name: "Alice", age: 25 };
let objStr = JSON.stringify(obj);
let newObj = JSON.parse(objStr);
let newStr = objStr.replaceAll(":", ";");

console.log(obj === objStr);