import React from "react";
import Logo from "../../assets/logo.png";
import Vector from "../../assets/Vector.png";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img src={Logo} alt="Finech" className="h-10 w-auto" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Navlinks />
          </nav>

          {/* CTA Button */}
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
                  className="bg-primary-main text-white px-3 py-2.5 rounded-full font-medium capitalize flex items-center justify-center gap-1.5 hover:bg-blue-700 transition"
                >
                  get started
                  <span className="">
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
