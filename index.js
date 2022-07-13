// let data = [];
// let search = "";
// async function getAllMovies() {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/movie/upcoming?api_key=1bfdbff05c2698dc917dd28c08d41096&language=en-US&page=1"
//   );
//   data = await response.json();
//   chnageMovieList(data);
// }

// async function getSearchMovies(search) {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/search/movie?api_key=1bfdbff05c2698dc917dd28c08d41096&query=" +
//       search
//   );
//   data = await response.json();
//   console.log(data);
//   chnageMovieList(data);
// }

// getAllMovies();

// function searhMovies() {
//   search = document.getElementById("search").value;
//   console.log(search);
//   getSearchMovies(search);
// }
// function chnageMovieList(data) {
//   document.getElementById("movies").innerHTML = "";
//   data.results.forEach((movie) => {
//     let div_elem = document.getElementById("movies");
//     let img = document.getElementById(movie.id);

//     let movie_list = document.createElement("div");
//     div_elem.appendChild(movie_list);
//     div_elem.appendChild(img);
//     movie_list.setAttribute("id", movie.id);
//     document.getElementById(movie.id).innerHTML = movie.title;
//     movie_list.classList.add("grid-item");
//     div_elem.appendChild(movie_list);
//   });
// }


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
function sortNav() {
  document.getElementById("sortNav").style.height = "100%";
}

function closesortNav() {
  document.getElementById("sortNav").style.height = "0%";
}
const apiKey = "1bfdbff05c2698dc917dd28c08d41096";
const baseURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=";


function moviesTrending() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Trending Movies";
}


function moviesAll() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "All Movies";
}
function moviesAction() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "28";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Action Movies";
}
function moviesAdventure() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "12";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Adventure Movies";
}
function moviesAnimation() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "16";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Animation Movies";
}
function moviesComedy() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "35";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Comedy Movies";
}
function moviesCrime() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "80";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Crime Movies";
}
function moviesDrama() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "18";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Drama Movies";
}
function moviesFamily() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "10751";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Family Movies";
}
function moviesHistory() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "36";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "History Movies";
}
function moviesFantasy() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "14";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Fantasy Movies";
}

function moviesThriller() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "53";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Thriller Movies";
}
function moviesscifi() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "878";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Science Fiction Movies";
}

function moviesThriller() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var resultN = document.getElementById("resultN");
resultN.innerHTML = "53";
  curP = 0;
  loadMore();
  var moviegenre = document.getElementById("movieGenre");
  moviegenre.innerHTML = "Thriller Movies";
}
function popularitySort() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var sortS = document.getElementById("sortS");
sortS.innerHTML = "popularity.desc";
  curP = 0;
  loadMore();
  var sortName = document.getElementById("sorterButton");
  sortName.innerHTML = "Popularity";
}

function abcSort() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var sortS = document.getElementById("sortS");
sortS.innerHTML = "original_title.asc";
  curP = 0;
  loadMore();
  var sortName = document.getElementById("sorterButton");
  sortName.innerHTML = "Alphabetical";
}

function yearSort() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var sortS = document.getElementById("sortS");
sortS.innerHTML = "release_date.desc";
  curP = 0;
  loadMore();
  var sortName = document.getElementById("sorterButton");
  sortName.innerHTML = "Year";
}

function rateSort() {
  var node = document.getElementById("movies");
node.querySelectorAll('*').forEach(n => n.remove());
  var sortS = document.getElementById("sortS");
sortS.innerHTML = "vote_average.desc";
  curP = 0;
  loadMore();
  var sortName = document.getElementById("sorterButton");
  sortName.innerHTML = "Rating";
}

var resultN = document.getElementById("resultN");
var sortS = document.getElementById("sortS");
var sortString = sortS.innerHTML;
var resultNum = resultN.innerHTML;
console.log(resultNum + ", Sort: " + sortString);
var curP = 1;
const testone = "https://api.themoviedb.org/3/discover/movie?api_key=9f237e6fe6a675d71ca0e0dc7c102591&with_genres=" + resultNum + "&sort_by=" + sortString + "&vote_count.gte=100&page=";

window.onscroll = function() {
  if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
  loadMore();
  }
}

function loadMore() {
  var resultN = document.getElementById("resultN");
var sortS = document.getElementById("sortS");
var sortString = sortS.innerHTML;
var resultNum = resultN.innerHTML;
console.log(resultNum + ", Sort: " + sortString);
const testone = "https://api.themoviedb.org/3/discover/movie?api_key=9f237e6fe6a675d71ca0e0dc7c102591&with_genres=" + resultNum + "&sort_by=" + sortString + "&vote_count.gte=100&page=";
  curP += 1;
  var finCurp = testone + curP;
  console.log(curP)
  axios.get(finCurp).then((res) => {
  data = res.data.results;
  data.map((item) => {
    Movie(item.poster_path, item.id);
  });
});
}

var randomnumber = Math.floor(Math.random()*900);

const test = testone + "1";
const test2 = testone + "2";
const searchUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=1bfdbff05c2698dc917dd28c08d41096&query=";
const imgBaseURL = "http://image.tmdb.org/t/p/w500";

let data;
let grid_item;

//All Movies API
axios.get(test).then((res) => {
  data = res.data.results;
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

  red.addEventListener("click", () => {
    window.location =
      "/~/?movieId=" + id;
  });
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      input = document.getElementById("search");
        if(input && input.value) {
        searhMovies()()
      } else {
          
      }
    }
});

function movieDetail() {}

function searhMovies() {
  document.getElementById("movies").innerHTML = "";
  let search = document.querySelector("#search").value;

  //Search for movies API
  axios.get(`${searchUrl}${search}`).then((res) => {
    data = res.data.results;
    data.map((item) => {
      Movie(item.poster_path, item.id);
    });
  });
}
