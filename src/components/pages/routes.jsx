import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadPokemon from '../LoadPokemon/LoadPokemon';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoadPokemon />} />
				<Route path="/pokemon/:pokemon" element={<PokemonDetails />} />
			</Routes>
		</BrowserRouter>
	);
};
