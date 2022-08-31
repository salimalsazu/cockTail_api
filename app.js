const loadCocktail = async (search) => {
    const url = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const res = await fetch(url);
    const data = await res.json();
    displayCockTail(data.drinks);

}

const displayCockTail = cockTails => {
    console.log(cockTails);
    const cockTailContainer = document.getElementById('cockTail-container');
    cockTailContainer.innerHTML = "";
    cockTails.forEach(cockTail => {
        const cockTailsDiv = document.createElement('div');
        cockTailsDiv.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${cockTail.strDrinkThumb}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${cockTail.strDrink}</h2>
        <p> ${cockTail.strCategory}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>       
        `
        cockTailContainer.appendChild(cockTailsDiv);
    });

}


document.getElementById('btn-search').addEventListener('click', function () {
    const fieldSearch = document.getElementById('search-field');
    const fieldSearchtext = fieldSearch.value;
    fieldSearch.value = "";
    loadCocktail(fieldSearchtext);
})


// loadCocktail();









//what will we do tomorrow ?

/* 
1. Loading Spin 
2. Search Error 
3. Modal 
4. Add to cart 
5. blank input filed error handle 
6. Ul li dynamic 
*/