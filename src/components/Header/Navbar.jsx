import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import Vector from "../../assets/Vector.png";
import Navlinks from "./Navlinks";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-linear-to-b from-white/60 to-transparent backdrop-blur-2xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="px-20">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img src={Logo} alt="Finech" className="h-10 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Navlinks />
          </nav>

          <div>
            <ul className="flex items-center justify-center gap-3.5">
              <li>
                <a
                  href="#"
                  className="text-white text-[16px] leading-4.5 font-medium"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-primary-main text-white px-3 py-2.5 rounded-lg font-medium capitalize flex items-center justify-center gap-1.5 hover:bg-blue-700 transition"
                >
                  get started
                  <span>
                    <img
                      src={Vector}
                      alt="arrow"
                      className="w-[11.25px] h-[11.25px] object-contain"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
