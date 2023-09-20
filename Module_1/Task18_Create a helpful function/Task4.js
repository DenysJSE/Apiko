// Дано: об'єкт у якому необхідно переписати існуючу
// функція на стрілочну, щоб він почав виконуватись 
// коректно
// Результат: вивести у консоль “bark”

const dog = {
  sound: 'bark',
  greet: function() {
      setTimeout(() => { 
          console.log(this.sound)
      },0)
    }
 }
  
 dog.greet();