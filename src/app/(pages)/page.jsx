import CTA from "../components/cta/CTA";
import Membership from "../components/membership/Membership";
import OurProcess from "../components/our-process/OurProcess";
import OurPricing from "../components/pricing/OurPricing";
import ProcessHighlight from "../components/process-highlight/ProcessHighlight";
import Testimonials from "../components/testimonials/Testimonials";
import PulseBadge from "../components/ui/PulseBadge";

export default function Home() {
  return (
    <>
      <section className="hero-section pt-45 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto border border-red-500">
          <div className="max-w-225 mx-auto text-center border border-red-500">
            <PulseBadge paragraph={"Build Your Dream 'A Team' Today"} />
            <h1 className="mt-6">
              Helping Businesses Build Global Teams With{" "}
              <span className="font-semibold">A Player Offshore Talent</span>
            </h1>
            <p className="fs-28 mt-6">
              We specialize in offshore recruitment for companies that want
              A‑players only. Our process is built to identify, vet, and deliver
              elite offshore talent for remote roles with high impact.
            </p>

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

            <div className="text-center flex flex-col justify-center items-center">
              <p className="fs-12 text-center mt-10">
                Join 150+ Bussinesses Already Growing With Pavago's Offshore
                Recruitment Services
              </p>

              <div className="mt-12.5 flex items-center justify-center gap-7.5">
                <div className="logo-wrapper">
                  <img
                    src="http://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2fc6d5023c45b6aa49_poologylogo.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2ed71dd6de112829ad_61a6d383cb96d58bea293d9c_Logo%20on%20Login%20Page%20800x277.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2f6f7e3fa2373326a6d5_integrative-dental-wellness.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2f994730a191af16f5_65006e189db2c329b4eb2027_222-p-500.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2f00c981b49f3d98ff_logo-1-e1654696869257.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />

      <ProcessHighlight />

      <OurPricing />

      <Membership />

      <Testimonials />

      <CTA />
    </>
  );
}
