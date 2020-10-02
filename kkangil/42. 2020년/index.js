const getDate = (a, b) => {
    const dates = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return dates[new Date(`2020-${a}-${b}`).getDay()];
};

console.log(getDate("5", "24"));
