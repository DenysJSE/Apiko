// Дано: Написати функцію вищого порядку compose 
// яка прийматиме довільну кількість функцій як 
// аргумент і створюватиме з них композицію Написати 
// карі функцію (modifyArray) яка прийматиме спочатку 
// як аргумент функцію (modifyCondition), а далі прийматиме 
// як аргумент масив стрічок (data), карі функція повинна 
// повертати модифікований масив згідно умови (modifyCondition) 
// яка прийшла на початку карі функції Написати композиції 
// allToLower та capitalizeAllFirst використовуючи власний compose 
// та modifyArray які прийматимуть масив стрічок та повертатимуть 
// наступний 
// результат: const testArray = 
// ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
// 1) allToLower - приймає testArray -> перетворює стрічки так що 
// усі символи приводяться до нижнього регістру 
// 'Result: custom - web - and - mobile - platforms length: 39'
// 2) capitalizeAllFirst - приймає testArray -> перетворює стрічки 
// так що лише перший символ у верхньому регістрі, інші у нижньому, 
// об'єднує їх в одну стрічку з символом'-' -> виводить в консоль 
// 'Result: Custom-Web-And-Mobile-Platforms length: 31'

const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

let compose = (...functions) => (data) => functions.reduceRight((value, func) => func(value), data);

let modifyArray = (modifyCondition) => (data) => data.map(modifyCondition);

let capitalizeAllFirst = compose(
  (arr) => arr.join(' - '),
  modifyArray((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
);

let allToLower = compose(
  (arr) => arr.join('-'),
  modifyArray((str) => str.toLowerCase())
)

console.log('Result:', capitalizeAllFirst(arr), 'length:', capitalizeAllFirst(arr).length);
console.log('Result:', allToLower(arr), 'length:', allToLower(arr).length);