import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadPokemon from '../pages/LoadPokedex';
import PokemonDetails from '../pages/PokemonDetails';
import PokemonDetails2 from '../pages/PokemonDetails';
export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoadPokemon />} />
				<Route path="/pokemon/:pokemon" element={<PokemonDetails2 />} />
			</Routes>
		</BrowserRouter>
	);
};
