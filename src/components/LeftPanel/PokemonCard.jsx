import PropTypes from 'prop-types';
import ImageWithSkeleton from '../Skeleton/ImageWithSkeleton';

export const PokemonCard = ({ pokemonName, pokemonImage, onClick }) => {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      onKeyUp={onClick} // Assuming same behavior for onKeyUp and onKeyDown for simplicity
      onKeyDown={onClick} // If different behavior is needed, separate props should be used
      className="relative bg-white min-h-[150px] rounded-[10px] p-2 text-center shadow-md border border-[#ddd] cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-red-200  flex flex-col items-center justify-center"
    >
      <div className="absolute top-[5px] left-[5px] w-[10px] h-[10px] bg-red-700 opacity-70 rounded-full" />
      <ImageWithSkeleton
        src={pokemonImage}
        alt={pokemonName}
        width="96"
        height="96"
        className="w-full mb-2 object-contain transition-transform hover:scale-105 rounded"
      />
      <p className="text-sm font-semibold capitalize text-black">
        {pokemonName}
      </p>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
