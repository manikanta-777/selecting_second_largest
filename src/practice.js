const input = [1, 2, -2, 11, 7, 1];
function secondLargest(input) {
  input.sort((a, b) => b - a);
  console.log(input);

  const newObj = [...new Set(input)];
  console.log(newObj);

  console.log(newObj[1]);
}
secondLargest(input);
