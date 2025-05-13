import BlackBackground from './BlackBackground';
export default function PokedexBackground({ setIsHidden , isHidden }) {
	return (
		<section className="bg-[#f2f2f2e3] max-w-125 mx-auto rounded-2xl min-h-110 p-1 rounded-bl-[100px] flex flex-col justify-evenly items-end">
			<BlackBackground />

			{/* Botão da lupa que revela a Pokédex */}
			<button
				className="w-10 rounded-full border-black border-3"
				onClick={() => isHidden ? setIsHidden(false) : setIsHidden(true)}
				onKeyDown={() => isHidden ? setIsHidden(false) : setIsHidden(true)}
				type="button"
			>

				<img src="/lupa.png" alt="Pesquisar" />
			</button>
		</section>
	);
}
