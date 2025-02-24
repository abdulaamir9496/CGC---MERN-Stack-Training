// const employee = {
//     caclTax() {
//         console.log("Tax rate is 10%");
//     },
// }

// const karanArjun1 = {
//     salary: 50000,
// };

// const karanArjun2 = {
//     salary: 50000,
// };

// const karanArjun3 = {
//     salary: 50000,
// };

// const karanArjun4 = {
//     salary: 50000,
// };

//prototype is a reference to the object that is used in the lookup chain to resolve methods, properties, etc.
//__proto__ is a reference to the actual object that is used in the lookup chain to resolve methods, properties, etc.
//__proto__ is the actual object that is used in the lookup chain to resolve methods, properties, etc.

// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// employee();


//If object & prototype have same method, object's method will be used.
const employee = {
    caclTax() {
        console.log("Tax rate is 10%");
    },
}

const karanArjun1 = {
    salary: 50000,
    caclTax() {
        console.log("Tax rate is 20%");   //If object & prototype have same method, object's method will be used.
    }
};

karanArjun1.__proto__ = employee;

