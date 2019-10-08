const superHeroMovieIds = [
  { movieName: "Iron Man", movieId: "tt0371746" },
  { movieName: "The Incredible Hulk", movieId: "tt0800080" },
  { movieName: "Iron Man 2", movieId: "tt1228705" }
];

const movieCard = document.querySelector("#movie-card");

const movie = superHeroMovieIds[1].movieId;
const apiKey = `31152d26`;
const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;

fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
    console.log(data.Actors);
    console.log(data.Title);
    movieCard.innerHTML += `<h1>${data.Title}</h1>`
    movieCard.innerHTML += `<img src="${data.Poster}" alt="">`;
  });
