const getRevertInput = str => {
  const target = str.replace(/ /g, '')

  const targetLength = target.length
  let answer = []
  for (let i = 1; i <= targetLength; i++) {
    answer.push(target[targetLength - i])
  }
  return answer.join(' ')
}

console.log(getRevertInput('1 2 3 4 5'))