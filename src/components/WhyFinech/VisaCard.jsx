import React from "react";
import VisaLogo from "../../assets/visa-logo.png"; // replace if needed

function VisaCard() {
  return (
    <>
      <div className="w-full max-w-[520px] h-[260px] rounded-[24px] bg-[#101010] p-[24px] relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute right-[-60px] top-[-60px] w-[220px] h-[220px] rounded-full bg-white" />
          <div className="absolute right-[40px] top-[60px] w-[160px] h-[160px] rounded-full bg-white" />
        </div>

        {/* Top long placeholder */}
        <div className="w-[160px] h-[28px] rounded-full bg-[#E0E0E0]" />

        {/* Left block */}
        <div className="mt-[28px] w-[64px] h-[64px] rounded-[12px] bg-[#E0E0E0]" />

        {/* Middle pills */}
        <div className="mt-[24px] flex gap-[14px]">
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
        </div>

        {/* Bottom placeholders */}
        <div className="absolute left-[24px] bottom-[32px] flex gap-[16px]">
          <div className="w-[48px] h-[18px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[120px] h-[18px] rounded-full bg-[#E0E0E0]" />
        </div>

        {/* VISA logo */}
        <div className="absolute right-[24px] bottom-[24px]">
          <img src={VisaLogo} alt="Visa" className="h-[36px] object-contain" />
        </div>
      </div>
      <div className="w-full max-w-[520px] h-[260px] rounded-[24px] bg-[#F2F2F2] p-[24px] relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute right-[-60px] top-[-60px] w-[220px] h-[220px] rounded-full bg-white" />
          <div className="absolute right-[40px] top-[60px] w-[160px] h-[160px] rounded-full bg-white" />
        </div>

        {/* Top long placeholder */}
        <div className="w-[160px] h-[28px] rounded-full bg-[#E0E0E0]" />

        {/* Left block */}
        <div className="mt-[28px] w-[64px] h-[64px] rounded-[12px] bg-[#E0E0E0]" />

        {/* Middle pills */}
        <div className="mt-[24px] flex gap-[14px]">
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[90px] h-[28px] rounded-full bg-[#E0E0E0]" />
        </div>

        {/* Bottom placeholders */}
        <div className="absolute left-[24px] bottom-[32px] flex gap-[16px]">
          <div className="w-[48px] h-[18px] rounded-full bg-[#E0E0E0]" />
          <div className="w-[120px] h-[18px] rounded-full bg-[#E0E0E0]" />
        </div>

        {/* VISA logo */}
        <div className="absolute right-[24px] bottom-[24px]">
          <img src={VisaLogo} alt="Visa" className="h-[36px] object-contain" />
        </div>
      </div>
    </>
  );
}

export default VisaCard;
