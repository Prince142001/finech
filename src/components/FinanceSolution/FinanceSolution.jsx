import React from "react";
import FinanceSolutionBackgrounGradient from "../../assets/Finance-Solution-Background-Gradient.png";
import BackgrounPattern from "../../assets/Background-Pattern.png";
import SectionHeader from "../SectionHeader";
import EnvelopeSimple from "../../assets/EnvelopeSimple.png";
import Vector from "../../assets/Vector.png";
import { Marquee } from "@/components/ui/marquee";
import Compnay from "./Compnay";

function FinanceSolution() {
  return (
    <section className="my-10 mx-5">
      {/* ===== HERO WITH BACKGROUND ===== */}
      <div className="relative rounded-t-2xl overflow-hidden py-30">
        {/* Background layers */}
        <div className="absolute inset-0 bg-neutral z-0" />

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
          style={{
            backgroundImage: `url(${FinanceSolutionBackgrounGradient})`,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-20"
          style={{ backgroundImage: `url(${BackgrounPattern})` }}
        />

        {/* Content */}
        <div className="relative z-50">
          <SectionHeader
            headerClassname="w-1/2"
            subHeading="FINANCE SOLUTION"
            headingClassname="text-white"
            heading="Ready to Scale Your Payments?"
            descriptionClassname="text-white"
            description="Join thousands of businesses worldwide using Finech to simplify transactions, enhance security, and drive growth."
          />

          <form className="max-w-2xl mx-auto mt-10">
            <div className="relative py-1 pl-3 pr-1 rounded-2xl bg-white flex items-center">
              <img src={EnvelopeSimple} alt="Envelope" className="w-6 h-6" />

              <input
                type="email"
                className="block w-full p-3 bg-transparent text-heading text-sm outline-none"
                placeholder="Send your email"
              />

              <button
                type="button"
                className="absolute end-1.5 bottom-1.5 bg-primary-main text-white px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-1.5"
              >
                Talk to Sales
                <img src={Vector} alt="arrow" className="w-3 h-3" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-neutral rounded-b-2xl py-6">
        <Marquee pauseOnHover repeat={6}>
          <Compnay />
        </Marquee>
      </div>
    </section>
  );
}

export default FinanceSolution;
