import React from "react";

const BundlesContent = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-md bg-white text-gray-800 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl border border-gray-100">
          <div className="bg-[#8ba6ff] p-3 rounded-full mb-4"></div>

          <h3 className="text-2xl font-bold mb-6">Bundle Pricing</h3>

          <div className="space-y-2 mb-8 text-lg text-gray-700 font-medium">
            <p>1 Hire = $4k</p>
            <p>3 Hires = $10k</p>
            <p>5 Hires = $12k</p>
          </div>

          <ul className="space-y-4 text-left w-full mb-8 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <div className="bg-[#2b4cbf] rounded-full p-0.5 mt-0.5 flex-shrink-0"></div>
              <span>90 day guarantee from the start date of hire.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#2b4cbf] rounded-full p-0.5 mt-0.5 flex-shrink-0"></div>
              <span>
                Deposit of $1000 at time of contract signing, remainder on day
                of onboarding.
              </span>
            </li>
          </ul>

          <div className="w-full border-t border-gray-200 pt-6 mt-auto">
            <button className="w-full bg-[#2b4cbf] text-white font-bold py-3 rounded-full hover:bg-[#233f9e] transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BundlesContent;
