export const  PokemonHeader = ({ name, image }) => (
  <>
    <h1 className="text-3xl font-extrabold capitalize text-gray-900 mb-6">
      {name}
    </h1>
    <img
      src={image}
      alt={name}
      className="w-48 h-48 mx-auto mb-6"
    />
  </>
)
