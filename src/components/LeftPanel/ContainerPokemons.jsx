import { useContext } from 'react';
import { PokemonInfoContext } from '../../context/PokemonDataContext';
import { OffSetContext } from '../../context/OffsetContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { PokemonCard } from './PokemonCard'; // Import the new PokemonCard component

export function ContainerPokemons() {
	const navigate = useNavigate();
	const { offSet, setOffSet } = useContext(OffSetContext);
	const { pokemonInfo } = useContext(PokemonInfoContext);

	function sendName(pokemonname) {
		navigate(`pokemon/${pokemonname}`);
	}

	function loadMore() {
		setOffSet(offSet + 10);
	}

	return (
		<div className="w-full max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] flex flex-col bg-[#f0eaea] rounded-[10px] shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] p-4 min-h-[200px] max-h-[70vh]">
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-100 flex-1 ">
				{pokemonInfo.map((pokemonData) => (
					<PokemonCard
						key={pokemonData.pokemonName} // Use a unique key, like pokemonName
						pokemonName={pokemonData.pokemonName}
						pokemonImage={pokemonData.pokemonImage}
						onClick={() => sendName(pokemonData.pokemonName)}
					/>
				))}

				<div className="mt-2 col-span-1 md:col-span-2 flex justify-center h-10">
					<Button onClick={loadMore}>Carregar Mais</Button>
				</div>
			</div>
		</div>
	);
}
