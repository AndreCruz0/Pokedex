import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetails2 from '../pages/PokemonDetails';
import PokedexBody from '../pages/PokedexBody';
export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PokedexBody />} />
				<Route path="/pokemon/:pokemon" element={<PokemonDetails2 />} />
			</Routes>
		</BrowserRouter>
	);
};
