import { useState, useEffect } from 'react';
import InputSearch from './InputSearch';
import ResultsDisplay from './ResultsDisplay';
import CylindricalHinge from './CylindricalHinge';
import SoundIndicators from './SoundIndicators';
import ControlButtons from './ControlButtons';
import FunctionPads from './FunctionsPads';

export default function RightPanel({ isHidden, filteredPokemons }) {
	const [shouldRender, setShouldRender] = useState(!isHidden);
	const [animationClass, setAnimationClass] = useState('');
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 620);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 620);
		};
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (!isHidden) {
			setShouldRender(true);
			setAnimationClass(isMobile ? '' : 'flip-in-right');
		} else {
			if (!isMobile) {
				setAnimationClass('flip-out-left');
				const timeout = setTimeout(() => setShouldRender(false), 600);
				return () => clearTimeout(timeout);
			} else {
				setShouldRender(false);
			}
		}
	}, [isHidden, isMobile]);

	if (!shouldRender) return null;

	return (
		<section
			className={`bgGradient min-h-[40rem] p-6 rounded-r-4xl flex flex-col relative w-[26rem] shadow-xl border-2 border-[#111] ${animationClass}`}
		>
			<div className="absolute top-2 left-8 right-8 h-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded " />
			<CylindricalHinge />
			<InputSearch />
			<ResultsDisplay filteredPokemons={filteredPokemons} />
			<SoundIndicators />
			<ControlButtons />
			<div className="bg-yellow-400 h-8 w-8 rounded-full absolute bottom-24 right-10 border-2 border-yellow-500 shadow-md hover:bg-yellow-300 transition-colors " />
			<FunctionPads />
		</section>
	);
}
