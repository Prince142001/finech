import React from "react";
import USAUnitedStatesofAmericaflag from "../../assets/USA United States of America flag.png";
import EUEuropeanUnionflag from "../../assets/EU European Union flag.png";
import Australiaflag from "../../assets/Australia flag.png";
import Japanflag from "../../assets/Japan flag.png";
import UKUnitedKingdomflag from "../../assets/UK United Kingdom flag.png";
import Vector from "../../assets/Vector.png";

function GlobalPayment() {
  const payments = [
    {
      id: 1,
      input: {
        sign: "$",
        value: "1,237.58",
        flag: USAUnitedStatesofAmericaflag,
        code: "USD",
      },
      output: {
        sign: "€",
        value: "1,130.32",
        flag: EUEuropeanUnionflag,
        code: "EUR",
      },
    },
    {
      id: 2,
      input: {
        sign: "$",
        value: "1,237.58",
        flag: USAUnitedStatesofAmericaflag,
        code: "USD",
      },
      output: {
        sign: "£",
        value: "972.29",
        flag: UKUnitedKingdomflag,
        code: "GBP",
      },
    },
    {
      id: 3,
      input: {
        sign: "$",
        value: "1,237.58",
        flag: USAUnitedStatesofAmericaflag,
        code: "USD",
      },
      output: {
        sign: "¥",
        value: "186,139.31",
        flag: Japanflag,
        code: "JPY",
      },
    },
    {
      id: 4,
      input: {
        sign: "$",
        value: "1,237.58",
        flag: USAUnitedStatesofAmericaflag,
        code: "USD",
      },
      output: {
        sign: "A$",
        value: "1,884.74",
        flag: Australiaflag,
        code: "AUD",
      },
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-50 p-10">
      <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">
        <ul className="flex flex-col gap-4">
          {payments.map((item) => (
            <li
              key={item.id}
              // Added 'group' here to control child elements on hover
              className="group flex items-center justify-between p-[14.4px] rounded-[10.8px] border-[0.9px] border-gray-100 bg-white shadow-sm transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-[#111111] hover:border-[#111111]"
            >
              {/* Left Side: Input */}
              <div className="flex flex-col gap-[3.6px] w-[40%]">
                <h3 className="text-[18px] font-medium text-neutral leading-5 -tracking-wide transition-colors duration-300 group-hover:text-white">
                  {item.input.sign}
                  {item.input.value}
                </h3>
                <div className="flex items-center gap-2">
                  <img
                    src={item.input.flag}
                    alt={item.input.code}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <p className="text-[10.8px] font-medium text-gray-500 leading-5 -tracking-wide transition-colors duration-300 group-hover:text-gray-300">
                    {item.input.code}
                  </p>
                </div>
              </div>

              {/* Center: Arrow Button */}
              <div className="flex justify-center items-center w-[20%]">
                <div className="flex items-center justify-center w-[28.8px] h-[28.8px] rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-[#007AFF]">
                  <img
                    src={Vector}
                    alt="To"
                    className="w-3 h-3 object-contain rotate-45 opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </div>

              {/* Right Side: Output */}
              <div className="flex flex-col gap-[3.6px] w-[40%] text-right items-end">
                <h3 className="text-[18px] font-medium text-neutral leading-5 -tracking-wide transition-colors duration-300 group-hover:text-white">
                  {item.output.sign}
                  {item.output.value}
                </h3>
                <div className="flex items-center gap-2 flex-row-reverse">
                  <img
                    src={item.output.flag}
                    alt={item.output.code}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <p className="text-[10.8px] font-medium text-gray-500 leading-5 -tracking-wide transition-colors duration-300 group-hover:text-gray-300">
                    {item.output.code}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GlobalPayment;
