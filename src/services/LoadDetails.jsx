import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsContext } from '../context/Details-context';

const LoadPokemonDetails = () => {
	const [pokemonData, setPokemonData] = useState({});
	const { pokemon } = useParams();

	const { setDetails, details } = useContext(DetailsContext);

	async function fetchData() {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

		return await res.json();
	}
	
	
	useEffect(() => {
		async function pokemonsData() {
			const pokemonsData = await fetchData();
			setPokemonData(pokemonsData);
		}
		pokemonsData();
	}, [pokemon]);

	useEffect(() => {
		if (!pokemonData || !pokemonData.sprites) return;

		const getPokemonAbilities = pokemonData.abilities.map(async (abilities) => {
			const abilitiesResponse = await fetch(abilities.ability.url);
			return await abilitiesResponse.json();
		});

		async function compileAbilities() {
			const res = await Promise.all(getPokemonAbilities);

			return res.map((objectRes) => {
				const abilities = objectRes.effect_entries[1].effect;
				return abilities;
			});
		}
		compileAbilities();
		async function makeObject() {
			const { abilities, name, moves, sprites, types } = pokemonData;
			const pokeName = abilities.map((abilitieName) => {
				const pokeName = abilitieName.ability.name;
				return pokeName;
			});

			const abilitiesDesc = await compileAbilities();
			const formattedData = {
				pokemonAbilitiesName: pokeName,
				pokemonAbilitiesDesc: abilitiesDesc,
				pokemonName: name,
				pokemonMove: moves,
				pokemonImage: sprites.front_default,
				pokemonImageShiny: sprites.front_shiny,
				pokemonType: types,
			};
			setDetails(formattedData);
		}
		makeObject();
	}, [pokemonData]);
};

export default LoadPokemonDetails;
