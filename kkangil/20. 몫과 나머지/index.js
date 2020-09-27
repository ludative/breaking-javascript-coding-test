const calculate = value => {
    const [target, divideBy] = value.split(' ').map(Number);
    return `${Math.floor(target / divideBy)} ${target % divideBy}`;
};

console.log(calculate("10 2"));
console.log(calculate("10 3"));
console.log(calculate("10 23"));
