//Pokemon atributes for pokédex

    let pokemonList = [
      {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['Grass', 'Poison']
      },
      {
        name: 'Ivysaur',
        height: 1.0,
        type: ['Grass', 'Poison']
      },
      {
        name: 'Venusaur',
        height: 2.0,
        type: ['Grass', 'Poison']
      },
      {
        name: 'Charmander',
        height: 0.6,
        type: 'Fire'
      },
      {
        name: 'Charmeleon',
        height: 1.1,
        type: 'Fire'
      },
      {
        name: 'Charizard',
        height: 1.7,
        type: ['Fire', 'Flying']
      },
      {
        name: 'Squirtle',
        height: 0.5,
        type: 'Water'
      },
      {
        name: 'Wartortle',
        height: 1.0,
        type: 'Water'
      },
      {
        name: 'Blastoise',
        height: 1.6,
        type: 'Water'
      }
    ];

    //this loop alows the pokémon atributes to be displayed on the page.

    //if condition added, so there is an extra comment for a bigger pokémon.

    //added <br> for line breaks, so the information gets properly displayed.

    for (let i = 0; i < pokemonList.length; i++) {
      document.write(pokemonList[i].name + " " + "(Height: "
      + pokemonList[i].height + ", Type: " + pokemonList[i].type + ") ");
      if(pokemonList[i].height > 1.5){
        document.write('That pokemon is huge!');
      }
      document.write('<br>');
    }
