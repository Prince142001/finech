import React from "react";

function ApiIntegration() {
  return (
    <>
      <div
        className={`relative bg-linear-to-r from-[#FFFFFF1A]  to-transparent p-[16.8px] border-[1.4px] border-[#ededed] rounded-[16.8px]`}
      >
        <div className="absolute left-[16.8px] top-4.5 flex items-center justify-end gap-1.5">
          <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
          <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
          <div className="w-3.25 h-3.25 bg-white rounded-full overflow-hidden"></div>
        </div>
        <div className="mt-7 rounded-[11.2px] p-[1.4px] bg-linear-to-b from-white/10 to-transparent">
          <div className="bg-white rounded-[11.2px] p-[16.8px] space-y-[5.6px] h-full w-full font-jetbrains">
            {/* Line 1 */}
            <div className="whitespace-nowrap">
              <span className="text-[#23C81B] font-bold">GET</span>{" "}
              <span className="text-[#03A5EA]">/</span>
              <span className="text-neutral">transactions</span>
              <span className="text-[#03A5EA]">/txn_67890</span>
            </div>

            {/* Line 2 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Host:</span>{" "}
              <span className="text-[#23C81B]">api.finech.com</span>
            </div>

            {/* Line 3 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Authorization:</span> Bearer{" "}
              <span className="text-[#EB600E]">YOUR_API_KEY</span>
            </div>

            {/* Line 4 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Content-Type:</span>{" "}
              <span className="text-[#03A5EA]">application/json</span>
            </div>

            {/* Line 5 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Accept:</span>{" "}
              <span className="text-[#03A5EA]">application/json</span>
            </div>

            {/* Line 6 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">User-Agent:</span>{" "}
              <span className="text-[#03A5EA]">PaymentClient/1.0</span>
            </div>

            {/* Line 7 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Connection:</span>{" "}
              <span className="text-[#23C81B]">keep-alive</span>
            </div>

            {/* Line 8 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">X-Request-ID:</span>{" "}
              <span className="text-[#03A5EA]">req_123456789</span>
            </div>

            {/* Line 9 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">X-Client-Version:</span>{" "}
              <span className="text-neutral">1.2.3</span>
            </div>

            {/* Line 10 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Referer:</span>{" "}
              <span className="text-[#23C81B]">
                https://dashboard.paymentprovider.com
              </span>
            </div>

            {/* Line 11 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Cache-Control:</span>{" "}
              <span className="text-[#23C81B]">no-cache</span>
            </div>

            {/* Line 12 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Accept-Encoding:</span>{" "}
              <span className="text-[#EB600E]">gzip</span>,{" "}
              <span className="text-[#EB600E]">deflate</span>,{" "}
              <span className="text-[#EB600E]">br</span>
            </div>

            {/* Line 13 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Accept-Language:</span>{" "}
              <span className="text-[#03A5EA]">en-US</span>,{" "}
              <span className="text-[#03A5EA]">en</span>;q=
              <span className="text-[#03A5EA]">0.9</span>
            </div>

            {/* Line 14 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">X-Forwarded-For:</span>{" "}
              <span className="text-[#23C81B]">192.168.1.100</span>
            </div>

            {/* Line 15 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">X-Api-Signature:</span>{" "}
              <span className="text-[#EB600E]">sha256</span>=
              <span className="text-[#03A5EA]">abcdef1234567890</span>
            </div>

            {/* Line 16 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">DNT:</span>{" "}
              <span className="text-neutral">1</span>
            </div>

            {/* Line 17 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">Pragma:</span>{" "}
              <span className="text-[#23C81B]">no-cache</span>
            </div>

            {/* Line 18 */}
            <div className="whitespace-nowrap">
              <span className="text-neutral">X-Device-ID:</span>{" "}
              <span className="text-[#03A5EA]">device_987654321</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiIntegration;
