const twoGram = str => {
    for (let i =0; i<str.length - 1; i++) {
        console.log(str[i], str[i+1]);
    }
};

twoGram("Javascript");
