//Pokemon atributes for pokédex

let pokemonRepository = (function () {
    let pokemonList = [
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
        return pokemonList;
    }

    function add(newPokemon) {
        pokemonList.push(newPokemon);
    }

    return {
        getAll: getAll,
        add: add
    };
})();

  //this loop alows the pokémon atributes to be displayed on the page.

  //if condition added, so there is an extra comment for a bigger pokémon.

function myPokedex(list) {
  list.forEach(function(pokemon) {
      if (pokemon.height >= 1.5) {
          document.write('<p>' + pokemon.number + ' ' + pokemon.name + ', height: '
          + pokemon.height + ' ft, types: ' + pokemon.type + ' (Wow! That is huge!)' + '</p>');
      }
      else {
        document.write('<p>' + pokemon.number + ' ' + pokemon.name + ', height: '
        + pokemon.height + ' ft, types: ' + pokemon.type + '</p>');
      }
  });
}


myPokedex(pokemonRepository.getAll());
