const getMultiplication = num => {
    const multiplication = [];
    for (let i = 1; i <= 9; i++) {
        multiplication.push(num * i);
    }

    return multiplication.join(" ");
};

console.log(getMultiplication(2));
console.log(getMultiplication(3));
