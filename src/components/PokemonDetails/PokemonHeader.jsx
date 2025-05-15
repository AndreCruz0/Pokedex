import { useState } from 'react';

export const PokemonHeader = ({ name, image, imageShiny }) => {
  const [showShiny, setShowShiny] = useState(false);

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold capitalize text-gray-900 mb-6 drop-shadow-sm">
        {name}
      </h1>

      
      <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-full">
        <button
          type='button'
          onClick={() => setShowShiny(false)}
          className={`px-4 py-1 rounded-full font-semibold text-sm transition-all ${
            !showShiny
              ? 'bg-red-500 text-white shadow'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          Normal
        </button>
        <button
          onClick={() => setShowShiny(true)}
          type='button'
          className={`px-4 py-1 rounded-full font-semibold text-sm transition-all ${
            showShiny
              ? 'bg-yellow-400 text-white shadow'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          Shiny
        </button>
      </div>

      <img
        src={showShiny ? imageShiny : image}
        alt={name}
        className="w-52 h-52 object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};
