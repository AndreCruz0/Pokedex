import LoadPokemon from '../services/LoadPokedex';
import PokedexBackground from '../components/PokedexBody/PokedexBackGround';

export default function PokedexBody() {
  return (
    <main className='flex justify-center'>
      <section className="bg-red-700 min-h-160 max-w-150  p-10 rounded-4xl">
        <PokedexBackground />
        <LoadPokemon />
      </section>
      
      {/* Middle section with hinge-like appearance */}
      
        {/* Dobradiça do meio */}
<div className="w-4 bg-gradient-to-b from-red-800 via-red-600 to-red-800 rounded-full shadow-inner mx-2" />

      
      
      <section className="bg-red-600 min-h-160 p-6 rounded-r-3xl flex flex-col relative border-2 border-red-800">
        {/* Black display screen */}
        <div className="bg-white h-20 w-full mb-4 rounded-md">
			
		</div>
        
        {/* Blue grid buttons - 2 rows of 5 buttons */}
        <div className="grid grid-cols-5 gap-1 mb-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="bg-blue-500 h-8 w-full rounded"></div>
          ))}
        </div>
        
        {/* Small buttons below */}
        <div className="flex gap-1 mb-4 justify-end mr-12">
          <div className="bg-black h-2 w-6 rounded-full"></div>
          <div className="bg-black h-2 w-6 rounded-full"></div>
        </div>
        
        {/* White buttons */}
        <div className="flex gap-2 mb-4">
          <div className="bg-white h-8 w-12 rounded"></div>
          <div className="bg-white h-8 w-12 rounded"></div>
        </div>
        
        {/* Search input field */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Search Pokémon..." 
            className="w-full h-10 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Yellow circular button */}
        <div className="bg-yellow-400 h-6 w-6 rounded-full absolute bottom-20 right-8"></div>
        
        {/* Bottom dark buttons */}
        <div className="flex gap-4 mt-4">
          <div className="bg-green-900 h-10 w-20 rounded"></div>
          <div className="bg-green-900 h-10 w-20 rounded"></div>
        </div>
      </section>
    </main>
  );
}