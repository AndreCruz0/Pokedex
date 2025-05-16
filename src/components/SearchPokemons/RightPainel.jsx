import React from 'react';
import ImageWithSkeleton from '../Skeleton/ImageWithSkeleton';

export default function RightPanel({
	isHidden,
	filteredPokemons,
	inputValue,
	setInputValue,
	navigate,
	typeColors,
}) {
	if (isHidden) return null;

	return (
		<section className="bgGradient min-h-[40rem] p-6 rounded-r-4xl flex flex-col relative w-[26rem] shadow-xl border-2 border-[#111] flip-in-right">
			{/* Highlight effect */}
			<div className="absolute top-2 left-8 right-8 h-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded " />

			{/* Cylindrical Hinge effect */}
			<div className="absolute -left-8 top-0 h-full w-8 flex items-center">
				<div className="relative h-[95%] w-8 bgGradient rounded-l-full overflow-hidden">
					<div className="absolute top-0 w-full h-5 bgGradient rounded-b-full" />
					<div className="absolute bottom-0 w-full h-5 bgGradient rounded-t-full" />
					<div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-red-900/40 to-transparent" />
					<div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-red-400/30 to-transparent" />
				</div>
			</div>

			{/* Main display */}
			<div className="bg-black h-16 w-full mb-6 rounded-md border-2 border-gray-900 p-1 shadow-inner">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Pesquisar Pokémon..."
					className="w-full h-full bg-gray-900 text-green-400 px-3 focus:outline-none font-mono text-lg rounded-sm"
				/>
			</div>

			{/* Results display */}
			<div className="bg-[#f8f8f8] h-60 w-full mb-6 rounded-xl overflow-y-auto p-4 shadow-inner border border-gray-300 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
				{inputValue && filteredPokemons.length > 0 ? (
					<div className="grid grid-cols-2 gap-4">
						{filteredPokemons.map((pokemon) => (
							<div
								key={pokemon.name}
								className="relative bg-[#f5f5f5] rounded-xl p-4 shadow-md border border-gray-300 cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-lg"
								onClick={() => navigate(`/pokemon/${pokemon.name}`)}
								onKeyDown={(e) => e.key === 'Enter' && navigate(`/pokemon/${pokemon.name}`)}
							>
								{/* LED type indicator */}
								<div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full shadow-sm border border-white" />

								<ImageWithSkeleton
									src={pokemon.image}
									alt={pokemon.name}
									className="w-20 h-20 mx-auto"
									height={20}
									width={20}
								/>
								<h2 className="text-md font-semibold mt-2 capitalize text-gray-800">{pokemon.name}</h2>
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
						))}
					</div>
				) : inputValue ? (
					<p className="text-center text-gray-500 py-4">
						Nenhum Pokémon encontrado com "{inputValue}"
					</p>
				) : null}
			</div>

			{/* Sound indicators */}
			<div className="flex gap-2 mb-6 justify-end mr-6">
				<div className="bg-black h-2 w-6 rounded-full shadow-sm" />
				<div className="bg-black h-2 w-6 rounded-full shadow-sm" />
			</div>

			{/* Control buttons */}
			<div className="flex gap-4 mb-8 ml-2">
				<div className="bg-white h-10 w-16 rounded shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors " />
				<div className="bg-white h-10 w-16 rounded shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors " />
			</div>

			{/* Yellow indicator button */}
			<div className="bg-yellow-400 h-8 w-8 rounded-full absolute bottom-24 right-10 border-2 border-yellow-500 shadow-md hover:bg-yellow-300 transition-colors " />

			{/* Function pads at bottom */}
			<div className="flex gap-4 mt-auto">
				<div className="bg-green-900 h-12 w-24 rounded border border-green-950 shadow-md hover:bg-green-800 transition-colors " />
				<div className="bg-green-900 h-12 w-24 rounded border border-green-950 shadow-md hover:bg-green-800 transition-colors " />
			</div>
		</section>
	);
}
