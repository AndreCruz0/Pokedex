export const Button = ({ onClick }) => {
	return (
		<button type="submit" onClick={onClick} className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 shadow">
			Carregar Mais
		</button>
	);
};
