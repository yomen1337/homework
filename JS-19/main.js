// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice() {
  let basePrice = +prompt("Введите стоимость самого товара.");
  let percentDiscount = +prompt("Введите Ваш процент скидки товара.");
  let taxRate = +prompt("Введите Вашу процентную ставку на данный товар.");

  alert(
    (basePrice - percentDiscount) * taxRate + (basePrice - percentDiscount),
  );
}

 calculateFinalPrice();
// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess() {
  let userName = prompt("Введите ваш логин");
  let userPassword = prompt("Введите ваш пароль");

  if (userName === "admin" && userPassword === "123456") {
    alert("Доступ есть");
  } else {
    alert("Доступа нет");
  }
}

checkAccess();

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay() {
  const userTime = +prompt("Сколько сейчас часов?");
  let timeOfDay;

  switch (true) {
    case userTime >= 0 && userTime <= 5:
      timeOfDay = "Ночь";
      break;
    case userTime >= 6 && userTime <= 11:
      timeOfDay = "Утро";
      break;
    case userTime >= 12 && userTime <= 17:
      timeOfDay = "День";
      break;
    case userTime >= 18 && userTime <= 23:
      timeOfDay = "Вечер";
      break;
    default:
      alert("Некорректное время");
  }
  alert(timeOfDay);
}

getTimeOfDay();

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

// function findFirstEven() {
//   let start = +prompt("Первое число");
//   let end = +prompt("Второе число");
//   let number;

//   if (start % 2 === 0 || end % 2 === 0) {
//     alert("четные числа есть");
//   } else {
//     alert("Чётных чисел нет");
//   }
// }
// findFirstEven();

function findFirstEven() {
  let start = +prompt("Первое число");
  let end = +prompt("Второе число");

  // Автокоррекция: если start > end — меняем местами
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let count = 0; // Счётчик чётных чисел

  // Перебираем все числа от start до end inclusively
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      count++; // Если число чётное — увеличиваем счётчик
    }
  }

  // Теперь используем if/else для вывода результата — как вы просили
  if (count === 0) {
    alert("Чётных чисел нет");
  } else {
    alert(count);
  }
}

// Вызов функции
findFirstEven();
