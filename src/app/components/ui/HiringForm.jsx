"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiringFormData } from "@/server/actions";
import { useModal } from "@/context/ModalContext";

const HiringForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // modal state

  const { isHiringModalOpen, closeHiringModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.length > 0) {
      alert("Please enter a valid email address.");
      return;
    }

    const formData = new FormData();

    try {
      formData.append("email", email);
      setLoading(true);
      setError("");

      const response = await HiringFormData(formData);

      if (response.status === "mail_sent") {
        setSuccess(true);

        if (isHiringModalOpen) {
          closeHiringModal();
          toast.success("Successfully submitted!");
        }
      } else {
        setError(
          response.message ||
            "An unexpected error has occurred, please try again.",
        );
      }
    } catch (error) {
      console.error("Error preparing form data:", error);
      setError("An unexpected error has occurred, please try again.");
      setLoading(false);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-wrapper p-1.5 max-w-187.5 rounded-[200px] border border-[#6B1AFF] w-full mx-auto mt-8 sm:mt-11 lg:mt-14">
        <form
          className="form-inner flex items-center bg-white overflow-hidden rounded-[200px]"
          onSubmit={handleSubmit}
        >
          <input
            disabled={loading || success}
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Work Email Address *"
            required
            className="w-full short-form-control input-field"
          />
          <div className="flex">
            <button
              disabled={loading || success}
              type="submit"
              className="form-btn cursor-pointer disabled:cursor-default disabled:opacity-85"
            >
              {loading ? "Submitting..." : "Start Hiring"}
            </button>
          </div>
        </form>
      </div>
      {success && (
        <p className="text-green-500 text-sm mt-1.5 text-center">
          Thank you for your message. It has been sent.
        </p>
      )}
      {error && <p className="text-red-500 text-sm mt-1.5">{error}</p>}
    </>
  );
};

export default HiringForm;
