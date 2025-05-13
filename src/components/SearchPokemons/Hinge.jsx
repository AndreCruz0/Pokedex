export default function Hinge({ isHidden }) {
	return (
		<div
			className={`w-4 bg-gradient-to-b from-red-800 via-red-600 to-red-800 rounded-full shadow-inner ${
				isHidden ? 'hidden' : ''
			}`}
		/>
	);
}
