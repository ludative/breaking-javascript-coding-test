const getFriends = (limit, n, friends) => {
  const array = friends.split(' ')
  if (n > array.length) {
    return '입력이 잘못되었습니다.'
  }

  let count = 0
  array.reduce((acc, el) => {
    const sum = acc + Number(el)
    if (limit >= sum) {
      count += 1
      return sum
    }
    return acc
  }, 0)

  return count > n ? n : count
}

console.log(getFriends(50, 5, '20 20 20 20 20'))
