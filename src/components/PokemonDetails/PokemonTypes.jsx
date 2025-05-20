export const PokemonTypes = ({ types, typeColors }) => {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{types?.map((typeObj, key) => {
				const typeName = typeObj.type.name;
				const colorClass = typeColors[typeName] || 'bg-gray-300 text-gray-900';
				return (
					<span
						key={key}
						className={`text-sm font-semibold px-4 py-1 rounded-full capitalize shadow ${colorClass}`}
					>
						{typeName}
					</span>
				);
			})}
		</div>
	);
};
