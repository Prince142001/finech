import React from "react";
import { SectionHeader } from "../SectionHeader";
import { Header } from "./Header";
import GlobeHemisphereWest from "../../assets/GlobeHemisphereWest.png";
import Bank from "../../assets/Bank.png";
import VisaCard from "./VisaCard";
import GlobalPayment from "./GlobalPayment";

function WhyFinech() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-20 py-25">
      <SectionHeader
        headerClassname="w-1/2"
        subHeading="WHY CHOOSE FINECH?"
        headingClassname="text-neutral"
        heading="Powering the Future of Finance"
        descriptionClassname="text-[#878787]"
        description="Unlock seamless transactions, secure financial services, and limitless scalability with our powerful, API-driven infrastructure."
      />
      <div className="mt-20">
        <div className="flex items-start gap-6">
          <div className="w-2/5 p-6 bg-white rounded-3xl border border-[#EDEDED] overflow-hidden">
            <Header
              img={GlobeHemisphereWest}
              name="Globe Hemisphere West"
              heading="Global Payments"
              description="Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders."
            />
            <GlobalPayment />
          </div>
          <div className="w-3/5 p-6 bg-white rounded-3xl border border-[#EDEDED] overflow-hidden">
            <Header
              img={Bank}
              name="Bank"
              heading="Banking as a Service"
              description="Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services."
            />
            <div>
              <div>
                <div>
                  <VisaCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-6 flex-row-reverse">
          <div className="w-2/5 p-6 bg-white rounded-3xl border border-[#EDEDED] overflow-hidden">
            <Header
              img={GlobeHemisphereWest}
              name="Globe Hemisphere West"
              heading="Global Payments"
              description="Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders."
            />
          </div>
          <div className="w-3/5 p-6 bg-white rounded-3xl border border-[#EDEDED] overflow-hidden">
            <Header
              img={Bank}
              name="Bank"
              heading="Banking as a Service"
              description="Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyFinech;
