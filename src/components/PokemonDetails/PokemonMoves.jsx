export const PokemonMoves = ({ moves, onMoveClick }) =>  (
  <div className="flex flex-wrap justify-center gap-2 mb-6 max-h-40 overflow-y-auto  ">
  
   
    {moves?.map((move, key) => (
      <span
        key={key}
        className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full capitalize cursor-pointer hover:bg-gray-300"
        onClick={() => onMoveClick(move.move.url)}
        onKeyDown={() => onMoveClick(move.move.url)}
      >
        {move.move.name}
      </span>
    ))}
  </div>
);
