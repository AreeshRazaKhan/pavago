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
            <h2 className="font-semibold">
              We'll Find Your Next Offshore A Player In 21 Days or Less.
            </h2>
            <p className="fs-20">
              Here's our five step offshore recruitment process that finds you A
              players across the world.
            </p>
          </div>

          <div className="mt-50">
            <div className="flex justify-center gap-y-5 flex-wrap -mx-5">
              <div className="w-full md:w-1/2 lg:w-1/3 px-5 ">
                <div className="card p-5 flex flex-col items-center gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/672de5e2c7833bd205daf32d_1.svg"
                      alt=""
                    />
                  </div>
                  <h3>1. Discovery Call</h3>
                  <p>
                    We learn about your needs. We explain our abilities. We
                    decide together if we are a good fit.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-5 ">
                <div className="card p-5 flex flex-col items-center gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/672de5e21f57211a3e6e6ab2_2.svg"
                      alt=""
                    />
                  </div>
                  <h3>2. Client Launch</h3>
                  <p>
                    We analyse every aspect: Skills, Profile, and Cultural Fit
                    to find your perfect match.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-5 ">
                <div className="card p-5 flex flex-col items-center gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/672de5e22bfd0fdd82f906af_3.svg"
                      alt=""
                    />
                  </div>
                  <h3>3. A Player Search</h3>
                  <p>
                    We combine local expertise and our proven AI system to find
                    your perfect A Player.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-5 ">
                <div className="card p-5 flex flex-col items-center gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/672de5e2ea45bd1756f6a2c5_4.svg"
                      alt=""
                    />
                  </div>
                  <h3>4. Screening & interviews</h3>
                  <p>
                    Simple 3 steps process: candidate video, our interview, then
                    your final interview with our support.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-5 ">
                <div className="card p-5 flex flex-col items-center gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/672de5e22998b4f8d88bf26e_5.svg"
                      alt=""
                    />
                  </div>
                  <h3>5. A Player talent secured!</h3>
                  <p>
                    Together, we choose your ideal candidate who's ready to
                    deliver results.
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
