// --------------------------------------------урок 41 пересмотри

// const number = 10;
// console.log(number.toString());

// const number = 10;
// console.log(number.toString());

// --------------------------------------------урок 42

// "use strict";

// let x = "test"; // если без let - ошибка
// console.log(x);

// --------------------------------------------урок 43
// "use strict";

// const myFunc = function (name) {
//   console.log(name + " func 1 ");
// };

// const myFunc2 = () => {
//   console.log("log2");
// };

// function callFunc(func) {
//   const name = "alex";
//   func(name);
// } // callback - функция передача функции внутри функции

// callFunc(myFunc);
// callFunc(myFunc2);

// рабочий пример

// function checkAge(age, callBack) {
//   if (age >= 18) {
//     callBack("Доступ есть");
//   } else {
//     callBack("Доступа нет");
//   }
// }

// function showMassage(message) {
//   console.log(message);
// }

// function showError(message) {
//   console.error(message);
// }

// checkAge(20, showMassage);
// checkAge(15, showError);

// --------------------------------------------урок 44
// "use strict";

// const x = 5;

// function log() {
//   console.log(x.toString());
//   let y = 10;

//   function innerLog() {
//     console.log(y.toString());
//   }

//   innerLog();
// }

// log();

// --------------------------------------------урок 45
// "use strict";

// if (true) {
//   var hello = "hello"; //var может юзаться вне блока кроме функции, аптимизирует работу биг проектов
// }

// console.log(hello);

// --------------------------------------------урок 46

// "use strict";

// const x = 10;

// function func1() {
//   console.log(x);
// }

// function func2(funcArk) {
//   const x = 20;
//   funcArk();
// }

// func2(func1);

// пример 2 замыкание

// function func1() {
//   const x = 10;
//   return function () {
//     return x * 2;
//   };
// }

// const func2 = func1();
// console.log(func2());

// пример 3 реальный

// const useCounter = () => {
//   let count = 0;

//   const increment = () => {
//     return ++count;
//   };

//   const decrement = () => {
//     return --count;
//   };

//   return { increment, decrement };
// };

//вариация 1

// const counter = useCounter();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.increment());

//вариация 2

// const { increment, decrement } = useCounter();

// console.log(increment());
// console.log(increment());
// console.log(decrement());
// console.log(increment());

// --------------------------------------------урок 47

// "use strict";

//вариант 1

// function test() {
//   console.log(this);
// }

// test();

// вариант 2

// const user = {
//   name: "John",
//   greet: () => {
//     console.log(this);
//   },
// };

// user.greet();

// усложненный вариант 2

// const user = {
//   name: "John",
//   age: 122,
//   greet() {
//     console.log(`hello, my name ${this.name}`);
//   },
//   checkAge() {
//     if (this.age >= 18) {
//       this.greet();
//     }
//   },
// };

// user.checkAge();

// --------------------------------------------урок 49 массивы
// "use strict";
//пример 1
// const obj = {
//   0: "a",
//   2: "c",
//   1: "b", // - ключи
// };

// console.log(obj);

//пример 2

// const numbers = [10, 20, 30]; // - индексы
// numbers[0] = 1;

// // console.log(numbers[2] - numbers[0]);

// console.log(numbers[numbers.length - 1]);

//пример 3

// const numbers = [
//   "hello",
//   10,
//   true,
//   { name: "Alex" },
//   function () {
//     console.log("hello");
//   },
// ]; // - индексы
// // numbers[0] = 1;

// console.log(numbers);

// console.log(numbers[numbers.length - 1]);

// пример 4

// const numbers = new Array(10);
// numbers[0] = 1;

// console.log(numbers);

// пример 5

// const users = [
//   {
//     name: "Alex",
//     age: 20,
//   },
//   {
//     name: "pitor",
//     age: "25",
//   },
//   {
//     name: "BoB",
//     age: 15,
//   },
// ];

// console.log(users);

// function sumAllAges(users) {
//   let sum = 0;
//   for (let i = 0; i < users.length; i++) {
//     sum += users[i].age;
//   }
//   return sum;
// }

// console.log(sumAllAges(users));

// пример 6

// const numbers = [1, 2, 3, 4, 5, 6];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);
//   sum += numbers[i];
// }
// console.log(sum);

// --------------------------------------------урок 50

// "use strict";
//вариант 1
// const numbers = [1, 2, 3, 4, 5];

// numbers.push(1515);

// console.log(numbers);

//вариант 2

// const cart = [
//   {
//     productName: "Ноут",
//     price: 30000,
//   },
//   {
//     productName: "телефон",
//     price: 80000,
//   },
// ];

// console.log(cart);

// cart.push({
//   productName: "наушники",
//   price: 15000,
// });

//вариант 3

// const numbers = [1, 2, 3, 4, 5];

// numbers.push(1515);
// const lastNumber = numbers.pop();

// console.log(lastNumber);
// console.log(numbers);

//вариант 4

// const numbers = [1, 2, 3, 4, 5];

// const firstNumber = numbers.shift(); // unshift - добавляет первое число

// console.log(firstNumber);
// console.log(numbers);

//вариант 5

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.at(-1));

// console.log(numbers);

//вариант 6

// const numbers = [1, 2, 3, 4, 5];

// numbers.reverse(); // toReversed

// console.log(numbers);

//подвариант revers

// const numbers = [1, 2, 3, 4, 5];

// function reversAndLog(array) {
//   console.log([...array].reverse());
// }

// reversAndLog();

// console.log(numbers);

//вариант 7

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// numbers.forEach(function (number, index, array) {
//   sum += number;
// });

// console.log(sum.toString());

// // -------------------- 2 вариации

// function sumNumbers(number) {
//   sum += number;
// }

// function forEach(array, callbackFunc) {
//   for (let i = 0; i < array; i++) {
//     callbackFunc(array[i], i, array);
//   }
// }

// forEach(numbers, sumNumbers);

// console.log(sum);
