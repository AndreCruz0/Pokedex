export default function HeaderSection() {
	return (
		<header className="-mx-10 px-10 flex justify-between items-center mb-4 flex-row-reverse border-b-[3px] border-[#7a0e0e]">
			<h1 className="text-pokedex">Pokédex</h1>
			<div className="flex gap-[10px]">
				<div className="light light-blue" />
				<div className="light light-red" />
				<div className="light light-yellow" />
				<div className="light light-green" />
			</div>
		</header>
	);
}
