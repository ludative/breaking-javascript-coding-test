const tenDigit = prompt("10진수를 입력해주세요.");
const result = (tenDigit) => {
  try {
    if (!Number(tenDigit)) throw new Error("숫자아님");
    let tempArray = [];
    while (Number(tenDigit)) {
      tempArray.push(tenDigit % 2);
      tenDigit = parseInt(tenDigit / 2, 10);
    }

    return tempArray.reverse().join("");
  } catch (err) {
    console.error(err);
  }
};

console.log(result(tenDigit));
