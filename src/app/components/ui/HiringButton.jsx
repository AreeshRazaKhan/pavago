"use client";
import { useModal } from "@/context/ModalContext";

export default function HiringButton({ children, className }) {
  const { openHiringModal } = useModal();
  return (
    <button onClick={() => openHiringModal(true)} className={className}>
      {children}
    </button>
  );
}
