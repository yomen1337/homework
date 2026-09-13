// ---------------------------------------------------- укрок 27

// function sumAndLog(num1, num2) {
//   const sum = num1 + num2;
//   // console.log(sum);
//   return sum;
// }
// const result = sumAndLog(10, 30);
// // console.log(result);
// // // sumAndLog(10, 5);
// // // sumAndLog(10, 124);
// // // sumAndLog("15", "15");

// function isEven(num) {
//   // if (num % 2 === 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return num % 2 === 0;
// }

// console.log(isEven(result));

// ---------------------------------------------------- укрок 28

// function greet(name) {
//   return `Привет, ${name}`;
// }

// const greet = function (name) {
//   return `Привет, ${name}`;
// };

// console.log(greet("боб"));

// function getFactorial(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

// console.log(getFactorial(10));

const getFactorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(getFactorial(10));

// const isAdd = num => {
//   return num % 2 !=== 0;
// }

// console.log()

// IIFE - немедленно вызываемые функции
(function log(x) {
  console.log(x);
})("LOG!");
