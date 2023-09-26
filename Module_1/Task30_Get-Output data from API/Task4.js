const URL = "https://jsonplaceholder.typicode.com"

function getAlbum(id) {
  return fetch(`${URL}/albums/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    });
}

function getSpecifiedAlbums(ids = []) {
  const albumPromises = ids.map(id => getAlbum(id));

  return Promise.all(albumPromises)
    .then(albums => {
      return albums;
    })
    .catch(error => {
      console.error("Сталася помилка:", error);
    });
}

getSpecifiedAlbums([1, 3, 5])
  .then(albums => {
    console.log("Вказані альбоми:");
    console.log(albums);
  });