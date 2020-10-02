const getIsPrimeNumber = num => {
    if (num === 1) return "NO";

    for (let i =2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return "NO";
    }

    return "YES";
};

console.log(getIsPrimeNumber(15));
console.log(getIsPrimeNumber(13));
console.log(getIsPrimeNumber(1));
