import PokedexBackground from "../PokedexBackground/PokedexBackGround"
export default function PokedexBody({children}){
  return (  
  <main className="bg-red-700 min-h-160 max-w-150 mx-auto p-10 rounded-4xl ">
    {children}
        <PokedexBackground>

        </PokedexBackground>
  </main>

  )
}
