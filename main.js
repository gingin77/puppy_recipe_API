let searchInputEl = document.getElementById("search_field");
let buttonEl = document.getElementById("search_now");
// let url = "http://recipepuppyproxy.herokuapp.com/api/?i=apples"; << don't need this here. Refer to the constant portion in the call.

buttonEl.addEventListener('click', function(e) {
    let search_termVal = searchInputEl.value;
    // var nameVal = nameInput.value;
    // var emailVal = emailInput.value;
    if (search_termVal) {
      alert("Wait a second and we'll help you decide what's for dinner");
      searchInputEl.value = "";
    }
    console.log(search_termVal);
    url = ("http://recipepuppyproxy.herokuapp.com/api/?q="+search_termVal);
    console.log(url);
    // return search_termVal;

    function fetchGET(url) {
      fetch(url)
        .then(function(response) {
            if (response.status !== 200) {
              console.log(response.status);
              return;
            }
            response.json().then(function(data) {
              console.log("define query return variables", response.url);
              console.log(data.results);
            });
          })
          .catch(function(err) {
            console.log("Fetch Error :-S", err);
          });
        }

    fetchGET(url); /*finally!!!! this works and this aligns with what I first learned about functions.*/
  });

// console.log(search_termVal);


// this line above is working to call fetchGET, when url is in the parameter and right after fetch(). Rearrange the eventlistener function to feed a variable to this function call.

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






// // <!-- I got a lot of errors when I wasn't sure what form action and method attributes I should be using. Finally, I went back to the form lesson and saw that I could leave both blank.
//
//
// When form action="welcome.php" and method="get", I got erros:
// Resource interpreted as Document but transferred with MIME type text/php: "file:///Users/ginniehench/Desktop/Dev-local/Week_4/puppy_recipe_API/welcome.php?q=kale".
// //
// // Next, I deleted the welcome.php and got: GET file:///Users/ginniehench/Desktop/Dev-local/Week_4/puppy_recipe_API/welcome.php?q=chicken net::ERR_FILE_NOT_FOUND
// //
// // Change file back to what it was at the start....-->
