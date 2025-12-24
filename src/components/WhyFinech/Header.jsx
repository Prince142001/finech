export function Header(prop) {
  return (
    <header>
      <div className="flex gap-3 items-center">
        <div>
          <img
            src={prop.img}
            alt={prop.name}
            className="w-6 h-6 object-cover"
          />
        </div>
        <h2 className="text-2xl font-medium text-neutral leading-6 -tracking-wide">
          {prop.heading}
        </h2>
      </div>
      <p className="mt-4 text-[#606060] text-[16px] leading-4.5 font-normal -tracking-wide">
        {prop.description}
      </p>
    </header>
  );
}
