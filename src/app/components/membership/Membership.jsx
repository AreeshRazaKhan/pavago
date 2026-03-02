import React from "react";

const Membership = () => {
  return (
    <>
      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-3.5  max-w-225 m-auto">
            <span className="font-poppins text-primary font-semibold">
              Partner Benefits
            </span>
            <h2 className="font-semibold! text-center">
              Past Global Staffing Solutions, Guidance for Your Growth
            </h2>
            <p className="fs-20 text-center">
              Recruiting via Prismolix provides more than just obtaining elite
              global staff. You'll gain from our complete suite of assistance
              tools to guarantee your fresh recruits excel and blend perfectly
              into your company.
            </p>
          </div>

          <div className="mt-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 md:gap-x-6 lg:gap-x-8 md:gap-y-8.5 lg:gap-y-10.5">
              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-9 lg:py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="md:mt-2 md:mb-3 lg:mt-2.5 lg:mb-4 leading-tight text-center">
                  Regulatory Security
                </h3>
                <p className="text-center">
                  Remain aligned with every necessary guideline without the
                  hassle. We handle all the formalities for you.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-9 lg:py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="md:mt-2 md:mb-3 lg:mt-2.5 lg:mb-4 leading-tight text-center">
                  Financial Administration
                </h3>
                <p className="text-center">
                  Ignore about the burdens of salaries. We manage all
                  disbursements, so you may concentrate on expanding your
                  company.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-9 lg:py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="md:mt-2 md:mb-3 lg:mt-2.5 lg:mb-4 leading-tight text-center">
                  Continuous Coaching
                </h3>
                <p className="text-center">
                  Your fresh staff recruits shall undergo persistent development
                  to remain atop market patterns and enhance their expertise.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-9 lg:py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="md:mt-2 md:mb-3 lg:mt-2.5 lg:mb-4 leading-tight text-center">
                  Committed Assistance
                </h3>
                <p className="text-center">
                  Experience complete confidence with our focused support squad,
                  prepared to guide you and your recruits throughout.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-9 lg:py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="md:mt-2 md:mb-3 lg:mt-2.5 lg:mb-4 leading-tight text-center">
                  Systems & Portal
                </h3>
                <p className="text-center">
                  You gain entry to our validated suite of SOPs, which have
                  delivered us results in our company.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-9 lg:py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="md:mt-2 md:mb-3 lg:mt-2.5 lg:mb-4 leading-tight text-center">
                  Effortless Integration
                </h3>
                <p className="text-center">
                  We support with the startup phase to guarantee your fresh
                  global expert blends perfectly into your squad.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-13 md:mt-15  lg:mt-20">
            <a
              href="#"
              className="btn btn-lg btn-primary shadow-[0_5px_50px_#B57AFF] inline-flex"
            >
              Secure Your Global Elite
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
