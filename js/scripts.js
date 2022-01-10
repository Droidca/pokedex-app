//Pokemon atributes for pokédex

let pokemonRepository = (function () {
  let pokedex = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  let modalContainer = document.querySelector('#modal-container');

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

    //Function makes clicking the button show details of pokemon in console

    function addListItemBtn(button, pokemon){
      button.addEventListener('click', function(){
        showDetails(pokemon);
      });
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

    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', hideModal);

    let namePokemon = document.createElement('h1');
    namePokemon.innerText = pokemon.name;

    let heightPokemon = document.createElement('p');
    heightPokemon.innerText = 'Height: ' + pokemon.height;

    let weightPokemon = document.createElement('p');
    weightPokemon.innerText = 'Weight: ' + pokemon.weight;

    let typePokemon = document.createElement('p');
    typePokemon.innerText = 'Type(s): ' + pokemon.types;

    let abilityPokemon = document.createElement('p');
    abilityPokemon.innerText = 'Abilities: ' + pokemon.abilities;

    let imagePokemon = document.createElement('img');
    imagePokemon.src = pokemon.imageUrl;

    modal.appendChild(closeButton);
    modal.appendChild(namePokemon);
    modal.appendChild(imagePokemon);
    modal.appendChild(heightPokemon);
    modal.appendChild(weightPokemon);
    modal.appendChild(typePokemon);
    modal.appendChild(abilityPokemon);

    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal(){
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if(target === modalContainer){
      hideModal();
    }
  });



  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    addListItemBtn: addListItemBtn,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal

  };
})();

//Calls the functions

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
