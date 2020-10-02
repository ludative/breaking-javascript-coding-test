const getCandies = scores => {
  const array = scores.split(' ')
  const filteredScore = array.filter((el, i) => array.indexOf(el) === i)
  const sortedScore = filteredScore.sort((a, b) => b - a)
  const topScore = sortedScore.slice(0, 3)

  const candies = topScore.reduce((acc, el) => {
    const regex = new RegExp(el, 'gi')
    return acc + scores.match(regex).length
  }, 0)

  return candies
}

console.log(getCandies('97 86 75 66 55 97 85 97 97 95'))