import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // useNavigate was unused
import { DetailsContext } from '../context/DetailsContext';
import { fetchPokemonDetails } from '../../services/api/pokemonApi'; // Import the new API function

const LoadPokemonDetails = () => {
	const [pokemonData, setPokemonData] = useState(null); // Initialize with null or undefined
	const { pokemon: pokemonName } = useParams(); // pokemonName from URL
	const { setDetails } = useContext(DetailsContext); // details from context was unused directly in this hook
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!pokemonName) return; // Do nothing if pokemonName is not available

		const loadDetails = async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await fetchPokemonDetails(pokemonName);
				setPokemonData(data); // Store raw data
			} catch (err) {
				console.error("Failed to load Pokemon details:", err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		loadDetails();
	}, [pokemonName]); // Depend on pokemonName

	useEffect(() => {
		// This effect processes pokemonData when it changes
		if (!pokemonData || !pokemonData.sprites) return;

		// The logic for fetching abilities details can also be moved to pokemonApi.js if complex
		// For now, keeping it here but simplifying the processing
		const processPokemonData = async () => {
			setLoading(true); // Potentially set loading for processing phase
			setError(null);
			try {
				const abilityDetailsPromises = pokemonData.abilities.map(async (abilityEntry) => {
					const abilityRes = await fetch(abilityEntry.ability.url);
					if (!abilityRes.ok) {
						console.error(`Failed to fetch ability: ${abilityEntry.ability.name}`);
						return { name: abilityEntry.ability.name, effect: 'Not available' };
					}
					const abilityData = await abilityRes.json();
					// Find the English effect entry, or default to the first one
					const effectEntry = abilityData.effect_entries.find(e => e.language.name === 'en') || abilityData.effect_entries[0];
					return {
						name: abilityEntry.ability.name,
						effect: effectEntry ? effectEntry.effect : 'Effect description not found.',
					};
				});

				const resolvedAbilities = await Promise.all(abilityDetailsPromises);

				const formattedData = {
					pokemonAbilitiesName: resolvedAbilities.map(a => a.name),
					pokemonAbilitiesDesc: resolvedAbilities.map(a => a.effect),
					pokemonName: pokemonData.name,
					pokemonMove: pokemonData.moves, // Assuming moves structure is fine as is
					pokemonImage: pokemonData.sprites.front_default,
					pokemonImageShiny: pokemonData.sprites.front_shiny,
					pokemonType: pokemonData.types, // Assuming types structure is fine
				};
				setDetails(formattedData);
			} catch (err) {
				console.error("Error processing Pokemon data:", err);
				setError(err); // Set error for processing phase
			} finally {
				setLoading(false); // Clear loading for processing phase
			}
		};

		processPokemonData();
	}, [pokemonData, setDetails]); // Depend on pokemonData and setDetails

	// This hook primarily has side effects (setting context).
	// It could return loading/error for UI, if needed by the component using it.
	// return { loading, error }; // Uncomment if component needs loading/error state
};

export default LoadPokemonDetails;
