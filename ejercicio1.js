const request = require("request");

function getPokemon(pokemonName) {
  request.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    (error, response, body) => {
      if (error) {
        console.error(error);
      }

      const pokemon = JSON.parse(body);
      pokemon.types.forEach((type) => console.log(type.type.name));
    }
  );
}

getPokemon("bulbasaur");
