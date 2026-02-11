import React from "react";

const BundlesContent = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-9 lg:gap-12.5">
        <div className="max-w-125 w-full bg-white px-6 py-9 lg:p-9 rounded-[28px] gap-7 lg:gap-9.5 flex flex-col items-center shadow-[0_5px_50px_#0000001a]">
          <div className="flex flex-col items-center gap-6">
            <div className="img-wrapper w-12">
              <img
                src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c2ab2b47bea8e5df7f1_pricing-icon.svg"
                alt=""
                className="w-full! h-full! object-contain"
              />
            </div>

            <h3 className=" font-semibold!">Bundle Pricing</h3>

            <div className="text-center">
              <p className="text-[#333]! fs-20">1 Hire = $4k</p>
              <p className="text-[#333]! fs-20">3 Hires = $10k</p>
              <p className="text-[#333]! fs-20">1 Hire = $4k</p>
            </div>
          </div>

          <ul className="flex flex-col gap-4 lg:gap-5 w-full text-[#333]!">
            <li className="flex items-center gap-4">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c9de5b263a2157d512e_check-blue.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <span>90 day guarantee from the start date of hire.</span>
            </li>

            <li className="flex items-center gap-4">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c9de5b263a2157d512e_check-blue.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <span>
                Deposit of $1000 at time of contract signing, remainder on day
                of onboarding.
              </span>
            </li>
          </ul>

          <hr className="w-full text-primary" />

          <a href="#" className="w-full btn btn-lg btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default BundlesContent;
