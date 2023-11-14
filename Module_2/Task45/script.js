document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "162c0d3d4cd5f8123205bdb99c1b4d2b";
  const searchInput = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("results");
  const loadMoreButton = document.getElementById("loadMore");
  let page = 1;
  let total_pages = 0;
  let searchValue = "";

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      page = 1;
      searchValue = searchInput.value
      fetchMoviesBySearchText(searchValue, page);
    }
  });

  loadMoreButton.addEventListener("click", function () {
    page++;
    fetchMoviesBySearchText(searchValue, page);
  });

  function fetchMoviesBySearchText(searchText, currentPage) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&page=${currentPage}`)

      .then(response => response.json())
      .then(data => {
        if (currentPage === 1) {
          resultsContainer.innerHTML = "";
        }

        if (data.results.length > 0) {
          renderMovies(data.results, resultsContainer);
          total_pages = data.total_pages;

          if (currentPage < total_pages) {
            loadMoreButton.style.display = "block";
          } else {
            loadMoreButton.style.display = "none";
          }
        } else if (currentPage === 1) {
          resultsContainer.innerHTML = `No results for ${searchText}`;
          loadMoreButton.style.display = "none";
        }

        searchInput.value = "";
      })
      .catch(error => console.error(error));
  }

  function renderMovies(movies, container) {
    container.innerHTML += `<ul>${movies.map(movie => `<li>${movie.title}</li>`).join('')}</ul>`;
  }
});
