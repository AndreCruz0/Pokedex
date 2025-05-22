// src/services/api/pokemonApi.js

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (offset, limit = 10) => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  // The PokeAPI for list returns results which is an array of {name, url}
  // To match the previous structure used in useLoadPokedex, we should fetch details for each
  const detailedPokemonPromises = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    if(!res.ok) {
      // Silently fail for individual Pokemon, or collect errors
      console.error(`Failed to fetch details for ${pokemon.name}`);
      return null; 
    }
    return res.json();
  });
  
  const detailedPokemon = await Promise.all(detailedPokemonPromises);
  return detailedPokemon.filter(p => p !== null); // Filter out any nulls from failed fetches
};

export const fetchPokemonDetails = async (pokemonName) => {
  const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
