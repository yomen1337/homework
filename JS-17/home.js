// // -------------------------------------------------------------------урок 12

// //дефолтное условие

// // const age = 10;

// // age++;

// // console.log(age);

// const weather = "дождь";
// // if statement

// if (weather === "дождь") {
//   console.log("Взять зонт");
// } else {
//   console.log("Зонт не нужен");
// }

// //вариант с питана
// // if (weather != "дождь") {
// //   console.log("Зонт не нужен");
// // }

// // -------------------------------------------------------------------урок 13

// const temp = 20;

// let x;
// // && = оператор "и" || = оператор "или"

// if (temp < 0) {
//   console.log("На улице холодно");
// } else if (temp > 28 && temp <= 30) {
//   console.log("На улице жарко");
// } else {
//   x = temp;
//   console.log("На улице прохладно");
// }

// if (x) {
//   console.log(x + 2);
// } else {
//   console.log(String(x));
// }

// const a = +prompt("сколько suck?", 0); // + перед prompt - это унарный плюс, который преобразует строку в число
// const b = +prompt("сколько suck?", 0);
// const max = a > b ? a : b; // вариант 2 - тернарный оператор состоит из 3 частей: условие, если да, если нет
// // !isNaN(a) || !isNaN(b) - если a и b не равны NaN, то присвоить max значение a или b в зависимости от условия

// // a > b = сам if
// // ? = если да, то присвоить a
// // : = если нет, то присвоить b

// // вариант 1
// // if (a > b) {
// //   max = a;
// // } else {
// //   max = b;
// // }

// console.log(max);

// -------------------------------------------------------------------урок 14

const weather = "дождь";

//вариант с if else if else

// if (weather === "дождь") {
//   console.log("Остаться дома");
// } else if (weather === "солнечно") {
//   console.log("Гулять ");
// } else if (weather === "Облачно") {
//   console.log("Гулять, но с зонтом");
// } else {
//   console.log("Неизвестная погода");
// }

// вариант с switch case

switch (weather) {
  case "дождь":
    console.log("Остаться дома");
    break; // break - прерывает выполнение кода, если условие выполнено
  case "солнечно":
    console.log("Гулять");
    break;
  case "Облачно":
    console.log("Гулять, но с зонтом");
    break;
  default: // default - если ни одно из условий не выполнено, то выполняется этот блок кода
    console.log("Неизвестная погода");
}

//приближенный к реальности пример использования switch case

// const ADMIN = "admin";
// const MODERATOR = "moderator";

// switch (role) {
//   case ADMIN:
//   case MODERATOR:
//     console.log("Доступ разрешен");
//     break;
//   default:
//     console.log("Доступ запрещен");
// }
