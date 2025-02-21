//real life/world entities wth has properties in it. values , 
// vales can be any data types. No restriction.
//heterogenous and homogenous properties
//stores the data in the key and values

// ### **Objects in JavaScript**  
// An **object** in JavaScript is a collection of key-value pairs, 
// where **keys** are strings (called properties) and **values** 
// can be any data type (including functions, called methods).  
// #### **Example of an Object**

let person = {
  name: "Aamir",    // Property (key-value pair)
  age: 28,          // Number property
  isDeveloper: true, // Boolean property
  greet: function() { // Method (function inside an object)
    console.log("Hello, I am " + this.name);
    }
};

console.log(person.name);      // "Aamir"
console.log(person["age"]);    // 28
person.greet();                // "Hello, I am Aamir"


// #### **Key Points**  
// ✅ Objects store related data in a structured way.  
// ✅ Properties are accessed using dot (`.`) or bracket (`[]`) notation.  
// ✅ Functions inside objects are called **methods**.  
// ✅ `this` keyword refers to the current object.  

//FSD: class example
// var student = {
//     name: "Aamir",
//     mobileNumber: 9876543210,
//     isRegistered: true,
//     // courses : ["FSD", "Cybersecurity", "AI/ML"],
//     "courses name" : ["FSD", "Cybersecurity", "AI/ML"]
// };

//can be called as object literals, block of code, etc.,

// console.log(student);
// console.log(student.name);
// console.log(student.mobileNumber);
// console.log(student.isRegistered);
// console.log(student.courses);

// console.log(student["courses name"]);
//     console.log("course nam");

//FSD 
var contact1 = {
    name: {
        firstName: "Muhammad",
        middleName: "Abdul",
        lastName: "Aamir",
    },
    number: [
        {
        value: 987643210,
        isPrimary: false,
        type: "Personal",
        },
        {
            value: 987643210,
            isPrimary: true,
            type: "Work",
        },
    ],
    isActive: true,
    email: [
        {
            primaryEmail: "primaryEmail@gmail.com",
        },
        {
            secondaryEmail: "secondaryEmail@gmail.com",
        }
    ]
}
// console.log(contact1);
// console.log(contact1.name);
// console.log(contact1.number);
// console.log(contact1.number[0].value);
// console.log(contact1.number[1].isPrimary);
// console.log(contact1.email[0].primaryEmail);
// console.log(contact1.email[1].secondaryEmail);
// console.log(contact1.number[0].type);
// console.log(contact1.number[1].type);
// console.log(contact1.email[0].primaryEmail);
// console.log(contact1.email[1].secondaryEmail);
// console.log(contact1.name.firstName);
// console.log(contact1.name.middleName);
// console.log(contact1.name.lastName);
// console.log(contact1.number[0].value);
// console.log(contact1.number[0].isPrimary);
// console.log(contact1.number[0].type);

var selectedNumOjb = contact1.number[1];
console.log(selectedNumOjb.value); //987643210

function callPrimaryNumb() {

}

// var selectedNumOjb = contact1.number[0].value;
// console.log(selectedNumOjb.value); //undefined
// console.log(selectedNumOjb); //987643210
// console.log(selectedNumOjb.isPrimary); //false

// console.log(contact1);
// contact1.email = [];
// contact1.name.lastName

//function inside objects are called as methods.

// var student = {
//     name: "Aamir",
//     mobileNumber: 9876543210,
//     isRegistered: true,
//     // courses : ["FSD", "Cybersecurity", "AI/ML"],
//     "courses name" : ["FSD", "Cybersecurity", "AI/ML"],
//     call: function() {
//         console.log("calling Aamir");
//     },
// };

// console.log(student.call());


// let person = {
//     name: "Aamir",    // Property (key-value pair)
//     age: 28,          // Number property
//     isDeveloper: true, // Boolean property
//     greet: function() { // Method (function inside an object)
//         console.log("Hello, I am " + this.name);
//     }
//     };
    
//   console.log(person.name);      // "Aamir"
//   console.log(person["age"]);    // 28
//   person.greet();                // "Hello, I am Aamir"


//   ### **Object Methods & Prototypes in JavaScript**  
//   #### **1️⃣ Object Methods (Functions inside Objects)**
//   Methods are functions stored inside an object as properties.

    var user = {
    name: "Aamir",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

  user.greet(); // "Hello, Aamir"

//   🔹 **`this`** refers to the current object (`user` in this case).  
//   #### **2️⃣ Adding & Modifying Methods in Objects**
//   You can add new methods or modify existing ones.

    user.sayGoodbye = function() {
        console.log("Goodbye, " + this.name);
    };

    user.sayGoodbye(); // "Goodbye, Aamir"

//   #### **3️⃣ Object Prototypes (Inheritance in JS)**
//   In JavaScript, **prototypes** allow objects to inherit properties and 
// methods from other objects.
//   ##### **Example: Using Prototype**

    function Person(name, age) {
    this.name = name;
    this.age = age;
    }

  // Adding a method to the prototype
    Person.prototype.greet = function() {
    console.log("Hi, my name is " + this.name);
    };

    let person1 = new Person("Aamir", 28);
    let person2 = new Person("John", 30);

  person1.greet(); // "Hi, my name is Aamir"
  person2.greet(); // "Hi, my name is John"

//   🔹 **Prototype methods** are shared across all instances of the object, saving memory.  


//   ### **Key Takeaways:**
//   ✅ **Methods** are functions inside objects.  
//   ✅ **Prototypes** enable inheritance (objects can share methods).  
//   ✅ `this` refers to the calling object.  

//   Would you like to explore **ES6 classes**, which are a modern way of handling objects and prototypes? 🚀


