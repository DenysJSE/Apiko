function filterArray(initialArray) {
  const filteredArr = [];

  for (let i = 0; i < initialArray.length; i++) {
    typeof initialArray[i] === "string" && filteredArr.push(initialArray[i])
  }

  console.log(filteredArr);
}

filterArray([2, "string", 3, , , "test"])