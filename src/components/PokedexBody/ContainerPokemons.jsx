import { useContext } from 'react';
import { PokemonInfoContext } from '../../context/PokemonData-context';

import { OffSetContext } from '../../context/Offset-context';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

export function ContainerPokemons() {
	const navigate = useNavigate();
	const { offSet, setOffSet } = useContext(OffSetContext);
	function sendName(pokemonname) {
		navigate(`pokemon/${pokemonname}`);
	}
	function loadMore() {
		const incrementOffSet = offSet + 10;
		setOffSet(incrementOffSet);
	}
	const { pokemonInfo } = useContext(PokemonInfoContext);
		
	
	return (
		<div className="flex flex-col bg-white rounded-xl shadow-inner p-2 h-[300px]">
	
	<div className="grid grid-cols-2 gap-4 overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-100 flex-1">
		{pokemonInfo.map((pokemonData, key) => (
			<div
				key={key}
				onClick={() => sendName(pokemonData.pokemonName)}
				onKeyUp={() => sendName(pokemonData.pokemonName)}
				onKeyDown={() => sendName(pokemonData.pokemonName)}
				className="flex flex-col items-center bg-[#282828] p-3 rounded-lg shadow cursor-pointer text-white border-4 border-white"
			>
				{pokemonData.pokemonImage ? (
					<img
						src={pokemonData.pokemonImage}
						alt={pokemonData.pokemonName}
						className="w-full h-24 mb-2 object-contain transition-transform hover:scale-105"
					/>
				) : (
					<div className="w-24 h-24 bg-gray-200 flex items-center justify-center mb-2 text-sm text-gray-500">
						No Image
					</div>
				)}
				<p className="text-center text-sm font-semibold capitalize">
					{pokemonData.pokemonName}
				</p>
			</div>
			
		))}
		

	<div className="mt-2 flex justify-center w-57">
		<Button onClick={loadMore} />
	</div>
	</div>

</div>

	);
}
