import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsContext } from '../context/DetailsContext';
import { ThemeContext } from '../context/ThemeContext';
import { PokemonHeader } from '../components/PokemonDetails/PokemonHeader';
import LoadDetails from '../hooks/useLoadDetails';
import { PokemonAbilities } from '../components/PokemonDetails/PokemonAbilities';
import { PokemonMoves } from '../components/PokemonDetails/PokemonMoves';
import { PokemonTypes } from '../components/PokemonDetails/PokemonTypes';
import { MoveModal } from '../components/PokemonDetails/MoveModal';
import colors from '../assets/colors.json';
import ButtonTheme from '../components/ButtonTheme/ButtonTheme';
import PokedexShell from '../components/PokemonDetails/PokedexShell';

const PokemonDetails = () => {
	const navigate = useNavigate();
	const { details } = useContext(DetailsContext);
	const { theme } = useContext(ThemeContext);
	const [selectedMove, setSelectedMove] = useState(null);
	const [moveDetails, setMoveDetails] = useState(null);

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
		if (e.key === 'Escape') handleCloseModal();
	};

	const getMoveName = () => {
		return details.pokemonMove.map((move) => move.move.name);
	};

	return (
		<main
			className={`flex flex-col items-center justify-center min-h-screen p-4 ${
				theme === 'dark'
					? 'bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] text-white'
					: 'bg-gradient-to-br from-[#f2f2f2] via-[#f9f9f9] to-[#fff] text-black'
			}`}
		>
			<ButtonTheme />
			<PokedexShell >
				
				{details && (
					<div className="w-full space-y-4">
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
						<h2 className="text-xl text-gray-800 font-bold">Movimentos</h2>
						<PokemonMoves
							moves={details.pokemonMove}
							onMoveClick={fetchMoveDetails}
						/>
						<h2 className="text-xl font-bold  text-gray-800 ">Tipo</h2>
						<PokemonTypes types={details.pokemonType} typeColors={colors} />

						<button
							type="button"
							onClick={() => navigate('/')}
							className="mt-4 w-full px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700"
						>
							Voltar
						</button>
					</div>
				)}

				{selectedMove && moveDetails && (
					<MoveModal
						moveName={getMoveName}
						moveDetails={moveDetails}
						onClose={handleCloseModal}
						handleKeyDown={handleKeyDown}
					/>
				)}
			</PokedexShell>
		</main>
	);
};

export default PokemonDetails;
