const convertStringCase = string => {
    return string.split("").map(str => {
        if (str.toUpperCase() === str) {
            return str.toLowerCase()
        } else {
            return str.toUpperCase()
        }
    }).join("")
};

console.log(convertStringCase("AAABBBcccddd"));
