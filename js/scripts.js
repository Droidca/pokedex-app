//Pokemon atributes for pokédex

let pokemonRepository = (function () {
  let pokedex = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  //Function will return every pokemon in pokedex

  function getAll() {
    return pokedex;
  }

//Function allows to add pokemonList

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokedex.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  //Function creates the list of pokemons from podedex within buttons

  //IDEA: Costumize button color acording to pokemon type with if/else

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    addListItemBtn(button, pokemon);
  }

  //function that fetches the list of pokemon

  
  function loadList(){
    return fetch (apiUrl).then(function(response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add (pokemon);
      });
    }).catch(function(e){
      console.error(e);
    })
  }

  //function that fetches the details

  function loadDetails(item){
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
    }).then(function(details){
      item.imageUrl = details.sprites.front_default;
      item.heigth = details.height;
      item.weight = details.wieght;
      item.types = details.types;
      item.abilities = details.abilities;
    })
  }

  //Function shows in console details from pokemon

  function showDetails(pokemon) {
    loadDetails(pokemon).then( function() {
      console.log(pokemon);
    });
  }

  //Function makes clicking the button show details of pokemon in console

  function addListItemBtn(button, pokemon){
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    addListItemBtn: addListItemBtn,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

//Calls the functions

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
