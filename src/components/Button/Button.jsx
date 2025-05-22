import PropTypes from 'prop-types';

export const Button = ({ onClick, children }) => {
	return (
		<button
			type="submit"
			onClick={onClick}
			className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 shadow"
		>
			{children}
		</button>
	);
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
