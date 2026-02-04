import React from "react";

const HiringForm = () => {
  return (
    <>
      <div className="form-wrapper p-2 max-w-187.5 rounded-[200px] border border-[#0e4dc7] w-full mx-auto mt-14">
        <div className="form-inner flex items-center bg-white overflow-hidden rounded-[200px]">
          <input
            type="text"
            placeholder="Work Email Address *"
            required
            className="w-full short-form-control input-field"
          />
          <div className="flex">
            <button type="submit" className="form-btn cursor-pointer">
              Start Hiring
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringForm;
