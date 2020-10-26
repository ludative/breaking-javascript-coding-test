const sort = target => {
  const targetArray = target.split(' ')
  const targetArrayLength = targetArray.length
  const isSort = targetArray.every((el, index) => {
    if (index + 1 > targetArrayLength - 1) {
      return true
    }
    return +el < +targetArray[index + 1]
  })
  return isSort ? 'YES' : 'NO'
}

console.log(sort('176 156 155 165 166 169'))
console.log(sort('155 156 165 166 169 176'))