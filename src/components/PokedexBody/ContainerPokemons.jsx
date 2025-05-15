import { useContext } from 'react';
import { PokemonInfoContext } from '../../context/PokemonData-context';
import { OffSetContext } from '../../context/Offset-context';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

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
		<div className="flex flex-col bg-white rounded-[10px] shadow-inner p-4 h-[300px]">
			<div className="grid grid-cols-2 gap-4 overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-100 flex-1">
				{pokemonInfo.map((pokemonData, key) => (
					<div
						key={key}
						tabIndex={0}
						onClick={() => sendName(pokemonData.pokemonName)}
						onKeyUp={() => sendName(pokemonData.pokemonName)}
						onKeyDown={() => sendName(pokemonData.pokemonName)}
						className="relative bg-white rounded-[10px] p-2 text-center shadow-md border border-[#ddd] cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
					>
					
						<div className="absolute top-[5px] left-[5px] w-[10px] h-[10px] bg-red-700 opacity-70 rounded-full" />

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
						<p className="text-sm font-semibold capitalize text-black">
							{pokemonData.pokemonName}
						</p>
					</div>
				))}

				<div className="mt-2 col-span-2 flex justify-center w-full">
					<Button onClick={loadMore} />
				</div>
			</div>
		</div>
	);
}
