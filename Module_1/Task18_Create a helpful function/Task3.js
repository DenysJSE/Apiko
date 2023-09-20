// Дано: код в якому необхідно знайти 
// помилку і виправити її
// Результат: вивести в консоль “meow”

const cat = {
  sound: 'meow',
  greet: function() {
    setTimeout(function() {
        console.log(this.sound)
    }.bind(this) , // write fix in this line of code
    0)
  }
};

cat.greet();