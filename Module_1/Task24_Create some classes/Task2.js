// Дано: Функція для генерації ID
// 1) Створити клас TodoItem із полями(властивостями): 
// id(генерується у конструкторі за допомогою функції), 
// name, checked(за замовчуванням false). Для поля checked 
// написати гетер та сетер (добавити валідацію: поле може 
// приймати лише булеве значення true або false)
// 2) Створити клас TodoList із полями: id(генерується у 
// конструкторі за допомогою функції), name, 
// items(за замовчуванням пустий масив).
// Добавити наступні методи:
// addItem - метод який добавляє елементи до масиву 
// (потрібно зробити валідацію на тип TodoItem)
// removeItemById - метод який видаляє елемент з масиву по id
// getItemById - метод який повертає елемент TodoItem з масиву по id
// 3) Створити екземпляр класу TodoList;
// 4) Створити 4 екземпляри класу TodoItem, добавити їх у 
// TodoList та вивести у консоль екземпляр класу TodoList.
// 5) Поміняти значення checked у одного екземпляру TodoItem 
// та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
// 6) Видалити 2 екземпляри TodoItem із TodoList та вивести у 
// консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

class TodoItem {
  constructor(name) {
    this.id = generateId()
    this.name = name
    this.checked = false
  }

  get cheked() {
    return this.checked
  }

  set setChecked(checked) {
    if(typeof checked === "boolean") {
      this.checked = checked
    } else {
      return "Checked shoud be boolean (true or false)"
    }
  }

  returnParams() {
    console.log(this.id);
    console.log(this.name);
    console.log(this.checked);
  }
}

class TodoList {
  constructor(name) {
    this.id = generateId()
    this.name = name
    this.items = []
  }

  addItem(item) {
    if (item instanceof TodoItem) {
      this.items.push(item);
    } else {
      return "The elemetn should be 'TodoItem' type"
    }
  }

  removeItemById(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  getItemById(id) {
    return this._items.find(item => item._id === id);
  }
}

const list = new TodoList("Homework List")

const task_1 = new TodoItem("Clean all rooms")
const task_2 = new TodoItem("Wash dishes")
const task_3 = new TodoItem("Ironing clothes")
const task_4 = new TodoItem("Buy some products")

list.addItem(task_1)
list.addItem(task_2)
list.addItem(task_3)
list.addItem(task_4)

console.log(list);

task_4.checked = true

console.log(list);

list.removeItemById(task_1.id)
list.removeItemById(task_3.id)

console.log(list);