// Дано: Функція яка приймає стрічку яка містить 
// мінімум 1 слово та пробіли. Перший та останній 
// символ не пробіли. Слова можуть бути розділені 
// не лише одним пробілом.

// Результат: Вивести у консоль кількість слів у стрічці.

function calculateWordsInString(str){
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n"); 
  console.log(str.split(' ').filter(function(string){return string != "";}).length);
}

calculateWordsInString("I am Denys")
calculateWordsInString("I   am    Denys   ")
calculateWordsInString("I  am Denys   pro")