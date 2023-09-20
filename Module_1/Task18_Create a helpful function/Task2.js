// В функції showCarInfo вивести в консоль name 
// та model об'єкту car використовуючи контекст 
// через this, викликати функцію showCarInfo 
// використовуючи bind.

const car = {
  name : "Tesla",
  model : "X",
};
 
function showCarInfo() {
  return `Name: ${this.name}\nModel: ${this.model}`;
}

const returnResult = showCarInfo.bind(car);

console.log(returnResult());