import React from "react";
import BackgrounPattern from "../../assets/Background-Pattern.png";
import SectionHeader from "../SectionHeader";
import Cart from "../icons/Cart";
import QlementineIconsVersionControl16 from "../icons/QlementineIconsVersionControl16";
import ClarityBankSolid from "../icons/ClarityBankSolid";
import TablerBuildingSkyscraper from "../icons/TablerBuildingSkyscraper";
import ApiAndDeveloper from "../ApiAndDeveloper/ApiAndDeveloper";

function WhoIsItFor() {
  const cards = [
    {
      id: 1,
      title: "For Marketplaces",
      description: "Seamless money movement between buyers and sellers",
      icon: Cart,
    },
    {
      id: 2,
      title: "For SaaS Platforms",
      description:
        "Embed financial services into your software with minimal effort",
      icon: QlementineIconsVersionControl16,
    },
    {
      id: 3,
      title: "For Fintech Startups",
      description: "Build your own banking solutions with ease",
      icon: ClarityBankSolid,
    },
    {
      id: 4,
      title: "For Enterprises",
      description: "Custom financial solutions to optimize operations at scale",
      icon: TablerBuildingSkyscraper,
    },
  ];

  return (
    <div className="relative">
      <section className="relative w-full min-h-screen overflow-hidden px-20 flex flex-col justify-center">
        {/* Dark Background */}
        <div className="absolute inset-0 bg-neutral z-0" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-30"
          style={{ backgroundImage: `url(${BackgrounPattern})` }}
        />

        <div className="relative z-20 py-25 w-full">
          <SectionHeader
            headerClassname="w-3/5 mb-16"
            subHeading="WHO IS IT FOR?"
            headingClassname="text-white"
            heading="Financial Solutions for Every Industry"
            descriptionClassname="text-gray-400"
            description="Our platform empowers you to handle transactions, streamline operations, and integrate financial services seamlessly."
          />

          {/* Dynamic Card Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <li
                key={card.id}
                className="group relative w-full h-107 border border-[#ffffff1a] rounded-2xl overflow-hidden flex flex-col p-6 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl z-0" />

                <div className="absolute top-6 left-6 right-6 h-64 bg-white/10 rounded-xl z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-64 flex items-center justify-center mb-0">
                    <card.icon className="w-16 h-16 text-white" />
                  </div>

                  <div className="mt-auto">
                    <h2 className="text-2xl text-white leading-7 font-medium mb-2 tracking-tight">
                      {card.title}
                    </h2>
                    <p className="text-base text-gray-400 leading-6 font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ApiAndDeveloper />
    </div>
  );
}

export default WhoIsItFor;
