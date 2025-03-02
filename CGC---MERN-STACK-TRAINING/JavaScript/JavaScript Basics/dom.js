console.log("DOM Model")

console.log(document.getElementById("text"));
console.log(document.getElementsByTagName("text"));
console.log(document.getElementsByTagName("p")[0].innerText);
console.log(document.getElementsByTagName("p")[0].innerText = "Manipulated by Aamir");
console.log(document.getElementsByClassName("text"));
console.log(document.getElementsByName("text"));
console.log(document.querySelector("text"));