//it only loops without returning anything
//in return we get "undefined"

var val = [1, 2, 3, 4, 5];

// var func = function() {
//     return val === 4;
// }

// console.log(val.forEach(func));


var func = function(val, index) {
    console.log(val % 2 === 0);
};
val.forEach(func);