const removeDuplicatedPeople = people => {
    if (!people) return 0;
    const peopleSet = new Set();
    for (let [key, value] of Object.entries(people)) {
        peopleSet.add(`${key}-${value}`);
    }

    return peopleSet.size
};

console.log(removeDuplicatedPeople({
    "이호준": "01050442903",
    "이호상": "01051442904",
    "이준호": "01050342904",
    "이호준": "01050442903",
    "이준": "01050412904",
    "이호": "01050443904",
    "이호준": "01050442903",
}));
