async function getPersonFilms(name) {
  try {
    const personData = await fetchSWAPI(`people/?search=${name}`);

    if (personData.count === 0) {
      throw new Error(`Person with name '${name}' not found.`);
    }

    const person = personData.results[0];

    const filmURLs = person.films;
    const filmPromises = filmURLs.map(async (filmURL) => {
      const filmData = await fetchSWAPI(filmURL);
      return {
        person: person.name,
        title: filmData.title,
        episode_id: filmData.episode_id,
      };
    });

    const films = await Promise.all(filmPromises);

    return {
      name: person.name,
      films: films,
    };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function testGetPersonFilms() {
  try {
    const lukeFilms = await getPersonFilms("Luke");
    console.log("lukeFilms", lukeFilms);

    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("kenobiFilms", kenobiFilms);
  } catch (error) {
    console.error("testGetPersonFilms error", error);
  }
}

testGetPersonFilms();
