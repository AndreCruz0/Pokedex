export default function DPadSection() {
	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-[20px_20px_20px] grid-rows-[20px_20px_20px] gap-[2px]">
				<div className="col-start-2 row-start-1 bg-[#333] border border-[#222] rounded-t-[5px]" />
				<div className="col-start-3 row-start-2 bg-[#333] border border-[#222] rounded-r-[5px]" />
				<div className="col-start-2 row-start-3 bg-[#333] border border-[#222] rounded-b-[5px]" />
				<div className="col-start-1 row-start-2 bg-[#333] border border-[#222] rounded-l-[5px]" />
				<div className="col-start-2 row-start-2 bg-[#555] border border-[#222] rounded-[2px]" />
			</div>

			<div className="flex gap-[15px] mt-1">
				<div className="w-[30px] h-[30px] rounded-full bg-[#e53935] border-[2px] border-[#222] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
				<div className="w-[30px] h-[30px] rounded-full bg-[#1e88e5] border-[2px] border-[#222] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
			</div>
		</div>
	);
}
