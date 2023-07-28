const input = [1, 2, -2, 11, 7, 1];
input.sort((a, b) => b - a);
console.log(input);

const newObj = [...new Set(input)];
console.log(newObj);

console.log(newObj[1]);
