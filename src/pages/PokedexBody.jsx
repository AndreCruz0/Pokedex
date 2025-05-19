import { useState, useEffect } from 'react';
import pokemonInfo from '../assets/pokemonInfo.json';
import LeftPanel from '../components/LeftPainel.jsx/leftPainel';
import RightPanel from '../components/RightPanel.jsx/RightPainel';
import { useContext } from 'react';
import { InputValueContext } from '../context/InputValue-context';
export default function PokedexBody() {
	const [filteredPokemons, setFilteredPokemons] = useState([]);
	const [isHidden, setIsHidden] = useState(true);
	const { inputValue } = useContext(InputValueContext);
	useEffect(() => {
		setTimeout(() => {
			const filtered = pokemonInfo.filter((pokemon) =>
				inputValue.length > 2
					? pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
					: false,
			);
			setFilteredPokemons(filtered);
		}, 1000);
	}, [inputValue]);

	return (
		<main className="flex sm:flex-row flex-col justify-center items-center gap-2 p-4 min-h-screen sm:items-start   bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] text-white  ">
			<LeftPanel setIsHidden={setIsHidden} isHidden={isHidden} />

			<RightPanel
				isHidden={isHidden}
				filteredPokemons={filteredPokemons}
			/>
		</main>
	);
}
