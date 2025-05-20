import { useContext } from 'react';
import { PokemonInfoContext } from '../../context/PokemonData-context';
import { OffSetContext } from '../../context/Offset-context';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import ImageWithSkeleton from '../Skeleton/ImageWithSkeleton';

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
			{pokemonInfo.map((pokemonData, key) => (
				<div
					key={key}
					tabIndex={0}
					onClick={() => sendName(pokemonData.pokemonName)}
					onKeyUp={() => sendName(pokemonData.pokemonName)}
					onKeyDown={() => sendName(pokemonData.pokemonName)}
					className="relative bg-white min-h-[150px] rounded-[10px] p-2 text-center shadow-md border border-[#ddd] cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-red-200  flex flex-col items-center justify-center"	
				>
					<div className="absolute top-[5px] left-[5px] w-[10px] h-[10px] bg-red-700 opacity-70 rounded-full" />

					<ImageWithSkeleton
						src={pokemonData.pokemonImage}
						alt={pokemonData.pokemonName}
						width="96"
						height="96"
						className="w-full mb-2 object-contain transition-transform hover:scale-105 rounded"
					/>

					<p className="text-sm font-semibold capitalize text-black">
						{pokemonData.pokemonName}
					</p>
				</div>
			))}

			<div className="mt-2 col-span-1 md:col-span-2 flex justify-center h-10">
				<Button onClick={loadMore} />
			</div>
		</div>
	</div>
);


}
