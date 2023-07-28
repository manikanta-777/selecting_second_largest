import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };
var output = {};
// for (let i = 0; i < Object.keys(input1).length; i++) {
//   for (let j = 0; j < Object.keys(input2).length; j++) {
//     if (Object.keys(input1)[i] === Object.keys(input2)[j]) {
//       if (Object.values(input1)[i] === Object.values(input2)[j]) {
//         // console.log("ou", Object.keys(input1)[i], Object.values(input1)[i]);
//         // output.push(Object.keys(input1)[i]:Object.values(input1)[i])
//         output[Object.keys(input1)[i]] = Object.values(input1)[i];
//       }
//     }
//   }
//   // console.log("hello", Object.keys(input1)[i]);
// }
// console.log(output);
for (let i in input1) {
  console.log(i);
  if (input1[i] === input2[i]) {
    output[i] = input1[i];
    console.log(input1[i]);
  }
}
console.log(output);
