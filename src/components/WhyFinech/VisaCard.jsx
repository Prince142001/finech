import React from "react";
import VisaLogo from "../../assets/visa-logo.png";
import InternaltionalLogo from "../../assets/International.png";

function VisaCard() {
  return (
    <div className="space-y-[10.8px] p-[10.8px] border border-[#EDEDED] rounded-[10.8px] overflow-hidden">
      <div className="w-full max-w-[262.8px] h-41.25 py-[11.25px] px-[11.79px] rounded-xl bg-neutral relative overflow-hidden">
        <div className="w-[68.04px] h-3.75 bg-[#383838] rounded-full overflow-hidden"></div>
        <div className="w-[38.82857131958008px] h-[25.89px] bg-[#383838] rounded-[4.54px] overflow-hidden mt-[30.31px]"></div>
        <div className="flex items-center gap-[4.29px] mt-[15.54px]">
          <div className="w-[41.79px] h-3.75 bg-[#383838] rounded-full overflow-hidden"></div>
          <div className="w-[41.79px] h-3.75 bg-[#383838] rounded-full overflow-hidden"></div>
          <div className="w-[41.79px] h-3.75 bg-[#383838] rounded-full overflow-hidden"></div>
          <div className="w-[41.79px] h-3.75 bg-[#383838] rounded-full overflow-hidden"></div>
        </div>
        <div className="flex gap-[14.4px] mt-[20.31px]">
          <div className="space-y-[2.4px]">
            <div className="w-[21.43px] h-[7.5px] bg-[#383838] rounded-full overflow-hidden"></div>
            <div className="w-[64.82px] h-[10.71px] bg-[#383838] rounded-full overflow-hidden"></div>
          </div>
          <div className="space-y-[2.4px]">
            <div className="w-[21.43px] h-[7.5px] bg-[#383838] rounded-full overflow-hidden"></div>
            <div className="w-[48.75px] h-[10.71px] bg-[#383838] rounded-full overflow-hidden"></div>
          </div>
        </div>
        <div className="absolute bottom-[11.25px] right-[11.79px]">
          <img
            src={InternaltionalLogo}
            alt="InternaltionalLogo"
            className="w-[38.400001525878906px] h-[29.400001525878906px] object-contain"
          />
        </div>
      </div>
      <div className="w-full max-w-[262.8px] h-41.25 py-[11.25px] px-[11.79px] rounded-xl bg-[#EDEDED] relative overflow-hidden">
        <div className="w-[68.04px] h-3.75 bg-[#D6D6D6] rounded-full overflow-hidden"></div>
        <div className="w-[38.82857131958008px] h-[25.89px] bg-[#D6D6D6] rounded-[4.54px] overflow-hidden mt-[30.31px]"></div>
        <div className="flex items-center gap-[4.29px] mt-[15.54px]">
          <div className="w-[41.79px] h-3.75 bg-[#D6D6D6] rounded-full overflow-hidden"></div>
          <div className="w-[41.79px] h-3.75 bg-[#D6D6D6] rounded-full overflow-hidden"></div>
          <div className="w-[41.79px] h-3.75 bg-[#D6D6D6] rounded-full overflow-hidden"></div>
          <div className="w-[41.79px] h-3.75 bg-[#D6D6D6] rounded-full overflow-hidden"></div>
        </div>
        <div className="flex gap-[14.4px] mt-[20.31px]">
          <div className="space-y-[2.4px]">
            <div className="w-[21.43px] h-[7.5px] bg-[#D6D6D6] rounded-full overflow-hidden"></div>
            <div className="w-[64.82px] h-[10.71px] bg-[#D6D6D6] rounded-full overflow-hidden"></div>
          </div>
          <div className="space-y-[2.4px]">
            <div className="w-[21.43px] h-[7.5px] bg-[#D6D6D6] rounded-full overflow-hidden"></div>
            <div className="w-[48.75px] h-[10.71px] bg-[#D6D6D6] rounded-full overflow-hidden"></div>
          </div>
        </div>
        <div className="absolute bottom-[11.25px] right-[11.79px]">
          <img
            src={VisaLogo}
            alt="VisaLogo"
            className="w-[38.400001525878906px] h-[29.400001525878906px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default VisaCard;
