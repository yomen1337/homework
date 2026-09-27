// --------------------------------------------------- урок 33 object

// const user = {
//   name: "Alex",
//   age: 30,
//   isProgrammer: true,
//   "user-city": "Moscow",
//   "123qwe": 123,
// }; // хранит в себе несколько значений
// // let user2 = new Object(); // грамосткий способ

// console.log(user["user-city"]); // third только в ковычках
// console.log(user["age"]); // first
// console.log(user.name); // second

// user.company = "suckers"; // добавляемый ключ к объекту
// delete user.name; // удаление ключа объекта

// console.log(user);

// --------------------------------------------------- урок 34 object

// let user = {
//   name: "Alex",
//   age: 30,
//   isProgrammer: true,
//   // greet: function () {
//   //   console.log(`hello, my name ${user.name}`);
//   // }, // запись функции
//   greet() {
//     console.log(`hello, my name ${user.name}`);
//   }, // сокращенная запись функции
// };

// user.greet();

// console.log(user);

// const product = {
//   name: "ноутбук",
//   price: 60000,
//   discount: 55,
//   characteristics: {
//     brand: "Apple",
//     proccesor: "M1",
//   },
//   checkDiscount: (product) => {
//     // if (product.discount == undefined) {
//     //   console.log("Cкидки нет");
//     // } else {
//     //   console.log(`Скидка есть ${product.discount}%`);
//     // } // первый вариант
//     if ("discount" in product) {
//       console.log(`Скидка есть ${product.discount}%`);
//     } else {
//       console.log("Cкидки нет");
//     } // второй вариант
//   },
// };

// // console.log(product.characteristics.brand); // обращенние во вложенность

// product.checkDiscount();

// --------------------------------------------------- урок 35 for in

// const product = {
//   name: "Ноутбук",
//   price: 60000,
//   discount: 10,
//   characteristics: {
//     brand: "Apple",
//     processor: "M1",
//   },
// };

// 1 из примеров

// const users = {
//   0: "Bob",
//   1: "John",
//   2: "Alex",
// };

// for (let i = 0; i < 3; i++) {
//   console.log(users[i]);
// }

// 2 пример использования for in

// for (const key in product) {
//   if (key === "characteristics") {
//     for (const charKey in product[key]) {
//       console.log(`${charKey}`, product[key][charKey]);
//     }
//   } else {
//     console.log(`${key}`, product[key]);
//   }
// }

// --------------------------------------------------- урок 36 spread

// const CHARACTERISTICS = "CHARACTERISTICS";
// const DISCOUNT = 10;

// const product = {
//   name: "Ноутбук",
//   price: 60000,
//   DISCOUNT,
//   [CHARACTERISTICS]: {
//     brand: "Apple",
//     processor: "M1",
//   },
// };

// // spread

// const discount = {
//   percent: 10,
//   day: 25,
// };

// const product2 = { ...product, discount };
// product2.name = "планшет";
// console.log(product);
// console.log(product2);

// деструктуризация

// const name = "alex";

// const { name: productName, price } = product;
// console.log(productName, price);

// for (const key in product) {
//   if (key === CHARACTERISTICS) {
//     for (const charKey in product[key]) {
//       console.log(`${charKey}`, product[key][charKey]);
//     }
//   } else {
//     console.log(`${key}`, product[key]);
//   }
// }
