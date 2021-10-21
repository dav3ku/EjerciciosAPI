const request = require("request");

function getCharacter(id) {
  request.get(`https://swapi.dev/api/people/${id}`, (error, response, body) => {
    if (error) {
      console.error(error);
    }

    const personaje = JSON.parse(body);
    console.log(`${personaje.name} participo en las siguientes peliculas: `);
    personaje.films.forEach((film) => {
      getFilms(film);
    });
  });
}

function getFilms(url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
    }

    const film = JSON.parse(body);
    console.log(`+ Episode ${film.episode_id}: ${film.title}`);
  });
}

getCharacter(1);
