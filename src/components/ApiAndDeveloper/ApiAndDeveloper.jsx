import React from "react";
import ApiAndDeveloperBackgroundGradient from "../../assets/ApiAndDeveloper-Background-Gradient.png";
import BackgrounPattern from "../../assets/Background-Pattern.png";
import Vector from "../../assets/Vector.png";
import Code from "../../assets/Code.png";
import FileLock from "../../assets/FileLock.png";
import FileCode from "../../assets/FileCode.png";
import ApiIntegration from "./ApiIntegration";

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

        <div className="relative z-30 flex items-center gap-36">
          <div className="relative w-[45%]">
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

              <ul className="mt-16 space-y-5">
                <li className="flex items-center gap-2">
                  <img
                    src={Code}
                    alt="Code"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white text-[16px] leading-4.5 font-normal -tracking-wide">
                    RESTful APIs & Webhooks
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={FileCode}
                    alt="FileCode"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white text-[16px] leading-4.5 font-normal -tracking-wide">
                    SDKs for Multiple Languages
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={FileLock}
                    alt="FileLock"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white text-[16px] leading-4.5 font-normal -tracking-wide">
                    Sandbox for Testing
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 relative">
            <ApiIntegration />
          </div>
        </div>
      </section>
    </>
  );
}

export default ApiAndDeveloper;
