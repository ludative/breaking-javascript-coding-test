const getStudentScores = () => {
    const students = prompt("학생 입력").split(" ");
    const scores = prompt("점수 입력").split(" ");

    return students.reduce((acc, student, index) => {
        if (scores[index]) {
            acc[student] = scores[index];
        }
        return acc;
    }, {})
};

console.log(getStudentScores());
