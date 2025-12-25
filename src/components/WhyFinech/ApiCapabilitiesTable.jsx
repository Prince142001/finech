import React from "react";

const ApiCapabilitiesTable = () => {
  const data = [
    {
      category: "Payments",
      method: "POST",
      endpoint: "/payments",
      purpose: "Process transactions at scale",
      methodColor: "text-orange-500 bg-orange-50",
    },
    {
      category: "Multi-Currency",
      method: "GET",
      endpoint: "/exchange-rates",
      purpose: "Access live FX rates for 100+ currencies",
      methodColor: "text-green-500 bg-green-50",
    },
    {
      category: "User Management",
      method: "POST",
      endpoint: "/users",
      purpose: "Create & manage customers dynamically",
      methodColor: "text-orange-500 bg-orange-50",
    },
    {
      category: "Security",
      method: "POST",
      endpoint: "/fraud-detection",
      purpose: "AI-powered fraud detection for safe scaling",
      methodColor: "text-orange-500 bg-orange-50",
    },
    {
      category: "Scalability",
      method: "GET",
      endpoint: "/server-status",
      purpose: "Monitor infrastructure health & uptime",
      methodColor: "text-green-500 bg-green-50",
    },
    {
      category: "Custom Workflows",
      method: "POST",
      endpoint: "/webhooks",
      purpose: "Automate workflows with real-time webhooks",
      methodColor: "text-orange-500 bg-orange-50",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-50 p-8">
      {/* Card Container */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="bg-neutral grid grid-cols-12 px-8 py-4 text-white text-[12px] font-medium leading-4 -tracking-wide">
          <div className="col-span-3">Category</div>
          <div className="col-span-4">API Example</div>
          <div className="col-span-5">Purpose</div>
        </div>

        {/* Table Body */}
        <div className="border-collapse border border-[#EDEDED]">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 px-8 py-5 items-center hover:bg-gray-50 transition-colors"
            >
              {/* Category */}
              <div className="col-span-3 text-neutral text-[12px] font-medium leading-5 -tracking-wide">
                {item.category}
              </div>

              {/* API Example */}
              <div className="col-span-4">
                <div className="inline-flex items-center bg-gray-100 rounded-md px-2 py-1 text-[10px] border border-gray-200">
                  <span
                    className={`font-bold mr-2 uppercase font-jetbrains ${
                      item.methodColor.split(" ")[0]
                    }`}
                  >
                    {item.method}
                  </span>
                  <span className="text-gray-500">{item.endpoint}</span>
                </div>
              </div>

              {/* Purpose */}
              <div className="col-span-5 text-neutral text-[12px] font-medium leading-5 -tracking-wide">
                {item.purpose}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiCapabilitiesTable;
