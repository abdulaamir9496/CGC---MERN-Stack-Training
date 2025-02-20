//Array Methods
var arr = [1,2, 3,4 ,5,6,7,8,9,10,11];
//arr.length
//arr.join(',');
//arr.push(7);
//arr.pop();
//arr.unshift();
///arr.shift(0);

var func = function(val, index) {
    return val === 4;
};

console.log(arr.findIndex(func));

