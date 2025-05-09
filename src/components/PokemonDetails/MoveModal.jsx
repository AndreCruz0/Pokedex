 export const MoveModal = ({ moveDetails, onClose , OnHandleEscape  }) => (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={onClose}
     
  >
     {/*   // essa função serve para ao clicar esc fechar modal */}
    <div
      className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative"
      onClick={(e) => e.stopPropagation()}
      
    >
      
      
      
      <span
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer"
      >
        ✕
      </span>
      <h2 className="text-2xl font-bold capitalize mb-4">{moveDetails.name}</h2>
      <p className="text-gray-700 text-sm">
        {moveDetails.effect_entries?.[0]?.effect || 'Sem descrição disponível.'}
      </p>
    </div>
  </div>
);
