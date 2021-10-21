/**
 * Traer los primeros 151 pokemon de la primera generacion y 
    devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
    y peso.
 */

const request = require("request");

function getArray(quantity) {
  //recibe la cantidad de pokemones a traer
  request.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${quantity}`, //url de la api
    (error, response, body) => {
      let array = []; //arreglo vacio
      if (error) {
        console.error(error);
      }

      const pokemons = JSON.parse(body); //parseo el body de la api
      pokemons.results.forEach((pokemon) => {
        //recorro el arreglo de resultados
        array.push(getPokemon(pokemon.url)); //agrego a mi arreglo el pokemon que devuelve la funcion getPokemon
      });
      return array; //devuelvo el arreglo
    }
  );
}

function getPokemon(url) {
  //recibe la url del pokemon
  let poke = {}; //creo un objeto vacio
  request.get(url, (error, response, body) => {
    //pido el pokemon
    if (error) {
      console.error(error);
    }

    const pokemon = JSON.parse(body); //parseo el body de la api
    poke = {
      //agrego los datos del pokemon a mi objeto
      name: pokemon.name,
      moves: pokemon.moves,
      types: pokemon.types,
      height: pokemon.height,
      weight: pokemon.weight,
    };
    return poke; //devuelvo el objeto
  });
}

console.log(getArray(3)); //imprimo el arreglo
