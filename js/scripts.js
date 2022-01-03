//Pokemon atributes for pokédex

let pokemonRepository = (function () {
    let pokedex = [
        {
          number: '#001',
          name: 'Bulbasaur',
          height: 0.7,
          type: ['Grass', 'Poison']
        },
        {
          number: '#002',
          name: 'Ivysaur',
          height: 1.0,
          type: ['Grass', 'Poison']
        },
        {
          number: '#003',
          name: 'Venusaur',
          height: 2.0,
          type: ['Grass', 'Poison']
        },
        {
          number: '#004',
          name: 'Charmander',
          height: 0.6,
          type: 'Fire'
        },
        {
          number: '#005',
          name: 'Charmeleon',
          height: 1.1,
          type: 'Fire'
        },
        {
          number: '#006',
          name: 'Charizard',
          height: 1.7,
          type: ['Fire', 'Flying']
        },
        {
          number: '#007',
          name: 'Squirtle',
          height: 0.5,
          type: 'Water'
        },
        {
          number: '#008',
          name: 'Wartortle',
          height: 1.0,
          type: 'Water'
        },
        {
          number: '#009',
          name: 'Blastoise',
          height: 1.6,
          type: 'Water'
        }
    ];

    function getAll() {
        return pokedex;
    }

    function add(newPokemon) {
        pokedex.push(newPokemon);
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
