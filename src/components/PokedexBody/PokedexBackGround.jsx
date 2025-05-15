import  BlackBackground  from './GrayBackground';
export default function PokedexBackGround() {
	return (
		<div className="bg-[#282828] rounded-3xl p-4 max-w-100 mx-auto mt-6   flex flex-col items-center  bg-gradient-to-b from-[#333333] to-[#222222] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] border-2 border-[#111]">
			<BlackBackground />
		</div>
	);
}