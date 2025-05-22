import { useContext } from 'react';
import { InputValueContext } from '../../context/InputValueContext';
export default function InputSearch({ setInputValue }) {
	const { inputValue } = useContext(InputValueContext);

	return (
		<div className="bg-black h-16 w-full mb-6 rounded-md border-2 border-gray-900 p-1 shadow-inner">
			<input
				type="text"
				value={inputValue}
				placeholder="Pesquisar Pokémon..."
				className="w-full h-full bg-gray-900 text-green-400 px-3 focus:outline-none font-mono text-lg rounded-sm"
				disabled
			/>
		</div>
	);
}
