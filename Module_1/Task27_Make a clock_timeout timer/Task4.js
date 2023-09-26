class TimerResettable {
  constructor(name) {
    this.name = name;
    this.timer = setTimeout(() => {
      this.name = null;
    }, 5000);
  }

  resetTimer() {
    clearTimeout(this.timer);
  }
}

const myObject = new TimerResettable("Example Object");
console.log(myObject.name);

setTimeout(() => {
  console.log(myObject.name);
}, 5000);

myObject.resetTimer();
