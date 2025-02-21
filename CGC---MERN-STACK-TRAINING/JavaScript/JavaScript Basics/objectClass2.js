// var mobile = new Object({
//     brand: "Apple",
// });
// console.log(mobile);

var mobile1 = {
    width : "10",
};

// inheritance of property: using enumerable and writable
// what is enumerable and writable ?
// enumerable: true or false
// writable: true or false

var mobile = Object.create(mobile1, {
    brand: {value: "Apple", enumerable: true, writable: true}
});

var mobile = Object.create(
    {}, 
    {
    brand: { value: "Apple", enumerable: true, writable: true}  //adding another obj is known as property descriptor
}
);
// console.log(mobile); //{}
// console.log(mobile.brand); //Apple

// manuplate property:
mobile.brand = "Samsung";
console.log(mobile); //Samsung

//another obj
Object.defineProperty(mobile, "brand", {
    value: "Samsung", enumerable: true, writable: true
}  //for changing properties of an object
);

Object.defineProperty(mobile, "model", {
    value: "S25", enumerable: true, writable: true
}  //for changing properties of an object
);

console.log(mobile); //Samsung
console.log(mobile.model); //S25

mobile.width = 9;
console.log(mobile.width); //9