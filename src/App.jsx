import './app.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './components/pages/routes';
import { PokemonDataProvider } from './context/PokemonData-context';
import { OffSetProvider } from './context/Offset-context';

function App() {
	return (
		<PokemonDataProvider>
			<OffSetProvider>
				<AppRoutes />
			</OffSetProvider>
		</PokemonDataProvider>
	);
}
export default App;
