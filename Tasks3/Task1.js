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