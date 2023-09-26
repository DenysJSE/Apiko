function isString(callback, value) {
  if (typeof callback === "function" && typeof value === "string") {
    callback(value);
  } else {
    throw new Error("String is not a string or callback is not a function")
  }
}

function callbackFunc(str) {
  console.log(`Input string: ${str}`)
}

isString(callbackFunc, 'It is a string')
isString(callbackFunc, 53)