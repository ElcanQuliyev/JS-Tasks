// Task-1
// function EvenOrOdd(a) {
//   if (a % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(EvenOrOdd(5)); //"Odd"
// console.log(EvenOrOdd(2)); //"Even"

// ----------------------------------
// ----------------------------------
// Task-2
function sum(a) {
  let y = 0;
  for (let x = 0; x < a.length; x++) {
    y += a[x];
  }
  return y;
}

console.log(sum([1, 6, 20, 3, 9])); //39
console.log(sum([4, 7, 2])); //13

// ----------------------------------
