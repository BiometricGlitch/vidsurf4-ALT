var link = window.location.href;
var newLink = new URL(link);
const movieId = newLink.searchParams.get("movieId");

const apiKey = "1bfdbff05c2698dc917dd28c08d41096";
const detailMovie =
  "https://api.themoviedb.org/3/movie/" +
  movieId +
  "?api_key=" +
  apiKey +
  "&language=en-US";
const relatedUrl =
  "https://api.themoviedb.org/3/movie/" +
  movieId +
  "/similar?api_key=" +
  apiKey +
  "&language=en-US&page=1";
const imgBaseURL = "http://image.tmdb.org/t/p/w500";
let data;

//Movie Details API
axios.get(detailMovie).then((res) => {
  data = res.data;

  console.log(data);
  const img = document.createElement("img");
  document.title = "VidSurf | " + data.original_title;
  document.getElementById("movieTitle").innerHTML = "VidSurf | " + data.original_title;
  //document.getElementById("movieCover").style.backgroundImage = `url(${imgBaseURL}${data.poster_path})`;
  document.getElementById("myImageID").src = `${imgBaseURL}${data.poster_path}`;
  document.getElementById("original_title").innerHTML = data.original_title + " (" + data.release_date + ") ";
  document.getElementById("overview").innerHTML = data.overview;
  document.getElementById("movie_id").innerHTML = data.id + " :TMDB | IMDB: " + data.imdb_id;
  document.getElementById("viewpoint").scrollIntoView();

var imdbiddata = data.imdb_id;
  document.getElementById("vidframe").src = "https://imdbscrape.netlify.app/movie/?&imdbid=" + imdbiddata;
});

//Movie Related Movie API
axios.get(relatedUrl).then((res) => {
  data = res.data.results;
  console.log(data);
  data.map((item) => {
    Movie(item.poster_path, item.id);
  });
});

function Movie(poster_path, id) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  const grid = document.querySelector(".grid");
  div.appendChild(img);
  grid.appendChild(div);

  div.setAttribute("id", id);
  let red = document.getElementById(id);
  var link = window.location.href;
var newLink = new URL(link);
const tmdbid = newLink.searchParams.get("movieId");
  document.getElementById("vidframe").src = "https://imdbscrape.netlify.app/movie/?&imdbid=" + imdbiddata;

  red.addEventListener("click", () => {
    window.location =
      "detail.html?movieId=" + id;
  });
}
