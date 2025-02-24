// Part 1: Strings and String Methods  ✅
// Task 1: String Manipulation  ✅
// 1. Declare a string variable sentence with the value:  ✅
// "JavaScript is a powerful and popular programming language."  ✅
var codingLanguage = "JavaScript is a powerful and popular programming language.";
console.log(codingLanguage);

// Convert the string to uppercase. ✅
console.log(codingLanguage.toUpperCase());

// Convert the string to lowercase. ✅
console.log(codingLanguage.toLowerCase());

//Find the index of the word "popular". ✅
// Step 2: Convert the string into an array of words
let wordsArray = codingLanguage.split(" ");
console.log(wordsArray);
// Step 3: Find the index of the word "popular"
let index = wordsArray.indexOf("popular");
// let index = codingLanguage.findIndex(language => language === "popular");
// Output will be the index of "popular" in the array (e.g., 4)
console.log(index);

//Extract the word "powerful" using slice(). ✅
console.log(codingLanguage.slice(16, 24));

//Replace "JavaScript" with "JS" using replace(). ✅
console.log(codingLanguage.replace("JavaScript", "JS"));

//Check if the string contains the word "language" using includes(). ✅
console.log(codingLanguage.includes("language"));

// ---------------------------------------------------------------------

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

// --------------------------------------------------------------------

// Part 3: Object Constructor Function
// Task 3: Creating and Using a Constructor Function
// 1. Create a constructor function Person with the following properties: name (string) ✅
// age (number)  ✅
// gender (string)  ✅
// greet (method that logs "Hello, my name is [name].")  ✅

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}.`);
    };
    // BONUS TASK: Modify the Person constructor to include a method isAdult() that returns true if the age is 18 or above, otherwise false  ✅
    this.isAdult = function() {
        return this.age >= 18;
    };
}

// Person();
// Person.name;
// Person.age;
// Person.gender;

// 2. Create three instances of the Person object with different values.  ✅
const person1 = new Person("Alice", 17, "Female");
console.log(person1.isAdult());
const person2 = new Person("Anthony", 22, "Male");
console.log(person2.isAdult());
const person3 = new Person("John", 33, "Male");
console.log(person3.isAdult());

// 3. Call the greet method for each object.  ✅
person1.greet();
person2.greet();
person2.greet();

// BONUS TASK: Create an array of Person objects and filter out the adults.  ✅

const people = [person1, person2, person3];
console.log(people);
const adults = people.filter(person => person.isAdult());
console.log(adults);

// ----------------------------------------------------------------

// Part 4: Object Manipulation and Nested Object Access
// Task 4: Object Manipulation
// 1. Create an object car with the following properties:
// brand (string)
// model (string)
// year (number)
// features (array of strings, e.g., ['Air Conditioning', 'Sunroof', 'Bluetooth'])   ✅

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2019,
    features: ['Air Conditioning', 'Sunroof', 'Bluetooth']
}

console.log(car);

// 2. Perform the following operations:
// Add a new feature to the features array.  ✅
car.features.push("GPS");
console.log(car.features);

// Update the year property.  ✅
car.year = 2025;
console.log(car.year);

// Delete the model property.  ✅
delete car.model;
console.log(car.model);

// Log the updated object.   ✅
console.log(car);

// ----------------------------------------------------------------

// Task 5: Accessing Nested Objects in an Array
// 1. Create an array students containing multiple objects, each representing a student with the following properties:  ✅
// name (string)  ✅
// age (number)  ✅
// grades (object with subjects as keys and scores as values, e.g., {math: 90, science: 85})   ✅

let students = [
    {
        name: "Muhammad ShafiUddin",
        age: 50,
        grades: {
            math: 90,
            science: 85
            },
    },
    {
        name: "Muhammad Aamir",
        age: 29,
        grades: {
            math: 92,
            science: 86
            },
    },
    {
        name: "Muhammad Asif",
        age: 28,
        grades: {
            math: 80,
            science: 89
            },
    }
];

console.log(students);  //output Before performing the below operations on the array of objects.

// 2. Perform the following operations:
// Retrieve the science grade of the second student.  ✅
// let scienceGrade = students[1].grades.science;
// console.log(scienceGrade);
console.log(students[1].grades.science);

// Update the math grade of the first student.  ✅
// let upgradeMathGrade = students[0].grades.math = 95;
// console.log(upgradeMathGrade);
console.log(students[0].grades.math = 95);

// Add a new subject and grade to one of the students.  ✅
// let addNewSubject = students[0].grades.ethics = 96;
// console.log(addNewSubject);
console.log(students[0].grades.ethics = 96);

console.log(students); //output After performing the above operations on the array of objects.

