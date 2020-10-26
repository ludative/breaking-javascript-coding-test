const monthText = window.prompt("월을 입력하세요: ");
const dateText = window.prompt("일을 입력하세요: ");

const resultDate = (month, date) => {
  try {
    if (!Number(monthText) || !Number(dateText)) throw new Error("숫자아님");
    const dates = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return dates[new Date(2020, month - 1, date).getDay()];
  } catch (err) {
    console.error(err);
  }
};

console.log(resultDate(monthText, dateText));
