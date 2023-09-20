// Global Scope: створити змінну в глобальній області 
// видимості, створити функцію і в тілі функції вивести 
// цю змінну в консоль
// Function Scope: створити функцію, оголосити зміну 
// всередині функції, тоді спробувати вивести цю змінну 
// в консоль всередині функції, та за межами функції
// Block Scope: Створити функцію, в функції написати 
// блок {} всередині якого оголосити змінну та вивести 
// її в консоль, тоді вивести в консоль цю змінну за 
// межами блоку, та подивитись на результат

let globalVariable = "I am global variable!"

function logGlobalVar() {
  console.log(globalVariable);
}

function functionVar() {
  let functionVariable = "I am function variable!"
  console.log(functionVariable);
}

{
  let blockVariable = "I am block variable!"
  console.log(blockVariable);
  var blockVarVisible = "I am visible block variable!"
}

// console.log(functionVariable);
// console.log(blockVariable);
console.log(blockVarVisible);

logGlobalVar();
functionVar();