import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsContext } from '../../context/Details-context';
import LoadPokemonDetails from './LoadDetails';

const typeColors = {
	fire: 'bg-red-100 text-red-800',
	water: 'bg-blue-100 text-blue-800',
	grass: 'bg-green-100 text-green-800',
	electric: 'bg-yellow-100 text-yellow-800',
	psychic: 'bg-pink-100 text-pink-800',
	normal: 'bg-gray-200 text-gray-800',
	fighting: 'bg-orange-200 text-orange-800',
	ground: 'bg-yellow-200 text-yellow-900',
	rock: 'bg-yellow-300 text-yellow-900',
	bug: 'bg-lime-100 text-lime-800',
	ghost: 'bg-purple-200 text-purple-800',
	steel: 'bg-gray-300 text-gray-900',
	ice: 'bg-cyan-100 text-cyan-800',
	dragon: 'bg-indigo-200 text-indigo-800',
	dark: 'bg-gray-800 text-white',
	fairy: 'bg-pink-200 text-pink-900',
	poison: 'bg-purple-100 text-purple-800',
	flying: 'bg-indigo-100 text-indigo-800',
};

const PokemonDetails = () => {
	const navigate = useNavigate();
	const { details } = useContext(DetailsContext);
	const [selectedMove, setSelectedMove] = useState(null);
	const [moveDetails, setMoveDetails] = useState(null);

	async function fetchMoveDetails(moveUrl) {
		const res = await fetch(moveUrl);
		const data = await res.json();
		setMoveDetails(data);
		setSelectedMove(data.name);
	}

	return (
		<div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-2xl shadow-lg max-w-md mx-auto mt-10">
			<LoadPokemonDetails />

			{details && (
				<div className="bg-white rounded-2xl shadow-md w-full p-6 text-center">
					<h1 className="text-3xl font-extrabold capitalize text-gray-900 mb-6">
						{details.pokemonName}
					</h1>
					<img
						src={details.pokemonImage}
						alt={details.pokemonName}
						className="w-48 h-48 mx-auto mb-6"
					/>

					<h2 className="text-xl font-bold text-gray-700 mb-2">Habilidades</h2>
					<div className="mb-6">
						{details.pokemonAbilitiesName?.map((ability, key) => (
							<div key={key} className="mb-3 text-left">
								<p className="font-semibold text-gray-800 capitalize">
									{ability}
								</p>
								<p className="text-sm text-gray-600">
									{details.pokemonAbilitiesDesc?.[key]}
								</p>
							</div>
						))}
					</div>

					<h2 className="text-xl font-bold text-gray-700 mb-2">Movimentos</h2>
					<div className="flex flex-wrap justify-center gap-2 mb-6">
						{details.pokemonMove?.slice(0, 10).map((move, key) => (
							<span
								key={key}
								className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full capitalize cursor-pointer hover:bg-gray-300"
								onClick={() => fetchMoveDetails(move.move.url)}
								onKeyDown={() => fetchMoveDetails(move.move.url)}
							>
								{move.move.name}
							</span>
						))}
					</div>

					<button
						type="button"
						className="mb-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
						onClick={() => navigate('/pokemon/sexo')}
					>
						Ver Mais Movimentos
					</button>

					<h2 className="text-xl font-bold text-gray-700 mb-2">Tipo</h2>
					<div className="flex flex-wrap justify-center gap-2">
						{details.pokemonType?.map((typeObj, key) => {
							const typeName = typeObj.type.name;
							const colorClass =
								typeColors[typeName] || 'bg-gray-300 text-gray-900';
							return (
								<span
									key={key}
									className={`text-sm font-semibold px-4 py-1 rounded-full capitalize shadow ${colorClass}`}
								>
									{typeName}
								</span>
							);
						})}
					</div>
				</div>
			)}

			<button
				type="button"
				onClick={() => navigate('/')}
				className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 shadow"
			>
				Voltar
			</button>

			{/* MODAL */}
			{selectedMove && moveDetails && (
				<div
					className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
					onClick={() => setSelectedMove(null)} 
          onKeyDown={()=> setSelectedMove(null)}
				>
					<div
						className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative"
						onClick={(e) => e.stopPropagation()} 
						onKeyDown={(e) => e.stopPropagation()} 
					>
						<span
							onClick={() => setSelectedMove(null)}
							onKeyDown={() => setSelectedMove(null)}
							className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer"
						>
							✕
						</span>
						<h2 className="text-2xl font-bold capitalize mb-4">
							{moveDetails.name}
						</h2>
						<p className="text-gray-700 text-sm">
							{moveDetails.effect_entries?.[0]?.effect ||
								'Sem descrição disponível.'}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default PokemonDetails;
