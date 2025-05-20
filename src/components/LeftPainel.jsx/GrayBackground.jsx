import { ContainerPokemons } from './ContainerPokemons';

export default function GrayBackground() {
	return (
		<section
			className="w-full  max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] bg-[#f0eaea] rounded-[10px] p-[15px] shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] max-h-[400px] overflow-y-auto scrollbar-thin flex flex-col justify-evenly items-end"
		>
			<ContainerPokemons />
		</section>
	);
}
