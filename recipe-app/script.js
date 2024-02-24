const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const recipeContainer = document.querySelector('.recipe-container')

// Funtion to get recipes
const fetchRecipes = async (query) => {
  // Here, we're using TheMealDB[Search meal by name]. Here, we do not need any `API Key`.
  recipeContainer.innerHTML = '<h2>Fetching recipes...</h2>'
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  const response = await fetch(url)
  const recipe_data = await response.json()
  // console.log(recipe_data.meals[0])
  recipeContainer.innerHTML = ''
  recipe_data.meals.forEach((meal) => {
    // console.log(meal)
    const recipeDiv = document.createElement('div')
    recipeDiv.classList.add('recipe')
    recipeDiv.innerHTML = `
      <img src="${meal.strMealThumb}"/>
      <h3>${meal.strMeal}</h3>
      <p><span>${meal.strArea}</span> Dish</p>
      <p>Belongs to <span>${meal.strCategory}</span> Category</p>
    `
    const button = document.createElement('button')
    button.textContent = 'View Recipe'
    recipeDiv.appendChild(button)
    recipeContainer.appendChild(recipeDiv)
  })
}

searchBtn.addEventListener('click', (e) =>{
  e.preventDefault()
  const searchInput = searchBox.value.trim()
  fetchRecipes(searchInput)
  // console.log('Search Button Clicked.')
})
