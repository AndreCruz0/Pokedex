import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageWithSkeleton from '../Skeleton/ImageWithSkeleton';
import colors from '../../assets/colors.json';

export default function PokemonCard({ pokemon }) {
	const navigate = useNavigate();
	const typeColors = colors;
	return (
		<div
			tabIndex={0}
			key={pokemon.name}
			className="relative bg-[#f5f5f5] rounded-xl p-4 shadow-md border border-gray-300 cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-lg"
			onClick={() => navigate(`/pokemon/${pokemon.name}`)}
			onKeyDown={() => navigate(`/pokemon/${pokemon.name}`)}
		>
			<div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full shadow-sm border border-white" />
			<ImageWithSkeleton
				src={pokemon.image}
				alt={pokemon.name}
				className="w-20 h-20 mx-auto"
				width={70}
			/>
			<h2 className="text-md font-semibold mt-2 capitalize text-gray-800">
				{pokemon.name}
			</h2>
			<div className="flex flex-wrap justify-center gap-1 mt-1">
				{pokemon.types.map((type) => (
					<span
						key={type}
						className={`text-xs px-2 py-1 rounded-full font-semibold ${
							typeColors[type] || 'bg-gray-300 text-gray-700'
						}`}
					>
						{type}
					</span>
				))}
			</div>
		</div>
	);
}
