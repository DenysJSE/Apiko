const URL = "https://jsonplaceholder.typicode.com"

fetch(`${URL}/users`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(users => {
    console.log("Список користувачів:");
    users.forEach(user => {
      console.log(user);
    });
  })
  .catch(error => {
    console.error("Сталася помилка:", error);
  });

