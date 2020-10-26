function reverseCase(string) {
  return string
    .split("")
    .reduce((acc, curr) => {
      if (curr === curr.toLowerCase()) acc.push(curr.toUpperCase());
      if (curr === curr.toUpperCase()) acc.push(curr.toLowerCase());
      return acc;
    }, [])
    .join("");
}

console.log(reverseCase("AAABBBcccddd"));
