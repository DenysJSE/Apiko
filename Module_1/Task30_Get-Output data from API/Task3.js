const URL = "https://jsonplaceholder.typicode.com"

const newUser = {
  name: "Denys Markevych",
  username: "denysJSE",
  email: "denysJSE@gmail.com"
};

fetch(`${URL}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(newUser => {
    console.log("Новий користувач створений:");
    console.log(newUser);
  })
  .catch(error => {
    console.error("Сталася помилка:", error);
  });