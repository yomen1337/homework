// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

let length = users.length;
let sum = 0;

getUserAverageAge = (users, avg) => {
  for (let i = 0; i < length; i++) {
    sum += users[i].age;
  }
  avg = sum / length;
  return avg;
};

console.log(`Средний возраст сотрудников = ${getUserAverageAge(users)}`);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

let quanity = users.length;

getAllAdmins = (users) => {
  const admins = [];

  for (let i = 0; i < quanity; i++) {
    if (
      Object.hasOwnProperty.call(users[i], "isAdmin") &&
      users[i].isAdmin === true
    ) {
      admins.push(users[i]);
    }
  }
  return admins;
};

const adminList = getAllAdmins(users);
console.log("Список админов -", adminList);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
