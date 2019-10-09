const superHeroMovieIds = [
  { movieName: "Iron Man", movieId: "tt0371746" },
  { movieName: "The Incredible Hulk", movieId: "tt0800080" },
  { movieName: "Iron Man 2", movieId: "tt1228705" },
  { movieName: "Thor", movieId: "tt0800369"},
  { movieName: "Captain America: The First Avenger", movieId: "tt0458339"},
  { movieName: "The Avengers", movieId: "tt0848228"},
  { movieName: "Iron Man 3", movieId: "tt1300854"},
  { movieName: "Thor: The Dark World", movieId: "tt1981115"},
  { movieName: "Captain America: The Winter Soldier", movieId: "tt1843866"},
  { movieName: "Guardians of the Galaxy", movieId: "tt2015381"},
  { movieName: "Avengers: Age of Ultron", movieId: "tt2395427"},
  { movieName: "Ant-Man", movieId: "tt0478970"}
];

const movieCard = document.querySelector("#movie-card");

let movie;
const apiKey = `31152d26`;
let url;

superHeroMovieIds.forEach(element => {
  console.log(element.movieId);
  movie = element.movieId;
  url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
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
    movieCard.innerHTML += `<h5>Actors: ${data.Actors}</h5>`;
    movieCard.innerHTML += `<h4>Director: ${data.Director} ${data.Year}</h4>`;
  });
});
