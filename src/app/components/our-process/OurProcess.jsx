import React from "react";

const OurProcess = () => {
  return (
    <>
      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-3.5">
            <span className="font-poppins text-primary font-semibold">
              Our Process
            </span>
            <h2 className="font-semibold! max-w-175 m-auto text-center">
              Your Elite International Talent Found Within 21 Days Guaranteed.
            </h2>
            <p className="fs-20 text-center">
              Discover our five phase global hiring strategy that locates top
              talent throughout the globe.
            </p>
          </div>

          <div className="mt-50">
            <div className="flex justify-center gap-y-3 md:gap-y-4 lg:gap-y-5 flex-wrap xl:-mx-5">
              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-[52px] h-[52px]">
                    <img src="/images/icon-1.svg" alt="" />
                  </div>
                  <h3>1. Strategic Consultation</h3>
                  <p>
                    We analyze your goals. We demonstrate our skills. We
                    determine jointly if our partnership works.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-[52px] h-[52px]">
                    <img src="/images/icon-2.svg" alt="" />
                  </div>
                  <h3>2. Strategic Onboarding</h3>
                  <p>
                    We evaluate each factor: Talent, Persona, and Synergy
                    Alignment to secure your ideal candidate.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-[52px] h-[52px]">
                    <img src="/images/icon-3.svg" alt="" />
                  </div>
                  <h3>3. Top Talent Search</h3>
                  <p>
                    We merge regional insight and our validated AI network to
                    locate your ideal Professional.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-[52px] h-[52px]">
                    <img src="/images/icon-4.svg" alt="" />
                  </div>
                  <h3>4. Evaluation & Meetings</h3>
                  <p>
                    Direct 3 stage method: applicant recording, our assessment,
                    then your closing discussion with our guidance.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-[52px] h-[52px]">
                    <img src="/images/icon-5.svg" alt="" />
                  </div>
                  <h3>5. Top Talent Hired!</h3>
                  <p>
                    Collectively, we select your perfect hire who is prepared to
                    achieve targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
