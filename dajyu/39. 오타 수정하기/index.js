const fixTypo = typoStr => {
  return typoStr.replace(/q/gi, 'e')
}

console.log(fixTypo('querty'))
console.log(fixTypo('hqllo my namq is hyqwon'))