import React, { useState, useEffect } from "react";

const PokemonApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=807")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results))
      .catch((error) => console.log("error", error));
  }, []);

  const [listPokemon, setListPokemon] = useState([]);
  const onSubmitHandler = () => (
    <div>
      {pokemon.length > 0 &&
        pokemon.map((elem, index) => (
          <div key={index}>
            {index} {elem.name}
          </div>
        ))}
    </div>
  );

  return (
    <div>
      <button type="onclick" onClick={(e) => setListPokemon(onSubmitHandler)}>
        Fecth Pokemon
      </button>
      {listPokemon}
    </div>
  );
};
export default PokemonApi;
