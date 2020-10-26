const inputText = window.prompt("입력").split(/\s/gi);

const createObject = (str) => str.reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr] ?? 0) + 1 }), {});

const candies = Object.keys(createObject(inputText))
  .sort((a, b) => b - a)
  .reduce((acc, curr, index) => (index < 3 ? (acc += Number(createObject(inputText)[curr])) : acc), 0);

console.log(candies);
