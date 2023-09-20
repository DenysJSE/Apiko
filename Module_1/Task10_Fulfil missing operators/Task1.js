// Дано: Функція яка приймає значення яке може 
// бути будь-яким типом даних = "302", null, 128, 60

// Результат: Вивести у консоль числа які є степенем 
// двійки та не більші заданого значення або вивести 
// помилку про коректний тип якщо значення не є числом


function printPowsOf2(num) {
  if (typeof num === 'number') {
    const numArr = []
    for (let i = 1; i <= num; i *= 2) {
      numArr.push(i);
    }
    console.log(numArr);
  } else {
    console.log(`${num} - incorrect number`);
  }
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);