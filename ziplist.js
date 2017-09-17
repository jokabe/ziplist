const first = ['a', 'b', 'c'];
const next = [1, 2, 3];

function zipList(one, two) {
  const newArray = [];
  for (let i = 0; i < one.length; i++) {
    newArray.push(one[i]);
    newArray.push(two[i]);
  }
  return newArray;
}

console.log(zipList(first, next));

function zipListTheSimpleWay(one, two) {
  return _.flatten(_.zip(one, two));
}

console.log(zipListTheSimpleWay(first, next));

