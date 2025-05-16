import LoadPokemon from '../../services/LoadPokedex';
import PokedexBackground from '../PokedexBody/PokedexBackGround';
import { useContext } from 'react';
import { SearchContext } from '../../context/Search-context';
import HeaderSection from './HeaderSection';
import DPadSection from './DPadSection';
import InputSection from './InputSection';

export default function LeftPanel({ setIsHidden, isHidden }) {
	const { setSearch, search } = useContext(SearchContext);

	const handleInputChange = (e) => {
		setSearch(e.target.value);
		e.target.value.length > 2 ? setIsHidden(false) : setIsHidden(true);
	};

	return (
		<section className="min-h-[40rem] max-w-full p-10 rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.3)] bgGradient border-2 border-[#111] overflow-hidden">
			<HeaderSection />
			<PokedexBackground />
			<LoadPokemon />

			<div className="flex justify-between items-end mt-6">
				<DPadSection />
				<InputSection search={search} onChange={handleInputChange} />
			</div>
		</section>
	);
}
