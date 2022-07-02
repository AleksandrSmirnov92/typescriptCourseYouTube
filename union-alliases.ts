/**UNION TYPES */
type Combinable = number | string;
type ConvertionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConvertionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}
const combineages = combine(25, 65, "as-number");
const combineNames = combine("vasya", "anna", "as-text");
const combineStringAges = combine("25", "65", "as-number");
console.log(combineages);
console.log(combineNames);
console.log(combineStringAges);
// literas types....
