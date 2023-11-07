// Дано: Функція приймає три параметри: масив 
// об'єктів [{}, {}], назву поля об'єкта (string),
// значення (string)
// Результат: Вивести у консоль новий масив з 
// якого видалені усі об'єкти в яких keyName
// буде дорівнювати value

function removeObj(arrayOfObj, keyName, value) {

  const newArr = arrayOfObj.filter((obj) => {
    return obj[keyName] !== value
  })

  console.log(newArr);
}
 
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);