const URL = 'https://swapi.py4e.com/api/planets'

async function getPlanets() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Failed with status code: ${response.status}`);
    }

    const data = await response.json();
    const planets = data.results.map(planet => ({
      name: planet.name,
      rotation_period: planet.rotation_period,
    }));

    console.log(planets);
  } catch (error) {
    console.error("Request Error:", error);
  }
}

getPlanets();
