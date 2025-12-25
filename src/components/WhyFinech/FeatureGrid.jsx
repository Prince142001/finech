import React from "react";
// FIX 1: Remove curly braces for default exports
import Lock from "../icons/Lock";
import ArcticonsLastpassAuthenticator from "../icons/ArcticonsLastpassAuthenticator";
import RiAlarmWarningFill from "../icons/RiAlarmWarningFill";
import PCIDSSCompliance from "../icons/PCIDSSCompliance";
import MdiChartAreaspline from "../icons/MdiChartAreaspline";
import { Scale } from "lucide-react"; // lucide usually exports named components, so this stays

const FeatureGrid = () => {
  const features = [
    // FIX 2: Pass the component name (Lock), not the element (<Lock />)
    { icon: Lock, title: "Tokenization" },
    { icon: ArcticonsLastpassAuthenticator, title: "MFA" },
    { icon: RiAlarmWarningFill, title: "Fraud Detection" },
    { icon: PCIDSSCompliance, title: "PCI DSS Compliance" },
    { icon: Scale, title: "Dispute Protection" },
    { icon: MdiChartAreaspline, title: "Monitoring" },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-50 p-10">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-3xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-neutral pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full h-[100.1px] group flex flex-col items-center justify-center p-8 rounded-[10.8px] border-[0.9px] border-[#EDEDED] bg-white transition-all duration-300 cursor-pointer 
              hover:bg-[#111111] hover:border-[#111111] hover:text-white hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#EDEDED] mb-4 bg-gray-50 transition-colors duration-300 group-hover:bg-white/10">
                {/* Now this works because feature.icon is a component reference */}
                <feature.icon
                  className="w-8 h-8 text-black transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.5}
                />
              </div>

              {/* Changed text-white to text-black (default) and text-white (hover) so it's visible */}
              <h3 className="text-black group-hover:text-white text-[12px] font-medium leading-4 transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
