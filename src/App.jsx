import './app.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './pages/routes';
import { PokemonDataProvider } from './context/PokemonData-context';
import { OffSetProvider } from './context/Offset-context';
import { DetailsProvider } from './context/Details-context';

function App() {
	return (
		<PokemonDataProvider>
			<OffSetProvider>
				<DetailsProvider>
					<AppRoutes />
				</DetailsProvider>
			</OffSetProvider>
		</PokemonDataProvider>
	);
}
export default App;
