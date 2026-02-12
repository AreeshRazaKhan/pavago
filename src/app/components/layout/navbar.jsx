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
  { title: "About Us", path: "/about" },
  { title: "Pricing", path: "/pricing" },
  { title: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Helper to turn "Sales Dev Rep" into "/find-a-hire/sales-dev-rep"
  const generateSlug = (category, link) => {
    return `/${category.toLowerCase().replace(/\s+/g, "-")}/${link.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <header className="fixed top-5 left-0 right-0 w-full z-50 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between bg-[#2D46B9] p-3 ps-5.5 sm:ps-7.5 rounded-full text-white relative">
          {/* Logo */}
          <div className="logo-wrapper max-w-28 sm:max-w-36">
            <a href="/">
              <img src="/images/navbar_logo.png" alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuData.map((item, idx) => (
              <div
                key={idx}
                className="relative py-2 cursor-pointer group"
                onMouseEnter={() => item.columns && setActiveMenu(idx)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.columns ? (
                  <button className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                    {item.title} <ChevronDown size={16} />
                  </button>
                ) : (
                  <a
                    href={item.path}
                    className="hover:text-blue-200 transition-colors"
                  >
                    {item.title}
                  </a>
                )}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeMenu === idx && item.columns && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[850px] bg-[#2D46B9] rounded-3xl p-10 shadow-2xl border border-white/10"
                    >
                      <div className="grid grid-cols-4 gap-8">
                        {item.columns.map((col, cIdx) => (
                          <div key={cIdx}>
                            <h3 className="text-lg font-bold mb-4 text-white">
                              {col.label}
                            </h3>
                            <ul className="space-y-3">
                              {col.links.map((linkText, lIdx) => (
                                <li key={lIdx}>
                                  <a
                                    href={generateSlug(col.label, linkText)}
                                    className="text-blue-100/70 hover:text-white transition-colors text-sm block"
                                  >
                                    {linkText}
                                  </a>
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
            <a
              href="/careers"
              className="hover:text-blue-200 transition-colors"
            >
              Careers
            </a>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-white text-[#2D46B9] px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
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
              className="lg:hidden bg-white mt-2 rounded-3xl overflow-hidden p-6 text-[#2D46B9] shadow-xl"
            >
              {menuData.map((item, i) => (
                <div key={i} className="py-3 border-b border-gray-100">
                  <div className="font-bold text-lg flex justify-between items-center">
                    {item.columns ? (
                      <span>{item.title}</span>
                    ) : (
                      <a href={item.path}>{item.title}</a>
                    )}
                    {item.columns && <ChevronDown size={18} />}
                  </div>
                </div>
              ))}
              <div className="py-3 border-b border-gray-100 font-bold text-lg">
                <a href="/careers">Careers</a>
              </div>
              <div className="mt-6">
                <button className="w-full py-4 rounded-full text-white font-semibold bg-[#2D46B9]">
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
