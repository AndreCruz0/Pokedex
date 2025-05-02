import { useContext } from 'react';
import { PokemonInfoContext } from '../../context/PokemonData-context';
import { Button } from '../Button/Button';
import { OffSetContext } from '../../context/Offset-context';
import { useNavigate } from 'react-router-dom';
export default function ContainerPokemons() {
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
		<div className="grid grid-cols-2 gap-4 overflow-y-scroll h-[300px] p-2 bg-white rounded-xl shadow-inner  justify-center items-center ">
			{pokemonInfo.map((pokemonData, key) => (
				<div
					key={key}
					onClick={() => sendName(pokemonData.pokemonName)}
					onKeyUp={() => sendName(pokemonData.pokemonName)}
					onKeyDown={() => sendName(pokemonData.pokemonName)}
					className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow cursor-pointer hover:scale-105 transition-transform"
				>
					{pokemonData.pokemonImage ? (
						<img
							src={pokemonData.pokemonImage}
							alt={pokemonData.pokemonName}
							className="w-24 h-24 mb-2"
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
