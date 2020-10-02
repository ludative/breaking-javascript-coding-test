const getMaxNumber = numbers => {
    if (!numbers) return undefined;
    return Math.max(...numbers.split(" ").map(Number));
};

console.log(getMaxNumber("10 9 8 7 6 5 4 3 2 1"));
