import { useState, useEffect } from 'react';
import InputSearch from './InputSearch';
import ResultsDisplay from './ResultsDisplay';
import CylindricalHinge from './CylindricalHinge';
import SoundIndicators from './SoundIndicators';
import ControlButtons from './ControlButtons';
import FunctionPads from './FunctionsPads';

export default function RightPanel({
	isHidden,
	filteredPokemons,
	inputValue,
	setInputValue,
}) {
	const [shouldRender, setShouldRender] = useState(!isHidden);
	const [animationClass, setAnimationClass] = useState('flip-in-right');

	useEffect(() => {
		if (!isHidden) {
			setShouldRender(true);
			setAnimationClass('flip-in-right');
		} else {
			setAnimationClass('flip-out-left');
			const timeout = setTimeout(() => setShouldRender(false), 600);
			return () => clearTimeout(timeout);
		}
	}, [isHidden]);

	if (!shouldRender) return null;

	return (
		<section
			className={`bgGradient min-h-[40rem] p-6 rounded-r-4xl flex flex-col relative w-[26rem] shadow-xl border-2 border-[#111] ${animationClass}`}
		>
			<div className="absolute top-2 left-8 right-8 h-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded " />
			<CylindricalHinge />
			<InputSearch inputValue={inputValue} setInputValue={setInputValue} />
			<ResultsDisplay
				filteredPokemons={filteredPokemons}
				inputValue={inputValue}
			/>
			<SoundIndicators />
			<ControlButtons />
			<div className="bg-yellow-400 h-8 w-8 rounded-full absolute bottom-24 right-10 border-2 border-yellow-500 shadow-md hover:bg-yellow-300 transition-colors " />
			<FunctionPads />
		</section>
	);
}
