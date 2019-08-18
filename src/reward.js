const values = {};

const updateScores = node => {
  let counter = 0;
  const update = node => {
    node.score += 0.5 ** counter;
    counter++;
    if (values[node.parent]) {
      update(values[node.parent]);
    }
  }
  update(node);
}

const addNode = node => {
  if (values[node.name]) {
    return console.log("Already exists", node);
  } 
  values[node.name] = node;
  if (values[node.parent]) {
    updateScores(values[node.parent]);
  }
};

const main = () => {
  console.log(values)
  addNode({ name: 'a', score: 0});
  addNode({ name: 'b', score: 0, parent: 'a'});
  addNode({ name: 'c', score: 0, parent: 'b'});
  addNode({ name: 'c', score: 0, parent: 'b'});
  addNode({ name: 'd', score: 0, parent: 'c'});
  console.log(values);
};

main();
