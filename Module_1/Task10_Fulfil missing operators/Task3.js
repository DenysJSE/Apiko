// Дано: Функція яка приймає назва місяця у форматі = 
// "DECEMBER" | "FEBRUARY" | "JULY" і тд.

// Результат: Вивести у консоль назву пори року якій 
// відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.

function printSeasonByMonth(month) {
  switch (month) {
    case "December":
    case "January":
    case "February":
      console.log("It is winter!");
      break;
    case "March":
    case "April":
    case "May":
      console.log("It is spring!");
      break;
    case "June":
    case "July":
    case "August":
      console.log("It is summer!");
      break;
    case "September":
    case "October":
    case "November":
      console.log("It is fall!");
      break;
    default:
      console.log("You enter incorrect data!");
  }
}

printSeasonByMonth("month")
printSeasonByMonth("January")
printSeasonByMonth("March")
printSeasonByMonth("August")
printSeasonByMonth("November")