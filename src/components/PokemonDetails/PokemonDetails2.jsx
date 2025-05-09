import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsContext } from '../../context/Details-context';
import { PokemonHeader }  from './PokemonHeader'; // Ajuste de importação
import LoadDetails from './LoadDetails'; // Ajuste de importação
import  { PokemonAbilities } from './PokemonAbilities'; // Ajuste de importação
import {PokemonMoves} from './PokemonMoves'; // Ajuste de importação
import { PokemonTypes } from './PokemonTypes'; // Ajuste de importação
import   { MoveModal}  from './MoveModal';

const PokemonDetails = () => {
  const navigate = useNavigate();
  const { details } = useContext(DetailsContext);
  const [selectedMove, setSelectedMove] = useState(null);
  const [moveDetails, setMoveDetails] = useState(null);
    console.log(details);
        const typeColors = {
	fire: 'bg-red-100 text-red-800',
	water: 'bg-blue-100 text-blue-800',
	grass: 'bg-green-100 text-green-800',
	electric: 'bg-yellow-100 text-yellow-800',
	psychic: 'bg-pink-100 text-pink-800',
	normal: 'bg-gray-200 text-gray-800',
	fighting: 'bg-orange-200 text-orange-800',
	ground: 'bg-yellow-200 text-yellow-900',
	rock: 'bg-yellow-300 text-yellow-900',
	bug: 'bg-lime-100 text-lime-800',
	ghost: 'bg-purple-200 text-purple-800',
	steel: 'bg-gray-300 text-gray-900',
	ice: 'bg-cyan-100 text-cyan-800',
	dragon: 'bg-indigo-200 text-indigo-800',
	dark: 'bg-gray-800 text-white',
	fairy: 'bg-pink-200 text-pink-900',
	poison: 'bg-purple-100 text-purple-800',
	flying: 'bg-indigo-100 text-indigo-800',
};
    
  const fetchMoveDetails = async (moveUrl) => {
    const res = await fetch(moveUrl);
    const data = await res.json();
    setMoveDetails(data);
    setSelectedMove(data.name);
  };

  const handleCloseModal = () => {
    setSelectedMove(null);
    setMoveDetails(null);
  };
  // essa função serve para ao clicar esc fechar modal
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };


  return (
    
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-2xl shadow-lg max-w-md mx-auto mt-10">
      {details &&  (
        <div className="bg-white rounded-2xl shadow-md w-full p-6 text-center">
          <PokemonHeader name={details.pokemonName} image={details.pokemonImage} />
        <LoadDetails />
          <PokemonAbilities 
            abilities={details.pokemonAbilitiesName} 
            abilitiesDesc={details.pokemonAbilitiesDesc} 
          />
          <PokemonMoves 
            moves={details.pokemonMove} 
            onMoveClick={fetchMoveDetails} 
          />

          <PokemonTypes 
            types={details.pokemonType} 
            typeColors={typeColors} 
          />

          <button
            type="button"
            onClick={() => navigate('/pokemon/sexo')}
            className="mb-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Ver Mais Movimentos
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 shadow"
          >
            Voltar
          </button>
        </div>
      )}

      {/* Modal for Move Details */}
      {selectedMove && moveDetails && (
        <MoveModal moveDetails={moveDetails} onClose={handleCloseModal} OnHandleEscape={handleKeyDown}  />
      )}
    </div>
  );
};

export default PokemonDetails;
