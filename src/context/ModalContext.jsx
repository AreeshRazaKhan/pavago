"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext(null);


export const ModalProvider = ({ children }) => {

    const [isHiringModalOpen, setIsHiringModalOpen] = useState(false);


    const openHiringModal = () => {
        setIsHiringModalOpen(true);
    };


    const closeHiringModal = () => {
        setIsHiringModalOpen(false);
    };


    // Lock body scroll when modal is open
    useEffect(() => {

        if (isHiringModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isHiringModalOpen]);


    return (
        <ModalContext.Provider
            value={{
                isHiringModalOpen,
                openHiringModal,
                closeHiringModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};


export const useModal = () => {

    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used inside ModalProvider");
    }

    return context;
};