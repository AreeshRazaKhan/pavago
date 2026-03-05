import React from "react";
import HiringButton from "../../ui/HiringButton";

const RecruitmentContent = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col md:flex-row gap-9 lg:gap-12.5">
        <div className="max-w-125 w-full bg-primary px-6 py-9 lg:p-9 rounded-[28px] gap-7 lg:gap-9.5 flex flex-col items-center shadow-[0_5px_50px_#0000001a]">
          <div className="flex flex-col items-center gap-5 md:gap-6">
            <div className="img-wrapper w-12">
              <img
                src="/images/stacks.svg"
                alt=""
                className="w-full! h-full! object-contain"
              />
            </div>

            <h3 className="text-white! font-semibold!">Prismolix Membership</h3>

            <div className="text-center">
              <h2 className="text-white! font-normal!">
                {" "}
                <span className="font-semibold!">$500</span>/Year
              </h2>

              <p className="text-white! fs-20">Billed annually</p>
            </div>
          </div>

          <ul className="flex flex-col gap-4 lg:gap-5 w-full">
            <li className="flex items-center gap-4 text-white">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c9d2759a79b03517daa_check-white.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <span>Unlimited, No-Cost Placements</span>
            </li>

            <li className="flex items-center gap-4 text-white">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c9d2759a79b03517daa_check-white.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <span>Ongoing Training(Client Track, Candidate Track)</span>
            </li>

            <li className="flex items-center gap-4 text-white">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c9d2759a79b03517daa_check-white.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <span>All-In Administrative HR</span>
            </li>

            <li className="flex items-center gap-4 text-white">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c9d2759a79b03517daa_check-white.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <span>Access to SOP Forum/Help Centre</span>
            </li>

            <li className="flex items-center gap-4 text-white">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c9d2759a79b03517daa_check-white.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <span>Forever Replacement Guaranteed</span>
            </li>
          </ul>

          <hr className="w-full text-[#ffffff4d]" />

          <h3 className="text-white!">
            Per Candidate <span className="font-bold">$329</span>/Month
          </h3>

          <HiringButton className="w-full btn btn-lg btn-white font-semibold! cursor-pointer mt-10">
            Secure Your Global Elite
          </HiringButton>
        </div>

        <div className="max-w-125 w-full bg-white px-6 py-9 lg:p-9 rounded-[28px] gap-7 lg:gap-9.5 flex flex-col items-center shadow-[0_5px_50px_#0000001a]">
          <div className="flex flex-col items-center gap-5 md:gap-6">
            <div className="img-wrapper w-12">
              <img
                src="/images/stacks.svg"
                alt=""
                className="w-full! h-full! object-contain"
              />
            </div>

            <h3 className=" font-semibold!">Basic Package</h3>

            <div className="text-center">
              <h2 className="text-[#333]! font-normal!">A La Carte</h2>

              <p className="text-[#333]! fs-20">As Needed</p>
            </div>
          </div>

          <ul className="flex flex-col gap-4 lg:gap-5 w-full text-[#333]!">
            <li className="flex items-center gap-4">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="/images/tick.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span>Sourcing Fee (60 Day Guarantee)</span>
                <span className="fs-20 font-bold">$4000</span>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="/images/tick.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span>Concierge Onboarding (Optional)</span>
                <span className="fs-20 font-bold">$1000</span>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                <img
                  src="/images/tick.svg"
                  className="w-full! h-full! object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span>Placement Protection Plan (Optional)</span>
                <span className="fs-20 font-bold">$180/mo</span>
              </div>
            </li>
          </ul>

          <hr className="w-full text-primary" />

          <h3 className="text-primary font-semibold!">Recruitment Only</h3>

          <HiringButton className="w-full btn btn-lg btn-primary font-semibold! cursor-pointer mt-10">
            Secure Your Global Elite
          </HiringButton>
        </div>
      </div>
    </>
  );
};

export default RecruitmentContent;
