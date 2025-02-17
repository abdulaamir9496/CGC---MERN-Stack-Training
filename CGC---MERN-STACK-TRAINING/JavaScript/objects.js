//real world entities
//stores the data in the key and values

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

//function inside objects are called as methods.

var student = {
    name: "Aamir",
    mobileNumber: 9876543210,
    isRegistered: true,
    // courses : ["FSD", "Cybersecurity", "AI/ML"],
    "courses name" : ["FSD", "Cybersecurity", "AI/ML"],
    call: function() {
        console.log("calling Aamir");
    },
};

console.log(student.call());


