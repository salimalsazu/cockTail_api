const loadCocktail = async (search) => {
  toggleLoader('0%')
  const url = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
  toggleLoader('20%')
  const res = await fetch(url);
  toggleLoader('70%')
  const data = await res.json();
  toggleLoader('100%')
  displayCockTail(data.drinks);

}

const displayCockTail = cockTails => {
  // console.log(cockTails);
  const cockTailContainer = document.getElementById('cockTail-container');
  cockTailContainer.innerHTML = "";
  cockTails.forEach(cockTail => {
    // console.log(cockTail);
    const cockTailsDiv = document.createElement('div');
    cockTailsDiv.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${cockTail.strDrinkThumb}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${cockTail.strDrink}</h2>
        <p> ${cockTail.strCategory}</p>
        <div class="card-actions">
          <label onClick ="modalDetails(${cockTail.idDrink})" for="my-modal-3" class="btn btn-primary modal-button">See Details</label>
         
        </div>
      </div>       
        `
    cockTailContainer.appendChild(cockTailsDiv);
  });
  // toggleLoader(false);
}


document.getElementById('btn-search').addEventListener('click', function () {
  // toggleLoader(true);
  const fieldSearch = document.getElementById('search-field');
  const fieldSearchtext = fieldSearch.value;
  fieldSearch.value = "";
  loadCocktail(fieldSearchtext);
})

// Method 1

/* 
const toggleLoader = isLoading => {
  const loaderSection = document.getElementById('loader');

  if (isLoading) {
    loaderSection.classList.remove('hidden');
  }

  else {
    loaderSection.classList.add('hidden');
  }

}
 */

// Method 2 

const toggleLoader = (isLoading) => {
  const loadingBar = document.getElementById('loader');
  loadingBar.style.width = isLoading;
  loadingBar.innerText = isLoading;

  if (isLoading == '100%') {
    loadingBar.innerText = '';
  }
}



const modalDetails = async (id) => {
  const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data.drinks[0]);
  displayModal(data.drinks[0]);
}

const displayModal = modal => {
  console.log(modal);
  const modalTtitle = document.getElementById('modal-display');
  modalTtitle.innerHTML = `
  <div class="modal-box relative">
  <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <h1 class="text-lg font-bold"> ${modal.strDrink} </h1>
  <p class="py-4">${modal.strCategory}</p>
  <img src="${modal.strDrinkThumb}">
</div>
  `
}


// loadCocktail();







//what will we do tomorrow ?

/* 
1. Loading Spin ok 
2. Search Error 
3. Modal ok 
4. Add to cart 
5. blank input filed error handle 
6. Ul li dynamic 
7. keyboard submit
8. Carosual



(২) ওয়েবসাইট লোড নেওয়ার সময় একটি spinner  বা progress bar দেখাবে।
০৫) ওয়েবসাইটে অবশ্যই forEach এবং for in loop ব্যবহার করতে হবে।
(৬) Navigation bar থাকবে। সেখানে, একটা সার্চ ফিল্ড থাকবে। কিছু অপশন থাকবে। Home অপশন অবশ্যই কাজ করতে হবে।
(৮) Main section এর সব শেষে একটা Slider থাকবে  সেখানে random user এর API ব্যবহার করে slide আকারে দেখাতে হবে।
*/