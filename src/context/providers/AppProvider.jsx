// src/context/AppProvider.jsx
import { PokemonDataProvider } from '../PokemonDataContext';
import { OffSetProvider } from '../OffsetContext';
import { DetailsProvider } from '../DetailsContext';
import { FilterProvider } from '../FilterContext';
import { InputValueProvider } from '../InputValueContext';
import { ThemeProvider } from '../ThemeContext';

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
