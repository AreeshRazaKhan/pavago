"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import { getMegaMenuData } from "@/services/navbar.service";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [dynamicServices, setDynamicServices] = useState([]);
  const { openHiringModal } = useModal();
  const navRef = useRef(null);

  useEffect(() => {
    const loadMenu = async () => {
      const data = await getMegaMenuData();
      setDynamicServices(data);
    };
    loadMenu();

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuData = [
    { title: "Find a Hire", columns: dynamicServices },
    { title: "About Us", path: "/about" },
    { title: "Pricing", path: "/pricing" },
  ];

  const handleMenuClick = (idx) => {
    setActiveMenu(activeMenu === idx ? null : idx);
  };

  return (
    <header
      className="fixed top-5 left-0 right-0 w-full z-50 px-3 md:px-4 lg:px-5"
      ref={navRef}
    >
      <div className="container mx-auto">
        {/* Added 'relative' to nav so the absolute menu positions against it */}
        <nav className="flex items-center justify-between ps-5.5 p-3 sm:ps-7.5 rounded-full text-[#292929] relative navbar">
          {/* Logo */}
          <div className="logo-wrapper max-w-28 sm:max-w-36">
            <Link href="/" onClick={() => setActiveMenu(null)}>
              <img src="/images/logo.webp" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center gap-8">
            {menuData.map((item, idx) => (
              <div key={idx} className="py-2 cursor-pointer">
                {item.columns ? (
                  <button
                    onClick={() => handleMenuClick(idx)}
                    className={`flex items-center gap-1 transition-colors hover:text-[#6B1AFF] ${
                      activeMenu === idx ? "text-[#6B1AFF]" : ""
                    }`}
                  >
                    {item.title}
                    <motion.div
                      animate={{ rotate: activeMenu === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-[#6B1AFF] transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                openHiringModal(true);
                setActiveMenu(null);
              }}
              className="hidden lg:block btn btn-white fs-18 font-semibold! cursor-pointer transition active:scale-98"
            >
              Schedule a call
            </button>
            <button
              className="lg:hidden"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* --- MEGA MENU DROPDOWN (OUTSIDE THE BUTTON LOOP) --- */}
          <AnimatePresence>
            {activeMenu !== null &&
              menuData[activeMenu]?.columns &&
              dynamicServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  // left-0 right-0 ensures it takes the full width of the 'nav'
                  className="absolute top-[110%] left-0 right-0 bg-[#6B1AFF] rounded-3xl p-10 shadow-2xl border border-white/10 z-[-1]"
                >
                  <div className="grid grid-cols-6 gap-8">
                    {menuData[activeMenu].columns.map((col, cIdx) => (
                      <div key={cIdx}>
                        <Link
                          href={`/${col.slug}`}
                          className="font-bold mb-7.5 text-white! block hover:underline fs-22"
                          onClick={() => setActiveMenu(null)}
                        >
                          {col.label}
                        </Link>
                        <ul className="space-y-3">
                          {col.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <Link
                                href={`/${col.slug}/${link.slug}`}
                                className="text-white/80 hover:text-white transition-colors text-sm block"
                                onClick={() => setActiveMenu(null)}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white mt-2 rounded-3xl overflow-hidden p-6 shadow-xl"
            >
              {menuData.map((item, i) => (
                <div key={i} className="py-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    {item.columns ? (
                      <span className="font-medium">{item.title}</span>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                  {item.columns && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.columns.slice(0, 4).map((col, ci) => (
                        <Link
                          key={ci}
                          href={`/${col.slug}`}
                          className="block text-[#6B1AFF] text-sm font-bold"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {col.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <button
                  onClick={() => {
                    openHiringModal(true);
                    setIsMobileOpen(false);
                  }}
                  className="w-full btn btn-primary"
                >
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
