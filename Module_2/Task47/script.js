const apiKey = '162c0d3d4cd5f8123205bdb99c1b4d2b';

const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

class Api {
  async fetchPopularMovies() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Помилка отримання даних:', error);
      return [];
    }
  }
}

function renderPopularMovies(movies, likedMovies) {
  const loadingText = document.getElementById('loading-text');
  const movieList = document.getElementById('movie-list');

  loadingText.style.display = 'none';

  movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie-item');

    const posterUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    const posterImage = document.createElement('img');
    posterImage.src = posterUrl;
    posterImage.alt = movie.original_title;

    const title = document.createElement('p');
    title.textContent = movie.original_title;

    const heartButton = document.createElement('button');
    heartButton.classList.add('heart-icon');
    if (likedMovies.includes(movie.id)) {
      heartButton.classList.add('active');
    }
    heartButton.innerHTML = '<i class="fas fa-heart"></i>';
    heartButton.addEventListener('click', () => toggleLike(movie.id));

    movieDiv.appendChild(posterImage);
    movieDiv.appendChild(title);
    movieDiv.appendChild(heartButton);

    movieList.appendChild(movieDiv);
  });
}

function toggleLike(movieId) {
  const likedMovies = getLikedMovies();
  const index = likedMovies.indexOf(movieId);

  if (index === -1) {
    likedMovies.push(movieId);
  } else {
    likedMovies.splice(index, 1);
  }

  localStorage.setItem('likedMovies', JSON.stringify(likedMovies));

  loadPopularMovies();
}

function getLikedMovies() {
  const likedMoviesStr = localStorage.getItem('likedMovies');
  return likedMoviesStr ? JSON.parse(likedMoviesStr) : [];
}

async function loadPopularMovies() {
  const api = new Api();
  const popularMovies = await api.fetchPopularMovies();
  const likedMovies = getLikedMovies();
  renderPopularMovies(popularMovies, likedMovies);
}

loadPopularMovies();