// var arr=["f","a","c","d","e","f","g","h","i",]
// // var arr="fee"
// console.log(arr.startsWith("f"))

const arr = ["a", "a", "a", "b","b","c","c","c","d"];

const callBackFunc = (acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
};

const countsAlph = arr.reduce(callBackFunc, {});
console.log(countsAlph);

