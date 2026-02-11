"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
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

const OurPricing = () => {
  const [activeTab, SetActiveTab] = useState(tabs[0].id);
  return (
    <>
      <section className="our-pricing px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2>Our Pricing (Made Risk Free For You)</h2>
            </div>

            <div className="mt-5 w-full">
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

                <div className="tabs-content mt-12 lg:mt-15 w-full">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPricing;
