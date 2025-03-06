//Find Factorial of given number

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(`I have found the factorial of given number is: ${factorial(5)}`);