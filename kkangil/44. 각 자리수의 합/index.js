const getTotalFromString = string => {
    if (!string) return 0;
    return string.split("").reduce((total, value) => +total + +value);
};

console.log(getTotalFromString("3849"));
console.log(getTotalFromString("18234"));
