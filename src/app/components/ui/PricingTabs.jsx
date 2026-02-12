"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RecruitmentContent from "./components/RecruitmentContent";
import BundlesContent from "./components/BundlesContent";

const tabs = [
  {
    id: "recruitment",
    label: "Recruitment",
  },
  {
    id: "bundles",
    label: "Bundles",
  },
];

const PricingTabs = () => {
  const [activeTab, SetActiveTab] = useState(tabs[0].id);
  return (
    <>
      <div className="tabs flex flex-col items-center justify-center">
        <div className="tabs-inner p-1.5 rounded-[200px] border border-[#0e4dc7]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => SetActiveTab(tab.id)}
              className={`btn tab-btn cursor-pointer ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tabs-content mt-10 sm:mt-12 lg:mt-15 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab ? activeTab : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab == "recruitment" ? (
                <RecruitmentContent />
              ) : (
                <BundlesContent />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default PricingTabs;
