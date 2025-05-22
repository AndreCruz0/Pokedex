import { createContext, useState } from 'react';
export const FilterContext = createContext();

export const FIlterProvider = ({ children }) => {
	const [filter, setFilter] = useState(0);
	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			{children}
		</FilterContext.Provider>
	);
};
