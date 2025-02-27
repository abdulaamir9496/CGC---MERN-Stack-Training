
// let DATA = "Secret Information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         DATA = "some new value";
//     }
// }


// let student1 = new User("Aamir", "aamir@gmail.com");
// let student2 = new User("Pathan", "pathan@gmail.com");

// let teacher1 = new User("Principle", "principle@gmail.");

// let admin1 = new Admin("admin1", "admin1@gmail.com");

//error handling:

let a = 5; 
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);

//write normal code in try block and error handling in catch block.
//code will not stop after handling the error, the remaining code will be executed.
try {
    console.log("a = ", a);
} catch (err) {
    console.log(err);
}
