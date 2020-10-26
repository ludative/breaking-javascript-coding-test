const limitText = window.prompt("제한무게: ");
const totalCountText = window.prompt("총 인원: ");

const result = (limitText, totalCountText) => {
  try {
    // limit, count 안에서 반복해야한다 어떤 숫자들이 올지 모르니 while을 쓴다.
    if (!Number(limitText)) throw new Error("제한무게가 숫자가 아님");
    if (!Number(totalCountText)) throw new Error("총 인원이 숫자가 아님");

    let limitSum = 0;
    let i = 0;
    while (limitSum <= Number(limitText) && i < Number(totalCountText)) {
      const inputText = window.prompt("몸무게를 입력하세요: ");
      if (!Number(inputText)) throw new Error("몸무게가 숫자가 아님.");
      limitSum += Number(inputText);
      i++;
    }

    return limitSum > Number(limitText) ? i - 1 : i;
  } catch (err) {
    console.error(err);
  }
};

console.log(result(limitText, totalCountText));
