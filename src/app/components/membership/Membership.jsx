import React from "react";

const Membership = () => {
  return (
    <>
      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-3.5  max-w-225 m-auto">
            <span className="font-poppins text-primary font-semibold">
              Membership Perks
            </span>
            <h2 className="font-semibold! text-center">
              Beyond Offshore Recruitment Services, Support for Your Success
            </h2>
            <p className="fs-20 text-center">
              Hiring through Pavago means more than just getting top offshore
              talent. You’ll benefit from our full range of support services to
              ensure your new hires succeed and integrate seamlessly into your
              business
            </p>
          </div>

          <div className="mt-50">
            <div className="grid grid-cols-3 gap-x-10 gap-y-12.5">
              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="mt-2.5 mb-4 leading-tight text-center">
                  Compliance Assurance
                </h3>
                <p className="text-center">
                  Stay compliant with all relevant regulations without the
                  stress. We take care of all the legalities for you.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="mt-2.5 mb-4 leading-tight text-center">
                  Payroll Management
                </h3>
                <p className="text-center">
                  Forget about the hassles of payroll. We handle all payments,
                  so you can focus on growing your business.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="mt-2.5 mb-4 leading-tight text-center">
                  Ongoing Training
                </h3>
                <p className="text-center">
                  Your new team members will receive continuous training to stay
                  ahead of industry trends and improve their skills.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="mt-2.5 mb-4 leading-tight text-center">
                  Dedicated Support
                </h3>
                <p className="text-center">
                  Enjoy peace of mind with our dedicated support team, ready to
                  assist you and your hires at every step.
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="mt-2.5 mb-4 leading-tight text-center">
                  SOPs & Forum
                </h3>
                <p className="text-center">
                  You get access to our proven set of SOPs, that have brought us
                  success in our business
                </p>
              </div>

              <div className="card bg-white shadow-[0_5px_40px_#0000001a] py-12.5 px-5 rounded-[20px] flex flex-col items-center gap-3.5">
                <div className="icon-wrapper w-13">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67026aa0ed5bb8f3280a2c08_icon-1.svg"
                    alt=""
                  />
                </div>

                <h3 className="mt-2.5 mb-4 leading-tight text-center">
                  Seamless Onboarding
                </h3>
                <p className="text-center">
                  We assist with the onboarding process to ensure your new
                  offshore professional integrates seamlessly into your team.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <a
              href="#"
              className="btn btn-lg btn-primary shadow-[0_5px_50px_#8eb4ff] inline-flex"
            >
              Find Your Offshore A Player
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
