export default function Skeleton({ children, className = '' }) {
  return (
    <div className={`animate-pulse rounded-md bg-gray-300 flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}
