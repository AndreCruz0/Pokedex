import { useState } from 'react';
import LoadPokemon from '../services/LoadPokedex';
import PokedexBackground from '../components/PokedexBody/PokedexBackGround';
import pokemonInfo from '../assets/pokemonInfo.json';

export default function PokedexBody() {
	const [inputValue, setInputValue] = useState('');

	const filteredPokemons = pokemonInfo.filter((pokemon) => {
		if (inputValue.length > 2) {
			return pokemon.name.toLowerCase().includes(inputValue.toLowerCase());
		}
	});
	console.log(inputValue);
	return (
		<main className="flex justify-center items-start gap-2 p-4">
			{/* Parte esquerda do Pokédex */}
			<section className="bg-red-700 min-h-[40rem] max-w-[24rem] p-10 rounded-l-4xl shadow-md">
				<PokedexBackground />
				<LoadPokemon />
			</section>

			{/* Dobradiça central */}
			<div className="w-4 bg-gradient-to-b from-red-800 via-red-600 to-red-800 rounded-full shadow-inner" />

			{/* Parte direita do Pokédex */}
			<section className="bg-red-600 min-h-[40rem] p-6 rounded-r-4xl border-2 border-red-800 flex flex-col relative w-[26rem] shadow-md">
				{/* Tela principal */}
				<div className="bg-white h-52 w-full mb-4 rounded-md overflow-y-auto p-2">
					{inputValue && filteredPokemons.length > 0 ? (
						<div className="grid grid-cols-2 gap-4">
							{filteredPokemons.map((pokemon) => (
								<div
									key={pokemon.name}
									className="border grid justify-center rounded p-2 text-center"
								>
									<img
										src={pokemon.image}
										alt={pokemon.name}
										className="w-20 h-20 mx-auto"
									/>
									<h2 className="text-lg font-bold capitalize">
										{pokemon.name}
									</h2>
									<p className="text-sm text-gray-600">
										{pokemon.types.join(', ')}
									</p>
								</div>
							))}
						</div>
					) : inputValue ? (
						<p className="text-center text-gray-500">
							Nenhum Pokémon encontrado com "{inputValue}"
						</p>
					) : null}
				</div>

				{/* Botões pequenos pretos */}
				<div className="flex gap-1 mb-4 justify-end mr-6">
					<div className="bg-black h-2 w-6 rounded-full" />
					<div className="bg-black h-2 w-6 rounded-full" />
				</div>

				{/* Botões brancos */}
				<div className="flex gap-2 mb-4">
					<div className="bg-white h-8 w-12 rounded" />
					<div className="bg-white h-8 w-12 rounded" />
				</div>

				{/* Campo de busca */}
				<div className="mb-4">
					<input
						type="text"
						placeholder="Digite ao menos 3 letras do nome do pokemon"
						onChange={(e) => setInputValue(e.target.value)}
						className="bg-gray-200 w-full h-8 px-2 text-sm rounded-sm outline-none placeholder:text-gray-600"
					/>
				</div>

				{/* Botão amarelo */}
				<div className="bg-yellow-400 h-6 w-6 rounded-full absolute bottom-20 right-8" />

				{/* Botões inferiores verdes */}
				<div className="flex gap-4 mt-auto">
					<div className="bg-green-900 h-10 w-20 rounded" />
					<div className="bg-green-900 h-10 w-20 rounded" />
				</div>
			</section>
		</main>
	);
}
