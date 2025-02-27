/**
 * Assignment No. 7
 * const arr = ["a", "a", "a", "b", "b", "c", "c", "c", "d];
 * 
 * Given an array, count the number of times each character repeats and 
 * return an object with the count of each character
 */

const arr = ["a", "a", "a", "b", "b", "c", "c", "c", "d"];

const repeatedChars = arr.reduce((acc, curr) => {
    if(!acc[curr]) {
        acc[curr] = 1;
    }
    else {
        acc[curr] += 1;
    }
    return acc;
}, {});

console.log(repeatedChars);