function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (let j=0; j< result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                const target = result[j];
                result[j] = result[j+1];
                result[j+1] = target;
            }
        }
    }
    return result;
}

const items = [3, 5, 1, 7, 11, 2, 0];

console.log(bubble(items));
