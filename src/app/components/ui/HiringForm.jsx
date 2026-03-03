"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiringFormData } from "@/server/actions";

const HiringForm = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
        alert("Thank you for your interest! We will get back to you soon.");
        setEmail("");
      } else {
        setError(response.message || "An unexpected error has occurred, please try again.");
      }

    } catch (error) {
      console.error("Error preparing form data:", error);
      setError("An unexpected error has occurred, please try again.");
      setLoading(false);
      return;
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="form-wrapper p-1.5 max-w-187.5 rounded-[200px] border border-[#6B1AFF] w-full mx-auto mt-8 sm:mt-11 lg:mt-14">
        <form className="form-inner flex items-center bg-white overflow-hidden rounded-[200px]" onSubmit={handleSubmit}>
          <input
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Work Email Address *"
            required
            className="w-full short-form-control input-field"
          />
          <div className="flex">
            <button
              disabled={loading}
              type="submit" className="form-btn cursor-pointer">
              {loading ? "Submitting..." : "Start Hiring"}
            </button>
          </div>
        </form>
      </div>
      {error && <p className="text-red-500 text-sm mt-1.5">{error}</p>}
    </>
  );
};

export default HiringForm;
