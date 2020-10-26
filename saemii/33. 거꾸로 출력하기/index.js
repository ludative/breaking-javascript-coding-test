const inputText = window.prompt("");
const reverseText = inputText.split(/\s/gi).reverse().join(" ");

console.log(reverseText);
