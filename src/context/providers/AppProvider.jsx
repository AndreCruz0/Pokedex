// src/context/AppProvider.jsx
import { PokemonDataProvider } from '../PokemonData-context';
import { OffSetProvider } from '../Offset-context';
import { DetailsProvider } from '../Details-context';
import { FIlterProvider } from '../filter-context';
import { InputValueProvider } from '../InputValue-context';
import { ThemeProvider } from '../Theme-context';

export const AppProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<PokemonDataProvider>
				<InputValueProvider>
					<FIlterProvider>
						<OffSetProvider>
							<DetailsProvider>{children}</DetailsProvider>
						</OffSetProvider>
					</FIlterProvider>
				</InputValueProvider>
			</PokemonDataProvider>
		</ThemeProvider>
	);
};
