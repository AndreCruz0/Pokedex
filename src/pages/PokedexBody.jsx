import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pokemonInfo from '../assets/pokemonInfo.json';
import colors from '../assets/colors.json';
import LeftPanel from '../components/LeftPainel.jsx/leftPainel';
import RightPanel from '../components/RightPanel.jsx/RightPainel';

import { useContext } from 'react';
import { SearchContext } from '../context/Search-context';

export default function PokedexBody() {
	const [inputValue, setInputValue] = useState('');
	const [filteredPokemons, setFilteredPokemons] = useState([]);
	const [isHidden, setIsHidden] = useState(true);
	const navigate = useNavigate();
	const { search } = useContext(SearchContext);

	useEffect(() => {
		setTimeout(() => {
			const filtered = pokemonInfo.filter((pokemon) =>
				search.length > 2
					? pokemon.name.toLowerCase().includes(search.toLowerCase())
					: false,
			);
			setFilteredPokemons(filtered);
		}, 1000);
	}, [search]);

	return (
		<main className="flex sm:flex-row flex-col justify-center items-center gap-2 p-4 min-h-screen sm:items-start   bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] text-white  ">
			<LeftPanel setIsHidden={setIsHidden} isHidden={isHidden} />

			<RightPanel
				isHidden={isHidden}
				filteredPokemons={filteredPokemons}
				inputValue={search}
				setInputValue={setInputValue}
				navigate={navigate}
				typeColors={colors}
			/>
		</main>
	);
}
