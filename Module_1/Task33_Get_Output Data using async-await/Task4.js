async function fetchSWAPI(resource, throwError = false) {
  const rootUrl = 'https://swapi.py4e.com/api/';
  const apiUrl = resource.startsWith('http') ? resource : rootUrl + resource;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      if (throwError) {
        throw new Error(`Failed with status code: ${response.status}`);
      } else {
        console.error(`${resource} fetchSWAPI error`, `Error: Failed with status code: ${response.status}`);
        return null;
      }
    }

    return await response.json();
  } catch (error) {
    if (throwError) {
      throw error;
    } else {
      console.error(`${resource} fetchSWAPI error`, error);
      return null;
    }
  }
}

async function testFetchSWAPI() {
  try {
    const person = await fetchSWAPI("people/1/");
    console.log("person", person);

    const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/");
    console.log("film", film);

    const film1001Id = await fetchSWAPI("films/1001/");
    console.log("film1001Id", film1001Id);

    await fetchSWAPI("films/1101/", true);
  } catch (error) {
    console.log("testFetchSWAPI error", error);
  }
}

testFetchSWAPI();
