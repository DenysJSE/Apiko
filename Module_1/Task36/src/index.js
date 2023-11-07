import User from './services/User';
import { emailReg, phoneReg, someName} from './constants/regex';

const testUserList = [
  {
    name: "Max",
    email: "Max@gmail.com",
    phoneNumber: "0999",
    businessSite: "google.com"
  },
  {
    name: "John",
    email: "John@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "http/google.com"
  },
  {
    name: "Alex",
    email: "Alex@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com"
  },
  {
    name: "Mike",
    email: "Mike.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com"
  },
  {
    name: "Ben",
    email: "Ben.com",
    phoneNumber: "qwejviep",
    businessSite: "https://google.com"
  }
];

const resultUserList = [];

for (const user of testUserList) {
  const { email, phoneNumber, businessSite } = user;

  if (emailReg.test(email) && phoneReg.test(phoneNumber) && someName.test(businessSite)) {
    const newUser = new User(user.name, { email, phoneNumber, businessSite });
    resultUserList.push(newUser);
  }
}

console.log(resultUserList);
