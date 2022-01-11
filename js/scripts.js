//Pokemon atributes for pokédex

let pokemonRepository = (function () {
  let pokedex = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  let modalContainer = document.querySelector('#modal-container');

  //Function will return every pokemon in pokedex

  function getAll() {
    return pokedex;
  }

  // Function to Capitalize First letter

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    button.classList.add("button");
    button.classList.add("btn");
    button.classList.add("btn-link");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    addListItemBtn(button, pokemon);
  }

    //Function makes clicking the button show details of pokemon in console

    function addListItemBtn(button, pokemon){
      button.addEventListener('click', function() {
        showDetails(pokemon, modalContainer);
      });
    }

  //function that fetches the list of pokemon


  function loadList(){
    return fetch (apiUrl).then(function(response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        let pokemon = {
          name: capitalizeFirstLetter(item.name),
          detailsUrl: item.url
        };
        add (pokemon);
      });
    }).catch(function(e){
      console.error(e);
    });
  }

  //function that fetches the details

  function loadDetails(pokemon){
    let url = pokemon.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
    }).then(function(details){
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = details.types;
      pokemon.abilities = details.abilities;
    }).catch(function (e) {
    console.error(e);
    });
  }

  //Function shows in console details from pokemon

  function showDetails(pokemon) {
    loadDetails(pokemon).then( function() {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {

    let modalHeader = document.querySelector('.modal-header');
    let modalBody = document.querySelector('.modal-body');

    let namePokemon = document.createElement('h1');
    namePokemon.innerText = pokemon.name;

    let heightPokemon = document.createElement('p');
    heightPokemon.innerText = 'Height: ' + (pokemon.height*0.1).toFixed(2) + ' m';

    let weightPokemon = document.createElement('p');
    weightPokemon.innerText = 'Weight: ' + (pokemon.weight*0.1).toFixed(2) + ' Kg';

    let typePokemon = document.createElement('p');
    let type1 = capitalizeFirstLetter(pokemon.types[0].type.name);
    if (pokemon.types[1] === undefined) {
      typePokemon.innerText = 'Type(s): ' + type1;
    } else {
      let type2 = capitalizeFirstLetter(pokemon.types[1].type.name);
      typePokemon.innerText = 'Type(s): ' + type1 + ', ' + type2;
    }


    let abilityPokemon = document.createElement('p');
    let ability1 = capitalizeFirstLetter(pokemon.abilities[0].ability.name);

    if (pokemon.abilities[1] === undefined &&
      pokemon.abilities[2] === undefined) {
      abilityPokemon.innerText = 'Abilities: ' + ability1;
    } else if(pokemon.abilities[2] === undefined) {
      let ability2 = capitalizeFirstLetter(pokemon.abilities[1].ability.name);
      abilityPokemon.innerText = 'Abilities: ' + ability1 + ', ' + ability2;
    } else {
      let ability2 = capitalizeFirstLetter(pokemon.abilities[1].ability.name);
      let ability3 = capitalizeFirstLetter(pokemon.abilities[2].ability.name);
      abilityPokemon.innerText = 'Abilities: ' + ability1 + ', ' + ability2 + ', '
      + ability3;
    }

    let imagePokemon = document.createElement('img');
    imagePokemon.src = pokemon.imageUrl;

    modalHeader.appendChild(namePokemon);
    modalBody.appendChild(imagePokemon);
    modalBody.appendChild(heightPokemon);
    modalBody.appendChild(weightPokemon);
    modalBody.appendChild(typePokemon);
    modalBody.appendChild(abilityPokemon);

  }



  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    addListItemBtn: addListItemBtn,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal

  };
})();

//Calls the functions

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
