import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsContext } from '../context/Details-context';
import { PokemonHeader } from '../components/PokemonDetails/PokemonHeader'; 
import LoadDetails from '../components/PokemonDetails/LoadDetails';  
import { PokemonAbilities } from '../components/PokemonDetails/PokemonAbilities'; 
import { PokemonMoves } from '../components/PokemonDetails/PokemonMoves'; 
import { PokemonTypes } from '../components/PokemonDetails/PokemonTypes'; 
import { MoveModal } from '../components/PokemonDetails/MoveModal';

const PokemonDetails = () => {
	const navigate = useNavigate();
	const { details } = useContext(DetailsContext);
	const [selectedMove, setSelectedMove] = useState(null);
	const [moveDetails, setMoveDetails] = useState(null);
	console.log(details);
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
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
	return (
		<div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-2xl shadow-lg max-w-md mx-auto mt-10">
			{details && (
				<div className="bg-white rounded-2xl shadow-md w-full p-6 text-center">
					<PokemonHeader
						name={details.pokemonName}
						image={details.pokemonImage}
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
					<PokemonTypes types={details.pokemonType} typeColors={typeColors}  />

					<button
						type="button"
						onClick={() => navigate('/')}
						className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 shadow"
					>
						Voltar
					</button>
				</div>
			)}

			{/* Modal for Move Details */}
			{selectedMove && moveDetails && (
				<MoveModal moveDetails={moveDetails} onClose={handleCloseModal}  handleKeyDown={handleKeyDown} />
        
			)}
		</div>
	);
};

export default PokemonDetails;
