const planetsKorean = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
const planetsEnglish = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const translatePlanet = planetKorean => {
    const planetMap = new Map();
    planetsKorean.forEach((planetKorean, index) => {
        planetMap.set(planetKorean, planetsEnglish[index]);
    });

    return planetMap.get(planetKorean);
};

console.log(translatePlanet("수성"));
console.log(translatePlanet("목성"));
