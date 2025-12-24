export function Card(prop) {
  return (
    <div
      className={`relative bg-linear-to-r from-[#FFFFFF1A]  to-[#FFFFFF] p-[16.8px] border-[1.4px] rounded-[16.8px] ${prop.classname}`}
    >
      <div className="absolute left-[16.8px] top-2 flex items-center justify-end gap-1.5">
        <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
        <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
        <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
      </div>
      <img src={prop.img} alt="card" />
    </div>
  );
}
