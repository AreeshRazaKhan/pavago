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

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isHiringModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
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
