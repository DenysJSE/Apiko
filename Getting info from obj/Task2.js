function isEvenArray(initialArray) {
  let isEven = true;
  for (let i = 0; i < initialArray.length; i++) {
    initialArray[i] % 2 !== 0 && (isEven = false)
  }
  console.log(isEven ? "Yes" : "No")
}

isEvenArray([1, 2, 3, 9])
isEvenArray([2, 4, 6])