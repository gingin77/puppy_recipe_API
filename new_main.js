let searchInputEl = document.getElementById("search_field");
let buttonEl = document.getElementById("search_now");

let recipe_options_container = document.getElementById("recipe_options");

buttonEl.addEventListener('click', function(e) {
  let search_termVal = searchInputEl.value;

  if (search_termVal) {
    alert("Wait a second and we'll help you decide what's for dinner");
    searchInputEl.value = "";
  }
  console.log(search_termVal);
  url = ("http://recipepuppyproxy.herokuapp.com/api/?q="+search_termVal);
  console.log(url);
  /*everything above this line up until the start of the buttonEl function is outside of the fetchGET function.*/

      function fetchGET(url) {
        fetch(url)
          .then(
            function(response) {
              if (response.status !== 200) {
                console.log(response.status);
                return;
              }
              response.json().then(function(data) {
                console.log("define query return variables", response.url);
                console.log(data.results);

                let recipeArray = data.results;
                console.log(recipeArray);
                let markup ="";
                for (let i=0; i<recipeArray.length; i++){
                  let recipes = `
                    <div>
                        <div class="image">
                          <img src=${recipeArray[i].thumbnail}</img>
                        <div>
                        <div class="title">${recipeArray[i].title}</div>
                        <div class="link">${recipeArray[i].href}</div>
                    </div>`
                    markup += recipes;
                  }
                  console.log(markup);
                  recipe_options_container.innerHTML = markup;
              });
            })
          .catch(function(err) {
            console.log("Fetch Error :-S", err);
          })
      }
      fetchGET(url);
})/*<<< these are the end brackets associated with the buttonEl function.*/
