import LoadPokemon from '../../services/LoadPokedex';
import PokedexBackground from '../PokedexBody/PokedexBackGround';

export default function LeftPanel({ setIsHidden, isHidden }) {
	return (
		<section className="bg-red-700 min-h-[40rem] max-w-[24rem] p-10 rounded-l-4xl shadow-md">
			<PokedexBackground setIsHidden={setIsHidden} isHidden={isHidden} />
			<LoadPokemon />
		</section>
	);
}
