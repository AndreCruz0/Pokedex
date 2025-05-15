import LoadPokemon from '../../services/LoadPokedex';
import PokedexBackground from '../PokedexBody/PokedexBackGround';
import { useContext } from 'react';
import { SearchContext } from '../../context/Search-context';

export default function LeftPanel({ setIsHidden, isHidden }) {
  const { setSearch ,search} = useContext(SearchContext);
  const handleInputChange = (e) => {
     setSearch(e.target.value) 
     e.target.value.length > 2 ? setIsHidden(false) : setIsHidden(true)
  }

	return (
	<section className="min-h-[40rem] max-w-full p-10 rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.3)] bgGradient border-2 border-[#111] overflow-hidden">
  <header className="-mx-10 px-10 flex justify-between items-center mb-4 flex-row-reverse border-b-[3px] border-[#7a0e0e]">
    <h1 className="text-pokedex">Pokédex</h1>

    <div className="flex gap-[10px]">
      <div className="light light-blue" />
      <div className="light light-red" />
      <div className="light light-yellow" />
      <div className="light light-green" />
    </div>
  </header>

  <PokedexBackground  />
  <LoadPokemon />
  <div className='flex justify-between'> 
<div className="grid grid-cols-[20px_20px_20px] grid-rows-[20px_20px_20px] gap-[2px]">
  <div className="col-start-2 row-start-1 bg-[#333] border border-[#222] rounded-t-[5px]" />
  <div className="col-start-3 row-start-2 bg-[#333] border border-[#222] rounded-r-[5px]" />
  <div className="col-start-2 row-start-3 bg-[#333] border border-[#222] rounded-b-[5px]" />
  <div className="col-start-1 row-start-2 bg-[#333] border border-[#222] rounded-l-[5px]" />
  <div className="col-start-2 row-start-2 bg-[#555] border border-[#222] rounded-[2px]" />
  
  
</div>
<input type="text" placeholder='TO AQUI ' onChange={handleInputChange} />
<div className="flex gap-[15px] mt-5 left-[10px] ">
  <div className="w-[30px] h-[30px] rounded-full bg-[#e53935] border-[2px] border-[#222] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" > </div>
  <div className="w-[30px] h-[30px] rounded-full bg-[#1e88e5] border-[2px] border-[#222] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" > </div>
</div>
</div>
</section>

	);
}
