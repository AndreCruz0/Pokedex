

import { ContainerPokemons } from './ContainerPokemons';
export default function BlackBackground() {
	return (
		<section
			className="bg-[#f5f5f5] rounded-[10px] p-[15px] shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-track-[#f5f5f5] scrollbar-thumb-[#cc1515] flex flex-col justify-evenly items-end"
		>
			<ContainerPokemons />
		</section>
	);
}