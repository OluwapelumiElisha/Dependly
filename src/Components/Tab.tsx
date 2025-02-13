"use client";

import { useState } from "react";
import Image from "next/image"; 
type TabType = "Freelancers" | "Online Merchants" | "Contract";

// Define the structure of the tab content
interface TabContent {
  title: string;
  spanTitle: string;
  description: string;
  imageSrc: string; 
}

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState<TabType>("Freelancers");

  // the content for each tab
  const tabContent: Record<TabType, TabContent> = {
    Freelancers: {
      title: "Independent",
      spanTitle: "Contractor",
      description:
        "We ensure freelancers secure payment processing, efficient contract management, and seamless transaction tracking.",
      imageSrc: '/images/Frame-1000005080-(1).png',
    },
    "Online Merchants": {
      title: "Sell",
      spanTitle: "Seamlessly",
      description:
        "You can focus on growing your business while we handle the intricacies of online commerce.",
      imageSrc: '/images/Frame-1000005080.png',
    },
    Contract: {
      title: "Ensure Secure",
      spanTitle: "Fulfillment",
      description:
        "Empower your business by issuing contracts that go beyond security, but also a catalyst for confidence and long-lasting partnerships.",
      imageSrc: '/images/Frame-1000005080-(2).png',
    },
  };

  return (
    <div className="lg:p-4 md:p-4 sm:p-1 p-0 font-sans">
      {/* Tabs */}
      <div className="flex lg:space-x-3 md:space-x-2 sm:space-x-3 space-x-1 border border-primaryColor p-2 w-full justify-center items-center sm:w-[70%] md:w-[100%] lg:w-fit rounded-lg">
        {(["Freelancers", "Online Merchants", "Contract"] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4  py-2 rounded-md text-sm lg:text-[20px] md:text-[14px] sm:text-[14px] text-[10px] font-normal ${
              activeTab === tab
                ? "bg-primaryColor text-white"
                : "border border-[#D1D5DB] bg-white text-primaryColor"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>



      {/* Header Text */}
      <div className="mt-3 font-sans z-0">
        <h2 className="lg:text-[32px] md:text-[32px] sm:text-[20px] text-[22px] font-normal text-[#2D2D2D]">
          <span className="font-semibold">{tabContent[activeTab].title}</span>{" "}
          {tabContent[activeTab].spanTitle}
        </h2>
        <p className="text-[#2D2D2D] mt-1 font-normal lg:text-[20px] md:text-[18px] sm:text-[17px] text-[13px] lg:leading-6 md:leading-6 sm:leading-6 leading-4.5">
          {tabContent[activeTab].description}
        </p>
      </div>
      {/* Header Text */}
      
      {/* Image for Each Tab */}
      <div className="mt-6  w-[100%] lg:w-[85%] md:w-[85%] sm:w-[100%] bg-[#0091A636] flex justify-center items-center rounded-t-xl" >
        <Image src={tabContent[activeTab].imageSrc} alt={activeTab} width={423} height={500} className="mt-3"/>
      </div>
      {/* Image for Each Tab */}

    </div>
  );
}
