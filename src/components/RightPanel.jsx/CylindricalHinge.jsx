export default function CylindricalHinge() {
  return (
    <div className="absolute -left-8 top-0 h-full w-8 flex items-center">
      <div className="relative h-[95%] w-8 bgGradient rounded-l-full overflow-hidden">
        <div className="absolute top-0 w-full h-5 bgGradient rounded-b-full" />
        <div className="absolute bottom-0 w-full h-5 bgGradient rounded-t-full" />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-red-900/40 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-red-400/30 to-transparent" />
      </div>
    </div>
  );
}
