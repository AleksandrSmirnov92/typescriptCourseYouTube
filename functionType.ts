// Function Return Types and Void

function add(n1: number, n2: number): number {
  return n1 + n2;
}
// function printResult(num: number): void {
//   console.log("result " + num);
// }
// printResult(add(25, 65));

let combineADD: (a: number, b: number) => number;
combineADD = add;
// combineADD = 5;
console.log(combineADD(25, 65));

function addAndHeandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHeandler(1, 2, (result) => {
  console.log(result);
});
