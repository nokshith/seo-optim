"use client";

import { useState } from "react";
import Image from "next/image";

export default function ERPSystemSection() {
  const [selected, setSelected] = useState<string>("sap");

  const erpItems = [
    {
      key: "sap",
      name: "SAP ECC / S/4HANA",
      description:
        "BAPI, IDoc, REST for work orders, routings, batches, quality results",
      image: "/images/imgore.png",
    },
    {
      key: "oracle",
      name: "Oracle NetSuite",
      description:
        "SuiteTalk, RESTlet, SuiteScript for transactional and master data sync",
      image: "/images/Frame 1000005093.png",
    },
    {
      key: "microsoft",
      name: "Microsoft Dynamics",
      description: "OData, SOAP for orders, inventory, production status",
      image: "/images/Frame 1000005096.png",
    },
    {
      key: "tally",
      name: "Tally / Zoho",
      description:
        "JSON/REST sync for invoices, financial ledgers, and production data",
      image: "/images/Frame 1000005094.png",
    },
    {
      key: "legacy",
      name: "Legacy ERPs",
      description: "Custom connector support via FTP, SQL, and file drops",
      image: "/images/Frame 1000005095.png",
    },
  ];

  const selectedERP = erpItems.find((item) => item.key === selected);

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 bg-gray-100 min-h-[400px] sm:min-h-[500px] lg:min-h-[626px] px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-[764px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-[13px] mb-8 sm:mb-12 lg:mb-16">
        <h2 className="w-full font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight sm:leading-snug lg:leading-[43px] text-[#141A46] text-center font-segoe">
          Plug into the World's Leading ERP Systems
        </h2>
        <p className="w-full font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed sm:leading-relaxed lg:leading-[27px] text-[#737373] text-center font-segoe">
          ERP Platform | Davinci Connector Tier | Integration Touchpoints
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1202px] flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-[54.76px]">
        {/* Image Area */}
        <div className="w-full lg:w-[490px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[392px] overflow-hidden rounded-xl shadow-md bg-white relative order-2 lg:order-1">
          {selectedERP && (
            <Image
              key={selectedERP.key}
              src={selectedERP.image}
              alt={selectedERP.name}
              fill
              className="object-cover transition-all duration-300"
            />
          )}
        </div>

        {/* ERP Tabs */}
        <div className="flex flex-col w-full lg:max-w-[600px] space-y-3 sm:space-y-4 order-1 lg:order-2">
          {erpItems.map((item) => {
            const isSelected = selected === item.key;

            return (
              <div
                key={item.key}
                onClick={() => setSelected(item.key)}
                className={`p-3 sm:p-4 cursor-pointer border-t-[3px] sm:border-t-[4px] lg:border-t-[5px] rounded-lg transition-all duration-300 transform 
                  ${
                    isSelected
                      ? "border-[#FE7A3E] bg-[#FAFAFA] shadow-md"
                      : "border-white bg-white"
                  } 
                  hover:scale-[1.01] hover:shadow-sm`}
              >
                <p
                  className={`text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold leading-tight ${
                    isSelected ? "text-[#141A46]" : "text-[#1f1f1f]"
                  }`}
                >
                  {item.name}
                </p>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isSelected ? "max-h-[150px] sm:max-h-[180px] lg:max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm lg:text-[13px] text-[#7E7E7E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
