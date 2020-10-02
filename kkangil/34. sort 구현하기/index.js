const checkSortHeight = heights => {
    const heightsArray = heights.split(" ");
    for (let i = 0; i < heightsArray.length - 1; i++) {
        if (heightsArray[i] > heightsArray[i + 1]) {
            return "NO"
        }
    }

    return "YES"
};

console.log(checkSortHeight("176 156 155 165 166 169"));
console.log(checkSortHeight("155 156 165 166 169 176"));
