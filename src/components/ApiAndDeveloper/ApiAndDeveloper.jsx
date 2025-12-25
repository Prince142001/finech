import React from "react";
import ApiAndDeveloperBackgroundGradient from "../../assets/ApiAndDeveloper-Background-Gradient.png";
import BackgrounPattern from "../../assets/Background-Pattern.png";
import EnvelopeSimple from "../../assets/EnvelopeSimple.png";
import Vector from "../../assets/Vector.png";

function ApiAndDeveloper() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: `url(${ApiAndDeveloperBackgroundGradient})`,
        }}
      />
      <section className="relative w-full min-h-screen overflow-hidden px-20">
        <div className="absolute inset-0 bg-neutral z-0" />

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-20"
          style={{ backgroundImage: `url(${BackgrounPattern})` }}
        />

        <div className="relative z-30 flex items-center">
          <div className="relative w-2/5">
            <div className="">
              <p className="text-primary-main text-[16px] leading-4.5 font-semibold -tracking-wide">
                API & DEVELOPER
              </p>
              <h2 className="mt-6 text-white text-[48px] leading-14 font-medium -tracking-wide">
                Seamless Integration with Powerful Developer Tools
              </h2>
              <p className="mt-6 text-white text-[16px] leading-4.5 font-normal -tracking-wide">
                Integrate Finech effortlessly with our developer-friendly APIs,
                designed for speed, security, and scalability.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  class="w-fit bg-primary-main text-white px-4.5 py-3.5 rounded-lg text-sm font-medium capitalize flex items-center justify-center gap-2.5 hover:bg-blue-700 transition"
                >
                  Talk to Sales
                  <span className="">
                    <img
                      src={Vector}
                      alt="arrow"
                      className="w-[11.25px] h-[11.25px] object-contain rotate-45"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-3/5 relative">
            <div
              className={`relative bg-linear-to-r from-[#FFFFFF1A]  to-transparent p-[16.8px] border-[1.4px] border-[#ededed] rounded-[16.8px]`}
            >
              <div className="absolute left-[16.8px] top-2 flex items-center justify-end gap-1.5">
                <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
                <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
                <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
              </div>
              <img src="" alt="card" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ApiAndDeveloper;
