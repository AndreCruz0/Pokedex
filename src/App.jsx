import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './routes/routes';
import { PokemonDataProvider } from './context/PokemonData-context';
import { OffSetProvider } from './context/Offset-context';
import { DetailsProvider } from './context/Details-context';
import { FIlterProvider } from './context/filter-context';
import { SeacrhProvider } from './context/Search-context';

function App() {
	return (
		<PokemonDataProvider>
			<SeacrhProvider>
				<FIlterProvider>
					<OffSetProvider>
						<DetailsProvider>
							<AppRoutes />
						</DetailsProvider>
					</OffSetProvider>
				</FIlterProvider>
			</SeacrhProvider>
		</PokemonDataProvider>
	);
}
export default App;
