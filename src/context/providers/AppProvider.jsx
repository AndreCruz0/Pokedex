// src/context/AppProvider.jsx
import { PokemonDataProvider } from '../PokemonData-context';
import { OffSetProvider } from '../Offset-context';
import { DetailsProvider } from '../Details-context';
import { FilterProvider} from '../Filter-context';
import { InputValueProvider } from '../InputValue-context';
import { ThemeProvider } from '../Theme-context';

export const AppProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<PokemonDataProvider>
				<InputValueProvider>
					<FilterProvider>
						<OffSetProvider>
							<DetailsProvider>{children}</DetailsProvider>
						</OffSetProvider>
					</FilterProvider>
				</InputValueProvider>
			</PokemonDataProvider>
		</ThemeProvider>
	);
};
