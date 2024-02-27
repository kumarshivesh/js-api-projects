const searchForm = document.querySelector('form')
const imagesContainer = document.querySelector('.images-container')
const searchInput = document.querySelector('.search-input')

// Here, we're using Unsplash API. 

// Funtion to fetch images using Unsplash API
const fetchImages = async (query) => {
  // console.log(query)
  const access_key = 'N8C_aikudaD_MsJj7Nq_VuG-QJz7q3KHxVl7g7KCp0c'
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${access_key}`
  // console.log(url)
  const response = await fetch(url)
  const image_data = await response.json()
  console.log(image_data)
}

// Adding Event Listening 
searchForm.addEventListener('submit', (e)=> {
  e.preventDefault()
  // console.log(searchInput.value)
  const inputText = searchInput.value.trim()
  if(inputText !== ''){
    fetchImages(inputText)
  } else {
    imagesContainer.innerHTML = '<h2>Please enter a search query.</h2>'
  }
})