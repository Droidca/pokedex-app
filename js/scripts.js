    let pokemonList = [
      {name: 'Bulbasaur', height:'0.7', type: ['Grass', 'Poison']},
      {name: 'Charmander', height:'0.6', type: 'Fire'},
      {name: 'Squirtle', height:'0.5', type: 'Water'}
    ];

    for (let i = 0; i < pokemonList.length; i++) {
      document.write(pokemonList[i].name + " " + "(Height: " + pokemonList[i].height
       + ", Type: " + pokemonList[i].type + ") ");
    }
