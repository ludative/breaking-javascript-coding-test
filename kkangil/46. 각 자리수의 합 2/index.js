const getTotal = () => {
    let total = 0;
    for (let i=1; i<=20; i++) {
        if (i < 10) {
            total += i;
        } else {
            const [n, m] = String(i).split("");
            total += +n + +m
        }
    }

    return total;
};

console.log(getTotal());
