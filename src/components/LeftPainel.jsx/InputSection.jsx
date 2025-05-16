export default function InputSection({ search, onChange }) {
	return (
		<div className="bg-black border-black border-2 rounded-md shadow-inner w-[16rem]">
			<input
				type="text"
				placeholder="Pesquisar Pokémon..."
				value={search}
				onChange={onChange}
				className="w-full h-9 bg-[#111] text-green-400 px-3 rounded font-mono text-sm transition-all"
			/>
		</div>
	);
}
