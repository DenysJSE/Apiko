let convert = function(num) {
  return (num * Math.pow(10, -6)).toFixed(2)
}

console.log(convert(10000))
console.log(convert(100000))
console.log(convert(1000000))
console.log(convert(10000000))