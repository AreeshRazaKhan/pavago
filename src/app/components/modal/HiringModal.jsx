"use client";

import React, { useEffect } from "react";
import HiringForm from "../ui/HiringForm";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const HiringModal = () => {

    const {
        isHiringModalOpen,
        closeHiringModal
    } = useModal();


    // ESC key close
    useEffect(() => {

        const handleEsc = (event) => {
            if (event.key === "Escape") {
                closeHiringModal();
            }
        };

        if (isHiringModalOpen) {
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };

    }, [isHiringModalOpen, closeHiringModal]);


    return (
        <>
            <AnimatePresence>
                {isHiringModalOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={closeHiringModal}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="hiring-modal fixed top-1/2 left-1/2 
                                       -translate-x-1/2 -translate-y-1/2 
                                       p-8 bg-white rounded-2xl 
                                       w-[90%] max-w-3xl 
                                       text-center shadow-xl z-[60]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeHiringModal}
                                className="absolute top-2 right-2 w-10 h-10 
                                           flex items-center justify-center 
                                           bg-gray-200 hover:bg-gray-300 
                                           rounded-xl transition cursor-pointer active:scale-95"
                                aria-label="Close modal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </button>

                            <p className="text-2xl lg:text-3xl font-semibold mt-4 sm:mt-0">
                                Enter Your Email To Book A Call
                            </p>

                            <p className="text-base lg:text-lg mt-3">
                                Handpicked professionals ready to elevate your business.
                            </p>

                            <div className="mt-6">
                                <HiringForm />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default HiringModal;