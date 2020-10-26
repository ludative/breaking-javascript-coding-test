const inputText = window.prompt("");
const multiplicationTable = Array.from({ length: 9 }, (_, i) => Number(inputText) * (i + 1));
console.log(multiplicationTable);
