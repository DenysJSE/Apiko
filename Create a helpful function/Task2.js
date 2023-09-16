const car = {
  name : "Tesla",
  model : "X",
};
 
function showCarInfo() {
  return `Name: ${this.name}\nModel: ${this.model}`;
}

const returnResult = showCarInfo.bind(car);

console.log(returnResult());