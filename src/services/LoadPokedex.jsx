import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { PokemonInfoContext } from '../context/PokemonData-context';
import { OffSetContext } from '../context/Offset-context';

const LoadPokemon = () => {
	const [pokemonData, setPokemonData] = useState([]);
	const [filteredPokemonData, setFilteredPokemonData] = useState([]);
	const [storedPokemonData, setStoredPokemonData] = useState([]);
	const { offSet, setOffSet } = useContext(OffSetContext);

	const refCounter = useRef(false);
	const { setPokemonInfo } = useContext(PokemonInfoContext);

	const fetchData = async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offSet}`,
		);
		return await response.json();
	};

	async function filterApi() {
		const data = await fetchData();
		const results = data.results;
		return await results.map(async (pokemons) => {
			const getPokemonsData = await fetch(pokemons.url);
			return await getPokemonsData.json();
		});
	}

	

	useEffect(() => {
		async function pokemonsData() {
			if (offSet === 0 && refCounter.current) return;
			refCounter.current = true;
			const pokemonsData = await filterApi();
			const pokemonsDataFormated = await Promise.all(pokemonsData);
			
			setPokemonData(pokemonsDataFormated);
		}
		pokemonsData();
	}, [offSet]);

	useEffect(() => {
		const pokemonFiltred = pokemonData.map((pokemonInfo) => {
			const { name, sprites, abilities, moves, types } = pokemonInfo;
			return {
				pokemonAbilities: abilities,
				pokemonName: name,
				pokemonMove: moves,
				pokemonImage: sprites.front_default,
				pokemonType: types,
			};
		});
		setFilteredPokemonData(pokemonFiltred);
	}, [pokemonData]);

	useEffect(() => {
		setStoredPokemonData((prev) => [...prev, ...filteredPokemonData]);
		setPokemonInfo((prev) => [...prev, ...filteredPokemonData]);
	}, [filteredPokemonData]);
};

export default LoadPokemon;
