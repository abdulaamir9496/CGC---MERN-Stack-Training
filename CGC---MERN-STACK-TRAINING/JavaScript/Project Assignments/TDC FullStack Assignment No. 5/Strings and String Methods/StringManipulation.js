// 1. Declare a string variable sentence with the value:
// "JavaScript is a powerful and popular programming language."  ✅
var codingLanguage = "JavaScript is a powerful and popular programming language.";
console.log(codingLanguage);

// Convert the string to uppercase. ✅
console.log(codingLanguage.toUpperCase());

// Convert the string to lowercase. ✅
console.log(codingLanguage.toLowerCase());

//Find the index of the word "popular". ✅
// Step 2: Convert the string into an array of words
let wordsArray = codingLanguage.split(" ");
console.log(wordsArray);
// Step 3: Find the index of the word "popular"
let index = wordsArray.indexOf("popular");
// let index = codingLanguage.findIndex(language => language === "popular");
// Output will be the index of "popular" in the array (e.g., 4)
console.log(index);

//Extract the word "powerful" using slice(). ✅
console.log(codingLanguage.slice(16, 24));

//Replace "JavaScript" with "JS" using replace(). ✅
console.log(codingLanguage.replace("JavaScript", "JS"));

//Check if the string contains the word "language" using includes(). ✅
console.log(codingLanguage.includes("language"));

