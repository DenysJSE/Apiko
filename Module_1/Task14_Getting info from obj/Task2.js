// Дано: функція яка приймає масив чисел
// Результат: вивести у консоль "YES" якщо 
// усі числа у масив парні та "NO" в іншому 
// випадку

function isEvenArray(initialArray) {
  let isEven = true;
  for (let i = 0; i < initialArray.length; i++) {
    initialArray[i] % 2 !== 0 && (isEven = false)
  }
  console.log(isEven ? "Yes" : "No")
}

isEvenArray([1, 2, 3, 9])
isEvenArray([2, 4, 6])