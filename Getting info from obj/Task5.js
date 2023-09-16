function removeObj(arrayOfObj, keyName, value) {

  const newArr = arrayOfObj.filter((obj) => {
    return obj[keyName] !== value
  })

  console.log(newArr);
}
 
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);