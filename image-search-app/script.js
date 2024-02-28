const searchForm = document.querySelector('form')
const imagesContainer = document.querySelector('.images-container')
const searchInput = document.querySelector('.search-input')
const loadMoreBtn = document.querySelector('.loadMoreBtn')

// Here, we're using Unsplash API.

//I am declaring `page` variable globally so that I can use this in `searchForm`
let page = 1 

// Funtion to fetch images using Unsplash API
const fetchImages = async (query, pageNo) => {
  // console.log(query)
  try {
    if (pageNo === 1){
      imagesContainer.innerHTML = ''
    }
  
    const access_key = 'N8C_aikudaD_MsJj7Nq_VuG-QJz7q3KHxVl7g7KCp0c'
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${access_key}`
    // console.log(url)
    const response = await fetch(url)
    const image_data = await response.json()
    console.log(image_data)
  
    if(image_data.results.length > 0){
      console.log(`The image_data length is ${image_data.length}`)
      image_data.results.forEach((photo) => {
        const imageElement = document.createElement('div')
        imageElement.classList.add('imageDiv')
        imageElement.innerHTML = `<img src="${photo.urls.regular}">`
    
        //creating overlay
        const overlayElement = document.createElement('div')
        overlayElement.classList.add('overlay')
    
        //creating overlay text
        const overlayText = document.createElement('h3')
        overlayText.innerText = `${photo.alt_description}`
    
        overlayElement.appendChild(overlayText)
        imageElement.appendChild(overlayElement)
        imagesContainer.appendChild(imageElement)
      })
    
      if(image_data.total_pages === pageNo){
        // console.log(`Total pages = ${image_data.total_pages} | Current Page = ${pageNo}`)
        loadMoreBtn.style.display = 'none'
      } else {
        loadMoreBtn.style.display = 'block'
        // console.log(`Total pages = ${image_data.total_pages} | Current Page = ${pageNo}`)
      }
    } else {
      imagesContainer.innerHTML = '<h2>None image found</h2>'
      // if(loadMoreBtn.style.display === 'block'){
      //   loadMoreBtn.style.display === 'none'
      // }
    }
  } catch (error) {
    imagesContainer.innerHTML = '<h2>Fail to fetch images. Please try again.</h2>'
    // if(loadMoreBtn.style.display === 'block'){
    //   loadMoreBtn.style.display === 'none'
    // }
  }
}

// Adding Event Listening `searchForm`
searchForm.addEventListener('submit', (e)=> {
  e.preventDefault()
  // console.log(searchInput.value)
  const inputText = searchInput.value.trim()
  if(inputText !== ''){
    page = 1
    fetchImages(inputText, page)
  } else {
    imagesContainer.innerHTML = '<h2>Please enter a search query.</h2>'
  }
})

// Adding Event Listening `Load More` Button
loadMoreBtn.addEventListener('click', ()=> {
  fetchImages(searchInput.value.trim(), ++page)
}) 