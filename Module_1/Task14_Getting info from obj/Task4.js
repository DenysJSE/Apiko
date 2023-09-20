// Дано: Функція приймає Об’єкт типу 
// {[name]: {age: number, city: string}}
// Результат: Вивести у консоль масив із 
// іменами людей які із міста "London" 
// та старше 18 років

function findUser(initialObject) {
  const finedUsers = [];
  
  for (const key in initialObject) {
    if (initialObject[key].city === "London" && initialObject[key].age >= 18) {
      finedUsers.push(key);
    }
  }

  console.log(finedUsers);
}

findUser(
  {
    Max: {age: 23, city: "London"}, 
    Mike: {age: 20, city: "NY"}, 
    Joe: {age: 18, city: "London"}, 
    Alex: {age: 14, city: "NY"}, 
    John: {age: 9, city: "London"}
  })