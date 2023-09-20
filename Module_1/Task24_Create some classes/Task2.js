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