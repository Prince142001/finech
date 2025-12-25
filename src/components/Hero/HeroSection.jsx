import React from "react";
import BackgrounGradient from "../../assets/Background-Gradient.png";
import BackgrounPattern from "../../assets/Background-Pattern.png";
import EnvelopeSimple from "../../assets/EnvelopeSimple.png";
import Vector from "../../assets/Vector.png";
import RightContiner from "./RightContiner";
import Partner from "./Partner";

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden px-20">
      <div className="absolute inset-0 bg-neutral z-0" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{ backgroundImage: `url(${BackgrounGradient})` }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-20"
        style={{ backgroundImage: `url(${BackgrounPattern})` }}
      />

      <div className="relative h-[110vh] z-30 flex gap-36 mt-40">
        <div className="relative w-2/5">
          <div className="">
            <p className="text-primary-main text-[16px] leading-4.5 font-semibold -tracking-wide">
              FINANCE SOLUTION
            </p>
            <h2 className="mt-6 text-white text-[64px] leading-18 font-medium -tracking-wide">
              Empowering the Next Generation of Financial Infrastructure,
              Designed for You
            </h2>
            <p className="mt-6 text-white text-[16px] leading-4.5 font-normal -tracking-wide">
              Powerful APIs and seamless integrations to help businesses move
              money, manage risk, and scale globally.
            </p>

            <form class="max-w-md mt-10">
              <div class="relative py-1 pl-3 pr-1 rounded-2xl overflow-hidden bg-white flex items-center">
                <div class="">
                  <img
                    src={EnvelopeSimple}
                    alt="Envelope Simple"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <input
                  type="mail"
                  id="mail"
                  class="block w-full p-3 bg-neutral-secondary-medium text-heading text-sm border-none outline-none"
                  placeholder="Send your email"
                  required
                />
                <button
                  type="button"
                  class="absolute end-1.5 bottom-1.5 bg-primary-main text-white px-3 py-2.5 rounded-lg text-sm font-medium capitalize flex items-center justify-center gap-1.5 hover:bg-blue-700 transition"
                >
                  Talk to Sales
                  <span className="">
                    <img
                      src={Vector}
                      alt="arrow"
                      className="w-[11.25px] h-[11.25px] object-contain"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 relative">
          <RightContiner />
        </div>
        <Partner />
      </div>
    </section>
  );
}

export default HeroSection;
