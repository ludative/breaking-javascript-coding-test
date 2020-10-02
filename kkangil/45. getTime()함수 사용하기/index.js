const getThisYear = () => {
    const yearMs = 1000 * 60 * 60 * 24 * 365;
    return Math.floor(new Date().getTime() / yearMs) + 1970;
};

console.log(getThisYear());
