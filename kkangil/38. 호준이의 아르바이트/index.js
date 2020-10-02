const calculateCandy = scoresString => {
    const scores = scoresString.split(" ").map(Number).sort();
    let count = 0;
    let removalArray = [];

    while (removalArray.length < 3) {
        let lastScore = scores.pop();
        if (!removalArray.includes(lastScore)) removalArray.push(lastScore);
        ++count;
    }

    return count;
};

console.log(calculateCandy("97 86 75 66 55 97 85 97 97 95"));
