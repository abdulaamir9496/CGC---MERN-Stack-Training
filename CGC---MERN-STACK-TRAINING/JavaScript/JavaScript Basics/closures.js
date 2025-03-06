//nested function
//calling outer function from the inner function even after the outer function is closed is called closure.

// function greet(name) {
//     function displayName() {
//         console.log(`Hi ${name}`);
//     }
//     // displayName();
//     return displayName;
// }

// greet("Aamir");

// const g1 = greet();
// console.log(g1);
// g1();


function greet() {
    let name = "Muhammad";
    function displayName() {
        console.log(`Hi ${name}`);
    }
    // displayName();
    return displayName;
}

const g1 = greet();
console.log(g1);
g1();

