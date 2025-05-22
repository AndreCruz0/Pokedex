import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageWithSkeleton from '../Skeleton/ImageWithSkeleton';

export const PokemonHeader = ({ name, image, imageShiny }) => {
	const [showShiny, setShowShiny] = useState(false);

	return (
		<div className="flex flex-col items-center w-full max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white">
			<h1 className="text-4xl font-bold capitalize mb-6 drop-shadow-lg">
				{name}
			</h1>

			<div className="flex gap-2 mb-6 bg-white/20 backdrop-blur-sm p-1 rounded-full">
				<button
					type="button"
					onClick={() => setShowShiny(false)}
					className={`px-4 py-1 rounded-full font-semibold text-sm transition-all ${
						!showShiny
							? 'bg-white text-red-600 shadow-md'
							: 'text-white hover:bg-white/10'
					}`}
				>
					Normal
				</button>
				<button
					onClick={() => setShowShiny(true)}
					type="button"
					className={`px-4 py-1 rounded-full font-semibold text-sm transition-all ${
						showShiny
							? 'bg-yellow-300 text-yellow-900 shadow-md'
							: 'text-white hover:bg-white/10'
					}`}
				>
					Shiny
				</button>
			</div>

			<ImageWithSkeleton
				src={showShiny ? imageShiny : image}
				alt={name}
				className="w-52 h-52 object-contain transition-transform duration-300 hover:scale-105"
				width={250}
			/>
		</div>
	);
};

PokemonHeader.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageShiny: PropTypes.string.isRequired,
};
