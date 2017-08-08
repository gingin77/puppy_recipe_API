let searchInputEl = document.getElementById("search_field");
let buttonEl = document.getElementById("search_now");

// console.log(url_root + search_term);

// let url_root = "http://www.recipepuppy.com/api/?q=";
// let url = url_root + search_term;


buttonEl.addEventListener('click', function(e) {
    let search_termVal = searchInputEl.value;
    // var nameVal = nameInput.value;
    // var emailVal = emailInput.value;
    if (search_termVal) {
      alert("Wait a second and we'll help you fill in your grocery list");
      searchInputEl.value = "";
    }
    console.log(search_termVal);
    let url = "http://www.recipepuppy.com/api/?q="+search_termVal;
    console.log(url);
    return url;
  });

function fetchGET(url){
  fetch(url)
    .then(function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log("define query return variables", response.url);
          console.log(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
    }

fetchGET(url)

// http://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3
// fetchGET(url_root + search_term);
//
//
// let markup = `
//   <div class="wrapper">
//   I will be a recipe wrapper</div>
// `
//
// let recipe_options_container = document.getElementById("recipe_options");
// console.log(recipe_options_container);
//
// recipe_options_container.innerHTML = markup;
// console.log(markup);
