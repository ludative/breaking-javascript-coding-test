const inputText = window.prompt("입력: ");
const result = inputText.replaceAll(/q/gi, "e");
console.log("출력: ", result);
