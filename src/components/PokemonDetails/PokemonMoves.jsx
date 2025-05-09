export const PokemonMoves = ({ moves, onMoveClick }) => (
  <div className="flex flex-wrap justify-center gap-2 mb-6">
    <h2 className="text-xl font-bold text-gray-700 mb-2">Movimentos</h2>
    {moves?.slice(0, 10).map((move, key) => (
      <span
        key={key}
        className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full capitalize cursor-pointer hover:bg-gray-300"
        onClick={() => onMoveClick(move.move.url)}
      >
        {move.move.name}
      </span>
    ))}
  </div>
);
