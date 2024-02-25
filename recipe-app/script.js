const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const recipeContainer = document.querySelector('.recipe-container')
const recipeCloseBtn = document.querySelector('.recipe-close-btn')
const recipeDetailsContent = document.querySelector('.recipe-details-content')
// console.log(recipeDetailsContent)

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
    // Adding event listener to the `View Recipe` Button
    button.addEventListener('click', () => {
      console.log('View Recipe Button Clicked')
      openRecipePopup(meal)
    })

    recipeContainer.appendChild(recipeDiv)
  })
}

//Function to fetch Ingredients 
const fetchIngredients = (meal) => {
  // console.log(meal)
  let ingredientsList = ''
  for(let i = 1; i<=20; i++){
    const ingredient = meal[`strIngredient${i}`]
    if(ingredient){
      const measure = meal[`strMeasure${i}`]
      ingredientsList += `<li>${measure} ${ingredient}</li>`
    } else {
      break
    }
  }
  // console.log(ingredientsList)
  return ingredientsList
}

const openRecipePopup = (meal) => {
  recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientList">${fetchIngredients(meal)}</ul>

    <div>
      <h3>Instructions:</h3>
      <p class="recipeInstructions">${meal.strInstructions}</p>
    </div>
  `
 
  recipeDetailsContent.parentElement.style.display = 'block'
}

recipeCloseBtn.addEventListener('click', ()=> {
  recipeDetailsContent.parentElement.style.display = 'none'
})

searchBtn.addEventListener('click', (e) =>{
  e.preventDefault()
  const searchInput = searchBox.value.trim()
  fetchRecipes(searchInput)
  // console.log('Search Button Clicked.')
})
