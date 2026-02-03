import React from "react";

const RecruitmentContent = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-12.5">
        <div className="max-w-125 w-full bg-primary p-9 rounded-[28px] gap-9.5 flex flex-col items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="img-wrapper w-12">
              <img
                src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67033c2ab2b47bea8e5df7f1_pricing-icon.svg"
                alt=""
                className="w-full! h-full! object-contain"
              />
            </div>

            <h3 className="text-white! font-semibold!">Pavago Membership</h3>

            <div className="text-center">
              <h2 className="text-white! font-normal!">
                {" "}
                <span className="font-semibold!">$500</span>/Year
              </h2>

              <p className="text-white! fs-20">Billed annually</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitmentContent;
