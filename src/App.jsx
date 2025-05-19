import { AppRoutes } from './routes/routes';
import { PokemonDataProvider } from './context/PokemonData-context';
import { OffSetProvider } from './context/Offset-context';
import { DetailsProvider } from './context/Details-context';
import { FIlterProvider } from './context/filter-context';
import { InputValueProvider } from './context/InputValue-context';
function App() {
	return (
		<PokemonDataProvider>
			<InputValueProvider>
				<FIlterProvider>
					<OffSetProvider>
						<DetailsProvider>
							<AppRoutes />
						</DetailsProvider>
					</OffSetProvider>
				</FIlterProvider>
			</InputValueProvider>
		</PokemonDataProvider>
	);
}
export default App;
