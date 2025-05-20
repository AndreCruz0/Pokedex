import GrayBackground from './GrayBackground';

export default function PokedexBackGround() {
	return (
		<div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-[900px] bg-[#282828] rounded-3xl p-4 mx-auto mt-6 flex flex-col items-center bg-gradient-to-b from-[#333333] to-[#222222] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] border-2 border-[#111] max-h-[400px]">
			<GrayBackground />
		</div>
	);
}
