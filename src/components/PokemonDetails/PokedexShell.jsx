// components/PokedexBody/PokedexShell.jsx
export default function PokedexShell({ children }) {
	return (
		<div className="bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-3xl border-[6px] border-red-900 shadow-2xl p-4 w-full max-w-md relative pokedex-shell">
			
			{/* Screen wrapper */}
			<div className="bg-gradient-to-b from-gray-100 to-gray-200 border-4 border-gray-300 rounded-lg mt-8 p-3 shadow-inner min-h-[500px]">
				{children}
			</div>
		</div>
	);
}
