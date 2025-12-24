import React from "react";
import BackgrounGradient from "../../assets/Background-Gradient.png";
import BackgrounPattern from "../../assets/Background-Pattern.png";

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-neutral z-0" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{ backgroundImage: `url(${BackgrounGradient})` }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-20"
        style={{ backgroundImage: `url(${BackgrounPattern})` }}
      />

      <div className="relative z-30"></div>
    </section>
  );
}

export default HeroSection;
