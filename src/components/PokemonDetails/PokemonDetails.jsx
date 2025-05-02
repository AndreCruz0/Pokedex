import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonDetails = () => {
	const [pokemonData, setPokemonData] = useState([]);
	const [filteredPokemonData, setFilteredPokemonData] = useState([]);
	const navigate = useNavigate();
	const { pokemon } = useParams();

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
	}, []);

	useEffect(() => {
		function filterApi() {
			const { abilities, name, moves, sprites, types } = pokemonData;
			if (sprites === undefined || sprites === null) return;
			return {
				pokemonAbilities: abilities,
				pokemonName: name,
				pokemonMove: moves,
				pokemonImage: sprites.front_default,
				pokemonType: types,
			};
		}
		setFilteredPokemonData(filterApi);
	}, [pokemonData]);

	return (
		<div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-2xl shadow-lg max-w-md mx-auto mt-10">
			{filteredPokemonData && (
				<div className="bg-white rounded-2xl shadow-md w-full p-6 text-center">
					<h1 className="text-2xl font-bold capitalize text-gray-800 mb-6">
						{filteredPokemonData.pokemonName}
					</h1>
					<img
						src={filteredPokemonData.pokemonImage}
						alt={filteredPokemonData.pokemonName}
						className="w-48 h-48 mx-auto mb-6"
					/>
					{/* Aqui você pode colocar mais dados depois */}
				</div>
			)}

			<button
				type="submit"
				onClick={() => navigate('/')}
				className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 shadow"
			>
				Voltar
			</button>
		</div>
	);
};

export default PokemonDetails;
