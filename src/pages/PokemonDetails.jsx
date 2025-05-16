import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsContext } from '../context/Details-context';
import { PokemonHeader } from '../components/PokemonDetails/PokemonHeader';
import LoadDetails from '../services/LoadDetails';
import { PokemonAbilities } from '../components/PokemonDetails/PokemonAbilities';
import { PokemonMoves } from '../components/PokemonDetails/PokemonMoves';
import { PokemonTypes } from '../components/PokemonDetails/PokemonTypes';
import { MoveModal } from '../components/PokemonDetails/MoveModal';
import colors from "../assets/colors.json"

const PokemonDetails = () => {
	const navigate = useNavigate();
	const { details } = useContext(DetailsContext);
	const [selectedMove, setSelectedMove] = useState(null);
	const [moveDetails, setMoveDetails] = useState(null);
	const typeColors = colors
	const fetchMoveDetails = async (moveUrl) => {
		const res = await fetch(moveUrl);
		const data = await res.json();
		setMoveDetails(data);
		setSelectedMove(data.name);
	};
	const handleCloseModal = () => {
		setSelectedMove(null);
		setMoveDetails(null);
	};
	const handleKeyDown = (e) => {
		if (e.key === 'Escape') {
			handleCloseModal();
		}
	};
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] text-white">	
			<div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-2xl shadow-lg max-w-md mx-auto mt-10 ">
			{details && (
				<div className="bg-white rounded-2xl shadow-md w-full p-6 text-center">
					<PokemonHeader
						name={details.pokemonName}
						image={details.pokemonImage}
						imageShiny={details.pokemonImageShiny}
					/>
					<LoadDetails />
					<PokemonAbilities
						abilities={details.pokemonAbilitiesName}
						abilitiesDesc={details.pokemonAbilitiesDesc}
					/>
					<h2 className="text-xl font-bold text-gray-700 mb-2">Movimentos</h2>
					<PokemonMoves
						moves={details.pokemonMove}
						onMoveClick={fetchMoveDetails}
					/>
					<h2 className="text-xl font-bold text-gray-700 mb-2">Tipo</h2>
					<PokemonTypes types={details.pokemonType} typeColors={typeColors} />

					<button
						type="button"
						onClick={() => navigate('/')}
						className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 shadow"
					>
						Voltar
					</button>
				</div>
			)}
			{selectedMove && moveDetails && (
				<MoveModal
					moveDetails={moveDetails}
					onClose={handleCloseModal}
					handleKeyDown={handleKeyDown}
				/>
			)}
		</div>
	</main>

	);
};

export default PokemonDetails;
