import { useState , createContext  } from "react";  
export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
	const [details, setDetails] = useState([]);
	return (
		<DetailsContext.Provider value={{ details, setDetails }}>
			{children}
		</DetailsContext.Provider>
	);
};
