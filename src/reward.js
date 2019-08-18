const values = {
  a: {
    name: 'a',
    score: 10
  },
  b: {
    name: 'b',
    score: 5
  },
  c: {
    name: 'c',
    score: 3
  }
}

const getValues = treePath => {
  if (treePath.length < 2) 
    return;
  let counter = 0;
  for (let index = treePath.length - 2; index >= 0; index--) {
    const element = treePath[index];
    if (!values[element]) {
      values[element] = {
        name: element,
        score: 0
      };
    }
    values[element].score += 0.5 ** counter;
    counter++;
  }
}
console.log(values);
getValues(['a', 'b', 'c', 'd']);
console.log(values);