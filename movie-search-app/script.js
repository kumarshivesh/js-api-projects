const searchForm = document.querySelector('form')
const movieContainer = document.querySelector('.movie-container')
const inputBox = document.querySelector('.inputBox')

// Funtion to fetch movies using OMDb API
const fetchMovies = async (query) => {
  try {
    // Here, we're using OMDb.
    const api_key = 'ad8080b3'
    // By Title (i.e., `t`)
    const url = `https://www.omdbapi.com/?apikey=${api_key}&t=${query}`
    // By Search (i.e., `s`)
    // const url = `https://www.omdbapi.com/?apikey=${api_key}&s=${query}`

    const response = await fetch(url)
    if(!response.ok){
      throw new Error('Unable to fetch movie data.')
    }
    const movie_data = await response.json()
    // console.log(movie_data)

    showMoviesData(movie_data)
  } catch (error) {
    showErrorMessage('No Movie Found!!!.')
  }
}

// Funtion to show movie data on screen
const showMoviesData = (movie_data) => {
  console.log(movie_data)
  movieContainer.innerHTML = ''
  movieContainer.classList.remove('no-background')
  // Use Destruturing assignment to extract properties from `movie_data` object
  const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = movie_data
  const movieElement = document.createElement('div')
  movieElement.classList.add('movie-info')
  movieElement.innerHTML = `
   <h2>${Title}</h2>
   <p><strong>Rating: &#11088;</strong>${imdbRating}</p>
  `

  const movieGenreElement = document.createElement('div')
  movieGenreElement.classList.add('movie-genre')

  const genres = Genre.split(",")
  // console.log(genres)

  genres.forEach(genre => {
    const p = document.createElement('p')
    p.innerHTML = genre
    movieGenreElement.appendChild(p)
  })
  movieElement.appendChild(movieGenreElement)

  // If I'll not use `+` in the below line then the previous `movieElement.innerHTML` will get replaced by this new one. In order to append the new one after then existing one I am using `+`. 
  movieElement.innerHTML += `
   <p><strong>Released Date: </strong>${Released}</p>
   <p><strong>Duration: </strong>${Runtime}</p>
   <p><strong>Cast: </strong>${Actors}</p>
   <p><strong>Plot: </strong>${Plot}</p>
  `
  // Creating a div for movie poster
  const moviePosterElement = document.createElement('div')
  moviePosterElement.classList.add('movie-poster')
  moviePosterElement.innerHTML = `<img src="${Poster}" />`

  movieContainer.appendChild(moviePosterElement)
  movieContainer.appendChild(movieElement)
}

// Function to display error message
const showErrorMessage = (message) => {
  movieContainer.innerHTML = `<h2>${message}</h2>`
    movieContainer.classList.add('no-background')
} 

// Function to handle form submission
const handleFormSubmission = (e) => {
  e.preventDefault()
  const searchInput = inputBox.value.trim()
  if(searchInput !== ''){
    showErrorMessage('Fetching Movie Information...')
    fetchMovies(searchInput)
  } else {
    showErrorMessage('Enter a movie in the search bar to get the information.')
  }
}

// Adding Event Listener to Search Form
searchForm.addEventListener('submit', handleFormSubmission)


