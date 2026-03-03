"use client";

import { useModal } from "@/context/ModalContext";

const ModalButton = () => {

    const { openHiringModal } = useModal();


    return (
        <button
            onClick={openHiringModal}
            className="btn btn-white text-lg font-semibold"
        >
            Schedule a call
        </button>
    );
};

export default ModalButton;