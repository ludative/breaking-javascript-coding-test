const whoIsTheClassLeader = targetStr => {
  const targets = targetStr.split(' ')
  // 입력된 값만큼 배열을 돌리는 것이 아닌, 중복을 제거하고 필요한 만큼 돌리기 위함
  const candidates = targets.filter((el, i) => targets.indexOf(el) === i)
  const results = candidates.reduce((acc, el) => {
    const regex = new RegExp(el, 'gi')
    const count = targetStr.match(regex).length
    acc.push({
      name: el,
      count
    })
    return acc
  }, [])

  const leader = results.sort((a, b) => b.count - a.count)[0]
  return `${leader.name}(이)가 총 ${leader.count}표로 반장이 되었습니다.`
}

console.log(whoIsTheClassLeader('원범 원범 혜원 혜원 혜원 혜원 유진 유진'))