const Person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
  }
 };
  
const testArgs = ['sushi', 'hiking']
 
let logPersonNameAndInterests = function() {
  return `${Person.getFullName()} loves: ${testArgs.join(', ')}`
}

console.log(logPersonNameAndInterests());