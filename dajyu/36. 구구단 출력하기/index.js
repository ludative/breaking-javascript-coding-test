const getGuGu = target => {
  const answers = []
  for (let i = 1; i <= 9; i++) {
    answers.push(target * i)
  }
  return answers.join(' ')
}

console.log(getGuGu(2))