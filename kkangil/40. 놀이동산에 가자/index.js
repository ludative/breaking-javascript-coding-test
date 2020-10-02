const getPossiblePersonCount = (limit, n, person) => {
    const personArray = person.split(" ").map(Number);
    let limitSum = 0;
    let i = 0;

    while (limitSum < limit && i < n) {
        limitSum += personArray[i];
        ++i;
    }

    return limitSum > limit ? i - 1 : i;
};

console.log(
    getPossiblePersonCount(50, 3, "15 15 20")
);
console.log(
    getPossiblePersonCount(50, 5, "20 20 20 20 20")
);
