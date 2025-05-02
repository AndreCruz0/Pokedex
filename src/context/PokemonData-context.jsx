import { createContext, useState } from 'react';
export const PokemonInfoContext = createContext();

export const PokemonDataProvider = ({ children }) => {
	const [pokemonInfo, setPokemonInfo] = useState([]);

	return (
		<PokemonInfoContext.Provider value={{ pokemonInfo, setPokemonInfo }}>
			{children}
		</PokemonInfoContext.Provider>
	);
};
