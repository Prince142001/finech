import React from "react";

function Navlinks() {
  const navlinks = [
    {
      url: "#",
      name: "Home",
    },
    {
      url: "#",
      name: "Solutions",
    },
    {
      url: "#",
      name: "Integrations",
    },
    {
      url: "#",
      name: "Pricing",
    },
    {
      url: "#",
      name: "Resources",
    },
  ];
  return (
    <ul className="flex items-center justify-center gap-6">
      {navlinks.map((value, index) => {
        return (
          <li key={index}>
            <a
              href={value.url}
              className="text-white text-[16px] leading-4.5 font-medium"
            >
              {value.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navlinks;
