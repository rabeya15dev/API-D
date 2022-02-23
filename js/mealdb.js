
document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // clear data
  searchField.value = '';
  document.getElementById('error-message').style.display = 'none';
  if (searchText == '') {
    // please write something to display
  }
  else {
    // load DAta
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`


    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.meals))
      .catch(error => displayError(error));
  }
}

const displayError = error => { document.getElementById('error-message').style.display = 'block'; }



const displaySearchResult = meals => {
  const searchResult = document.getElementById('search-result');

  searchResult.textContent = '';
  if (meals.length == 0) {
    // show no ewsult found
  }

  meals.forEach(meal => {
    console.log(meal);

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div onclick="lodeMealDetail(${meal.idMeal})" class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
    </div>
  </div> 
    `;
    searchResult.appendChild(div);

  })
}

const lodeMealDetail = mealId => {
  // console.log(mealId);

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
  console.log(meal)

  const mealDetails = document.getElementById('meal-details')
  const div = document.createElement('div')
  div.classList.add('card');
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.srtmeal}</h5 >
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  `;
  mealDetails.appendChild(div)

}

