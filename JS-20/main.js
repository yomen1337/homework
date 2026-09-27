// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Volodya",
  age: 18,
  typeLife: "not defined",
  whatIKnow: {
    programmingLanguage: {
      HTML: true,
      CSS: true,
      JS: false,
    },
    englishLanguage: "фифти-фифти",
  },
};

console.dir(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty({}));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта task2.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Какой-то заголовок",
  description: "первый объект",
  isCompleted: false,
};

const task2 = {
  type: "upd",
  description: "второй объект",
  isCompleted: true,
};

function cloneAndModify(task, task2) {
  const cloneTask = { ...task };
  return { ...cloneTask, ...task2 };
}

const modTask = cloneAndModify(task, task2);

console.log("новое свойства обджекта");
for (let key in modTask) {
  console.log(`${key}: ${modTask[key]}`);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
