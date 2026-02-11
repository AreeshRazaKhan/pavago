"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";

const menuData = [
  {
    title: "Find a Hire",
    columns: [
      {
        label: "Sales",
        links: [
          "Sales Dev Rep",
          "Business Dev Rep",
          "Automation Specialist",
          "Sales Executive",
        ],
      },
      {
        label: "Marketing",
        links: [
          "SEO",
          "Digital Marketing",
          "Content Writer",
          "Social Media",
          "Google Ads",
        ],
      },
      {
        label: "Admin",
        links: ["Customer Service", "Executive Assistant", "Virtual Assistant"],
      },
      {
        label: "IT & Engineering",
        links: ["Web Developer", "Full Stack", "Backend", "ML Engineer"],
      },
    ],
  },
  { title: "About Us", links: [] },
  { title: "Pricing", links: [] },
  { title: "Resources", columns: [] }, // Added based on image
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 w-full z-50 px-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between bg-primary p-3 ps-7.5 rounded-full text-white relative">
          {/* Logo */}
          <div className="logo-wrapper max-w-36">
            <img src="/images/navbar_logo.png" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuData.map((item, idx) => (
              <div
                key={idx}
                className="relative py-2 cursor-pointer group"
                onMouseEnter={() =>
                  item.columns && item.columns.length > 0 && setActiveMenu(idx)
                }
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                  {item.title}{" "}
                  {item.columns && item.columns.length > 0 && (
                    <ChevronDown size={16} />
                  )}
                </button>

                <AnimatePresence>
                  {activeMenu === idx &&
                    item.columns &&
                    item.columns.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-[#2D46B9] rounded-3xl p-8 shadow-2xl border border-white/10"
                      >
                        <div className="grid grid-cols-4 gap-8">
                          {item.columns.map((col, cIdx) => (
                            <div key={cIdx}>
                              <h3 className="text-xl font-bold mb-4">
                                {col.label}
                              </h3>
                              <ul className="space-y-2">
                                {col.links.map((link, lIdx) => (
                                  <li
                                    key={lIdx}
                                    className="text-blue-100/70 hover:text-white cursor-pointer transition-colors text-sm"
                                  >
                                    {link}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
            <a href="/careers" className="hover:text-blue-200">
              Careers
            </a>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Hidden on screens < 1024px (lg) */}
            <button className="hidden lg:block btn btn-white fs-18 font-semibold!">
              Schedule a call
            </button>
            <button
              className="lg:hidden"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white mt-2 rounded-3xl overflow-hidden p-6 text-[#2D46B9]"
            >
              {menuData.map((item, i) => (
                <div key={i} className="py-3 border-b border-gray-100">
                  <div className="font-bold text-lg flex justify-between items-center">
                    {item.title}
                    {item.columns && item.columns.length > 0 && (
                      <ChevronDown size={18} />
                    )}
                  </div>
                </div>
              ))}
              <div className="py-3 border-b border-gray-100 font-bold text-lg">
                Careers
              </div>

              {/* This is the button moved inside the menu for < 1024px */}
              <div className="mt-6">
                <button className="btn btn-primary w-max px-8 py-3 rounded-full text-white font-semibold bg-[#2D46B9]">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
