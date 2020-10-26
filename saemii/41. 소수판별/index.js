/**
 * 소수: 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.
 */
const inputText = window.prompt("숫자를 입력하세요: ");
const isPrimeNum = (num) => {
  try {
    let result = "YES";
    let i = 2;
    if (!Number(num)) throw new Error("숫자아님");
    if (num === 1) result = "NO";
    if (result !== "NO") {
      while (i < num) {
        if (num % i === 0) {
          result = "NO";
          break;
        }
        i++;
      }
    }

    return result;
  } catch (error) {
    console.error(error);
  }
};

console.log(isPrimeNum(inputText));
