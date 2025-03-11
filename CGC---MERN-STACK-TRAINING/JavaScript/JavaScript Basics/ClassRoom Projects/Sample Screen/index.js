//Write a JavaScript program to add items to a blank array and display them.
//I have a input field and a add button and display button

// Initialize an empty array
let itemsArray = []
// Function to add items to the array
function addItem() {
    const input = document.getElementById('itemInput');
    const item = input.value.trim()
    if (item) {
        itemsArray.push(item);
        alert(`Item added: ${item}`);
        input.value = ''; // Clear input field
    } else {
        alert('Please enter an item.');
    }
}
// Function to display items in the list
function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear previous item
    itemsArray.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        itemList.appendChild(li);
    });
}