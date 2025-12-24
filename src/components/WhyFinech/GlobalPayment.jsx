import React from "react";
import USAUnitedStatesofAmericaflag from "../../assets/USA United States of America flag.png";
import EUEuropeanUnionflag from "../../assets/EU European Union flag.png";
import Australiaflag from "../../assets/Australia flag.png";
import Japanflag from "../../assets/Japan flag.png";
import UKUnitedKingdomflag from "../../assets/UK United Kingdom flag.png";
import Vector from "../../assets/Vector.png"; // Assuming this is the arrow icon

function GlobalPayment() {
  // 1. Structure the data to match the 4 rows in the image
  const payments = [
    {
      id: 1,
      active: true, // This triggers the black background
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
      active: false,
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
      active: false,
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
      active: false,
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
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-10">
      {/* Main Container Card */}
      <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">
        <ul className="flex flex-col gap-4">
          {payments.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-200 ${
                item.active
                  ? "bg-[#111111] text-white border-[#111111] shadow-lg" // Dark Mode (Active)
                  : "bg-white text-black border-gray-100 shadow-sm hover:shadow-md" // Light Mode (Inactive)
              }`}
            >
              {/* Left Side: Input Currency */}
              <div className="flex flex-col gap-1 w-[40%]">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.input.sign}
                  {item.input.value}
                </h3>
                <div className="flex items-center gap-2">
                  <img
                    src={item.input.flag}
                    alt={item.input.code}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <p
                    className={`text-sm font-medium ${
                      item.active ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {item.input.code}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center w-[20%]">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    item.active ? "bg-[#007AFF]" : "bg-gray-100"
                  }`}
                >
                  <img
                    src={Vector}
                    alt="To"
                    className={`w-4 h-4 ${
                      item.active ? "brightness-0 invert" : "opacity-40"
                    }`}
                  />
                </div>
              </div>

              {/* Right Side: Output Currency */}
              <div className="flex flex-col gap-1 w-[40%] text-right items-end">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.output.sign}
                  {item.output.value}
                </h3>
                <div className="flex items-center gap-2 flex-row-reverse">
                  <img
                    src={item.output.flag}
                    alt={item.output.code}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <p
                    className={`text-sm font-medium ${
                      item.active ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
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
