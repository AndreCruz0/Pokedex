import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadPokemon from '../components/LoadPokemon/LoadPokemon';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import PokemonDetails2 from '../components/PokemonDetails/PokemonDetails2';
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
