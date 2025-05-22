import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from './Skeleton';
import ImageSkeletonSvg from './ImageSkeletonSvg';

export default function ImageWithSkeleton({
	src,
	alt,
	width,
	height,
	className = '',
}) {
	const [loading, setLoading] = useState(true);
	const [visible, setVisible] = useState(true);
	const [error, setError] = useState(false);

	const roundedClass = className
		.split(' ')
		.filter((cls) => cls.startsWith('rounded'))
		.join(' ');

	const imageStyles = `w-[${width}px] h-[${height}px] object-cover ${className}`;
	const wrapperStyles = `relative w-[${width}px] h-[${height}px] flex items-center justify-center`;

	return (
		<>
			{visible && (
				<div className={wrapperStyles}>
					{loading && (
						<Skeleton className={`absolute w-full h-full ${roundedClass}`}>
							<ImageSkeletonSvg width={width} height={height} />
						</Skeleton>
					)}
					{!error ? (
						<img
							src={src}
							alt={alt}
							width={width}
							height={height}
							className={imageStyles}
							onLoad={() => setLoading(false)}
							onError={() => {
								setLoading(false);
								setVisible(false);
								setError(true);
							}}
							loading="eager"
							data-testid="Image"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center bg-gray-200">
							<ImageSkeletonSvg width={width} height={height} />
						</div>
					)}
				</div>
			)}

			{error && (
				<div className={wrapperStyles}>
					<ImageSkeletonSvg width={width} height={height} />
				</div>
			)}
		</>
	);
}

ImageWithSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
