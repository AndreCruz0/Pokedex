export default function Skeleton({ children, className = '' }) {
	return (
		<div
			className={`rounded-md bg-gray-100 flex justify-center items-center ${className}`}
		>
			{children}
		</div>
	);
}
