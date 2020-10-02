const findLeader = candidates => {
    const candidatesMap = new Map();

    candidates.split(" ").forEach(candidate => {
        if (candidatesMap.has(candidate)) {
            candidatesMap.set(candidate, candidatesMap.get(candidate) + 1)
        } else {
            candidatesMap.set(candidate, 1);
        }
    });

    const candidateArray = [];
    for (let [key, value] of candidatesMap.entries()) {
        candidateArray.push({name: key, value});
    }

    candidateArray.sort((a, b) => {
        return a.value > b.value ? -1 : 1;
    });

    return candidateArray[0].name;
};

console.log(findLeader("원범 원범 혜원 혜원 혜원 혜원 유진 유진"));
