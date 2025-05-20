import { useState, useEffect, useContext } from 'react';
import pokemonInfo from '../assets/pokemonInfo.json';
import LeftPanel from '../components/LeftPainel.jsx/leftPainel';
import RightPanel from '../components/RightPanel.jsx/RightPainel';
import { InputValueContext } from '../context/InputValue-context';
import { ThemeContext } from '../context/Theme-context';
import ButtonTheme from '../components/ButtonTheme/ButtonTheme';

export default function PokedexBody() {
	const [filteredPokemons, setFilteredPokemons] = useState([]);
	const [isHidden, setIsHidden] = useState(true);
	const { inputValue } = useContext(InputValueContext);
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const filtered = pokemonInfo.filter((pokemon) =>
				inputValue.length > 2
					? pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
					: false,
			);
			setFilteredPokemons(filtered);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [inputValue]);

	return (
		<main
			className={`flex sm:flex-row flex-col justify-center items-center gap-2 p-4 min-h-screen sm:items-start
      ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-[#f3f3f3] text-black'}`}
		>
			<ButtonTheme />

			<LeftPanel setIsHidden={setIsHidden} isHidden={isHidden} />
			<RightPanel isHidden={isHidden} filteredPokemons={filteredPokemons} />
		</main>
	);
}
