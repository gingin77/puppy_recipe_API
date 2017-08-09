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
                    <ul>
                        <li class="image">
                          <img src="${recipeArray[i].thumbnail}"</img></li>
                        <li class="title">${recipeArray[i].title}</li>
                        <li class="link">${recipeArray[i].href}</li>
                    </ul>`
                    markup += recipes;
                  }
                  console.log(markup);
                  recipe_options_container.innerHTML = markup;

                  // let images= document.querySelectorAll("img.src");
                  // console.log(images);
                  // console.log(images.src);
                  //   for (let i=0; i<images.length; i++){
                  //     if (images[i].src === ""){
                  //       images[i].src = '<a href="https://placeholder.com"><img src="http://via.placeholder.com/106x80"></a>'
                  //     }
                  //   } /*I don't have the brainpower left to figure out how to add placeholder images based on the way I have set up the template literal */
              });
            })
          .catch(function(err) {
            console.log("Fetch Error :-S", err);
          })
      }
      fetchGET(url);
})/*<<< these are the end brackets associated with the buttonEl function.*/



// function addPlaceholder(""){
//
//   for (let i=0; i<images.length; i++);
//
// }
