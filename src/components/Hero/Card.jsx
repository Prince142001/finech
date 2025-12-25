export function Card(prop) {
  return (
    <div
      className={`w-fit rounded-[16.8px] p-[1.4px] bg-linear-to-b from-white/10 to-transparent backdrop-blur-2xl ${prop.classname}`}
    >
      <div className="relative h-full w-full rounded-[15.4px] bg-linear-to-r from-[#FFFFFF1A] to-transparent p-[16.8px]">
        <div className="absolute left-[16.8px] top-4.5 flex items-center justify-end gap-1.5">
          <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
          <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
          <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
        </div>

        <div className="mt-7 rounded-[11.2px] p-[1.4px] bg-linear-to-b from-white/10 to-transparent">
          <div className="bg-white rounded-[11.2px] p-[16.8px] space-y-[5.6px] h-full w-full">
            <h2 className="text-neutral text-[57.6px] leading-15 font-medium -tracking-wide">
              {prop.heading}
            </h2>
            <p className="text-[#878787] text-[14.4px] leading-4.5 font-normal -tracking-wide">
              {prop.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
