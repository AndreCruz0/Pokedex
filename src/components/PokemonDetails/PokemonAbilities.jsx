export  const PokemonAbilities = ({ abilities, abilitiesDesc }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-700 mb-2">Habilidades</h2>
    {abilities?.map((ability, key) => (
      <div key={key} className="mb-3 text-left">
        <p className="font-semibold text-gray-800 capitalize">{ability}</p>
        <p className="text-sm text-gray-600">{abilitiesDesc?.[key]}</p>
      </div>
    ))}
  </div>
);
