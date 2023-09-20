// Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];

// Результат: Вивести у консоль суму чисел у масиві.

function calculateSumOfArray(arr) {
  const filteredArr = [];
  let sum = 0;
  
  const isNum = (num) => {
    if (!isNaN(num)) {
      return /\d/.test(num)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (isNum(arr[i]) || typeof arr[i] === "number") {
      filteredArr.push(arr[i]);
    }
  }

  console.log(filteredArr);

  for (let i = 0; i < filteredArr.length; i++)  {
    typeof filteredArr[i] === "string" ? sum += parseInt(filteredArr[i]) : sum += filteredArr[i];
  }

  console.log(sum);
}

const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];

calculateSumOfArray(initialArray)