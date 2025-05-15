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
		<section className="bg-red-600 min-h-[40rem] p-6 rounded-r-4xl border-2 border-red-800  flex flex-col relative w-[26rem] shadow-md">
			<div className="bg-white h-52 w-full mb-4 rounded-md overflow-y-auto p-2">
				{inputValue && filteredPokemons.length > 0 ? (
					<div className="grid grid-cols-2 gap-4">
						{filteredPokemons.map((pokemon) => (
							<div
								key={pokemon.name}
								className="border grid justify-center rounded p-2 text-center cursor-pointer hover:bg-gray-100"
								onClick={() => navigate(`/pokemon/${pokemon.name}`)}
								onKeyDown={() => navigate(`/pokemon/${pokemon.name}`)}
							>
								<img src={pokemon.image} alt={pokemon.name} className="w-20 h-20 mx-auto" />
								<h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
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
					<p className="text-center text-gray-500">
						Nenhum Pokémon encontrado com "{inputValue}"
					</p>
				) : null}
			</div>

			<div className="flex gap-1 mb-4 justify-end mr-6">
				<div className="bg-black h-2 w-6 rounded-full" />
				<div className="bg-black h-2 w-6 rounded-full" />
			</div>

			<div className="flex gap-2 mb-4">
				<div className="bg-white h-8 w-12 rounded" />
				<div className="bg-white h-8 w-12 rounded" />
			</div>

			<div className="mb-4">
				<input
					type="text"
					placeholder="Digite ao menos 3 letras do nome do Pokémon"
					onChange={(e) => setInputValue(e.target.value)}
					className="bg-gray-200 w-full h-8 px-2 text-sm rounded-sm outline-none placeholder:text-gray-600"
				/>
			</div>

			<div className="bg-yellow-400 h-6 w-6 rounded-full absolute bottom-20 right-8" />

			<div className="flex gap-4 mt-auto">
				<div className="bg-green-900 h-10 w-20 rounded" />
				<div className="bg-green-900 h-10 w-20 rounded" />
			</div>
		</section>
	);
}
