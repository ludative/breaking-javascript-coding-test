const makeTree = (num) => {
    let tree = "";
    for(let i=1; i <= num; i++) {
        let row = '';
        for (let j=i; j <= num - 1; j++) {
            row += " "
        }

        for (let k=0; k < (i * 2) - 1; k++) {
            row += "*"
        }
        tree += row + '\n';
    }

    return tree;
};

console.log(makeTree(5));
console.log(makeTree(6));
console.log(makeTree(7));
