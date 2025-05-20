import { AppRoutes } from './routes/routes';
import { PokemonDataProvider } from './context/PokemonData-context';
import { OffSetProvider } from './context/Offset-context';
import { DetailsProvider } from './context/Details-context';
import { FIlterProvider } from './context/filter-context';
import { InputValueProvider } from './context/InputValue-context';
import { ThemeProvider } from './context/Theme-context';
function App() {
	return (
		<ThemeProvider>
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
		</ThemeProvider>
	);
}
export default App;
