const getAverage = scores => {
    return Math.floor(scores.reduce((acc, score) => acc + score) / scores.length);
};

console.log(getAverage([20,30,40]));
