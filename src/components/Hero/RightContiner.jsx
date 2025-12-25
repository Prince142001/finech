import React from "react";
import { Card } from "./Card";
import Container from "../../assets/Container.png";

function RightContiner() {
  return (
    <div className="">
      <div
        className={`absolute left-24 top-[10%] z-10 w-fit rounded-[16.8px] p-[1.4px] bg-linear-to-b from-white/10 to-transparent backdrop-blur-2xl`}
      >
        <div className="relative h-full w-full rounded-[15.4px] bg-linear-to-r from-[#FFFFFF1A] to-transparent p-[16.8px]">
          <div className="absolute left-[16.8px] top-4.5 flex items-center justify-end gap-1.5">
            <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
            <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
            <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
          </div>

          <div className="mt-7 rounded-[11.2px] p-[1.4px] bg-linear-to-b from-white/10 to-transparent">
            <div className="bg-white rounded-[11.2px] p-[16.8px] space-y-[5.6px] h-full w-full">
              <div className="whitespace-nowrap">
                <span className="text-[#23C81B]">GET</span>{" "}
                <span className="text-[#03A5EA]">/</span>
                <span className="text-neutral">payments</span>
              </div>

              {/* Line 2 */}
              <div className="whitespace-nowrap">
                <span className="text-neutral">Host:</span>{" "}
                <span className="text-[#23C81B]">api.finech.com</span>
              </div>

              {/* Line 3 */}
              <div className="whitespace-nowrap">
                <span className="text-neutral">Authorization:</span>{" "}
                <span className="text-neutral">Bearer</span>{" "}
                <span className="text-[#EB600E]">YOUR_API_KEY</span>
              </div>

              {/* Line 4 */}
              <div className="whitespace-nowrap">
                <span className="text-neutral">Content-Type:</span>{" "}
                <span className="text-[#03A5EA]">application</span>
                <span className="text-neutral">/</span>
                <span className="text-[#03A5EA]">json</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2">
        <img
          src={Container}
          alt="card"
          className="w-143.75 h-full object-contain"
        />
      </div>
      <Card
        heading="0.01%"
        title="Failure Rate"
        classname="absolute left-24 bottom-[15%] z-10 rotate-1"
      />
      <Card
        heading="95%"
        title="Faster Processing"
        classname="absolute left-82 bottom-[13%] z-9 -rotate-1"
      />
    </div>
  );
}

export default RightContiner;
