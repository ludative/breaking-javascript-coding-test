const inputText = window.prompt("입력").split(/\s/gi);
/**
 * 입력받은 인원만큼
 * name: count
 * 객체를 만들어서 저장
 */
const createObject = (str) => str.reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr] ?? 0) + 1 }), {});

const classLeader = Object.keys(createObject(inputText)).reduce((a, b) =>
  createObject(inputText)[a] > createObject(inputText)[b] ? a : b
);

console.log(`${classLeader}(이)가 총 ${result[classLeader]}표로 반장이 되었습니다.`);
