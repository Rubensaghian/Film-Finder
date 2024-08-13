const tmdbKey = 'd0a435e1cd57852951ac4f2004ce2d7f';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = "https://api.themoviedb.org/3/genre/movie/list";
    const requestParams = `?api_key=${tmdbKey}`
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams; 

    try {
        const response = await fetch(urlToFetch); 
        if (response.ok) {
            const jsonResponse = await response.json(); 
            console.log(jsonResponse.genres); 
            return jsonResponse.genres; 
        }

    }
    catch (error) {
        console.log(error); 
    }
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;