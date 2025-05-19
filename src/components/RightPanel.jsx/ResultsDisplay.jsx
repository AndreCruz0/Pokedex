import PokemonCard from './PokemonCard';
import { useContext } from 'react';
import { InputValueContext } from '../../context/InputValue-context';

export default function ResultsDisplay({ filteredPokemons }) {
	const { inputValue } = useContext(InputValueContext);
	if (!inputValue) return null;

	if (filteredPokemons.length === 0) {
		return (
			<div className="bg-[#f8f8f8] h-60 w-full mb-6 rounded-xl overflow-y-auto p-4 shadow-inner border border-gray-300 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
				<p className="text-center text-gray-500 py-4">
					Nenhum Pokémon encontrado com "{inputValue}"
				</p>
			</div>
		);
	}

	return (
		<div className="bg-[#f8f8f8] h-60 w-full mb-6 rounded-xl overflow-y-auto p-4 shadow-inner border border-gray-300 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
			<div className="grid grid-cols-2 gap-4">
				{filteredPokemons.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
}
