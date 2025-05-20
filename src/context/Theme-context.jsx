import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
	theme: 'dark',
	setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem('theme') || 'dark';
	});

	useEffect(() => {
		document.body.classList.remove('dark', 'white');
		document.body.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
