const removeArray = arr => arr.filter(el => !(el === 400 || el === 500));

console.log(removeArray([100,200,300,400,500]));
