const getBinaryNumber = num => {
    if (num === 0) return 0;
    const binaryArray = [];

    while(num > 0) {
        binaryArray.push(num % 2);
        num = Math.floor(num / 2);
    }

    return binaryArray.reverse().join("");
};

console.log(getBinaryNumber(19));
console.log(getBinaryNumber(8));
console.log(getBinaryNumber(28893));
