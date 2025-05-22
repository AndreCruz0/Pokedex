import { useEffect, useRef, useState, useContext } from 'react';
import { PokemonInfoContext } from '../context/PokemonDataContext';
import { OffSetContext } from '../context/OffsetContext';
import { fetchPokemonList } from '../../services/api/pokemonApi'; // Import the new API function

// Rename to follow hook naming convention
const useLoadPokedex = () => { 
	// No need for pokemonData, filteredPokemonData, storedPokemonData if setPokemonInfo handles accumulation
	const { offSet } = useContext(OffSetContext);
	const { setPokemonInfo } = useContext(PokemonInfoContext);
	const [loading, setLoading] = useState(false); // Add loading state
	const [error, setError] = useState(null); // Add error state

	const refCounter = useRef(false); // This counter logic might need re-evaluation

	useEffect(() => {
		// Skip initial fetch if offset is 0 and we've fetched before (refCounter.current)
		// This logic might need to be adjusted based on desired behavior (e.g. manual refresh)
		if (offSet === 0 && refCounter.current && !setPokemonInfo) return; 

		const loadPokemons = async () => {
			setLoading(true);
			setError(null);
			try {
				// The fetchPokemonList already fetches details for each Pokemon in the list
				const newPokemons = await fetchPokemonList(offSet, 10);
				
				// Format data as expected by components
				const formattedPokemons = newPokemons.map((pokemon) => {
					const { name, sprites, abilities, moves, types } = pokemon;
					return {
						pokemonAbilities: abilities,
						pokemonName: name,
						pokemonMove: moves,
						pokemonImage: sprites.front_default,
						pokemonType: types,
					};
				});

				// Update context. Assuming setPokemonInfo can handle appending.
				// If setPokemonInfo replaces, then we need to manage accumulation here or in context.
				setPokemonInfo((prev) => [...prev, ...formattedPokemons]); 
				refCounter.current = true; // Mark that a fetch has occurred
			} catch (err) {
				console.error("Failed to load Pokemon list:", err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		loadPokemons();
	}, [offSet, setPokemonInfo]); // Add setPokemonInfo to dependencies if its identity can change

	// The hook doesn't need to return anything if it only has side effects (updating context)
	// However, it might be useful to return loading/error states for UI feedback
	return { loading, error };
};

export default useLoadPokedex;
