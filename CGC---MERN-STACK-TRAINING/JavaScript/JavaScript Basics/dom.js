console.log("DOM Model")

console.log(document.getElementById("text"));
console.log(document.getElementsByTagName("text"));

// element.innerHTML: Get or set the HTML content inside an element.
// element.textContent: Get or set the text content inside an element.
console.log(document.getElementsByTagName("p")[0].innerText);
console.log(document.getElementsByTagName("p")[0].innerText = "Manipulated by Aamir");

console.log(document.getElementsByClassName("text"));
console.log(document.getElementsByName("text"));

// document.getElementById('id'): Select an element by its ID.
// document.querySelector('selector'): Select the first matching element using a CSS selector.
// document.querySelectorAll('selector'): Select all matching elements.
console.log(document.querySelector("text"));
console.log(document.querySelectorAll("text"));

// element.style.property: Modify the CSS styles of an element.
element.style.color = 'red';

// Event Handling:

// You can add event listeners to DOM elements to make the webpage interactive.
// element.addEventListener('event', callback): Adds an event listener to an element.
// Example:

element.addEventListener('click', () => {
    alert('Element clicked!');
});

// Creating and Adding New Elements:

// document.createElement('tag'): Create a new element.
// element.appendChild(newElement): Add a new element as a child.
// Example:

let newDiv = document.createElement('div');
newDiv.textContent = 'Hello, world!';
document.body.appendChild(newDiv);

