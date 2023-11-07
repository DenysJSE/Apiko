async function fetchPlanets() {
  try {
    const response = await fetch('https://swapi.py4e.com/api/planets/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    const planets = data.results.map(planet => ({
      name: planet.name,
      rotation_period: planet.rotation_period,
    }));

    console.log(planets);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchPlanets();