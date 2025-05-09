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
		<div className="grid grid-cols-2 gap-4 overflow-y-scroll h-[300px] p-2 bg-white rounded-xl shadow-inner scrollbar scrollbar-thumb-red-700 scrollbar-track-gray-50 scrollbar-w-3   ">
			{pokemonInfo.map((pokemonData, key) => (
				<div
					key={key}
					onClick={() => sendName(pokemonData.pokemonName)}
					onKeyUp={() => sendName(pokemonData.pokemonName)}
					onKeyDown={() => sendName(pokemonData.pokemonName)}
					className="flex flex-col items-center bg-[#282828] p-3 rounded-lg shadow cursor-pointer   text-white border-4 border-white-500"
				>
					{pokemonData.pokemonImage ? (
						<img 
							src={pokemonData.pokemonImage}
							alt={pokemonData.pokemonName}
							className="w-full h-24 mb-2 object-cover transition-transform hover:scale-105  "
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
			<div className=" rounded-4xl flex justify-center w-85">
				<Button onClick={loadMore} />
			</div>
		</div>
	);
}
