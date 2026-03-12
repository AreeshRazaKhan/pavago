import React from "react";
import CTA from "@/app/components/cta/CTA";
import FAQ from "@/app/components/faq/FAQ";
import OurPricing from "@/app/components/pricing/OurPricing";
import Testimonials from "@/app/components/testimonials/Testimonials";
import HiringForm from "@/app/components/ui/HiringForm";
import HiringButton from "@/app/components/ui/HiringButton";
import { getSingleSubService } from "@/services/services.service";
import HiringModal from "@/app/components/modal/HiringModal";
import { formatMetadata, formatSchema } from "@/utils/seo";

export async function generateMetadata({ params }) {
  const { subServiceSlug } = await params;
  const data = await getSingleSubService(subServiceSlug);

  return formatMetadata(data) || { title: "Prismolix" };
}

const Page = async ({ params }) => {
  const { subServiceSlug } = await params;
  const data = await getSingleSubService(subServiceSlug);

  if (!data) return <div className="pt-40 text-center">Service not found.</div>;

  const { acf } = data;
  const cleanSchema = formatSchema(data);

  return (
    <>
      {cleanSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
        />
      )}

      <section className="pt-32 sm:pt-40 lg:pt-45 pb-20 px-3 md:px-4 lg:px-5 about-hero-section bg-[#f2ebff]! bg-[url('/images/hero-section-bg.svg')]! bg-top bg-no-repeat">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="font-h2 text-center" id="mainTitle">
              {acf?.main_title || data.title.rendered}
            </h1>
            <p className="text-center fs-22 mt-6" id="mainParagraph">
              {acf?.main_paragraph}
            </p>

            <HiringForm />
          </div>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2" id="firstSectionTitle">
              <h2>{acf?.first_section_title}</h2>
              <p className="fs-20 mt-10" id="firstSectionParagraph">
                {acf?.first_section_paragraph}
              </p>
              <HiringButton className="btn btn-primary font-semibold! cursor-pointer mt-10">
                Start Hiring
              </HiringButton>
            </div>

            <div className="w-full lg:w-2/5">
              <img src="/images/illustration-1.svg" alt="Illustration" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-2/5">
              <img src="/images/illustration-2.svg" alt="Illustration" />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 id="secondSectionTitle">{acf?.second_section_title}</h2>

              <ul
                className="flex flex-col gap-4 lg:gap-5 w-full text-[#333]! mt-10 fs-18"
                id="secondSectionBullets"
              >
                {acf?.second_section_bullets?.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                      <img
                        src="/images/tick.svg"
                        className="w-full! h-full! object-contain"
                        alt="Tick"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span>{item.bullets_points}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <HiringButton className="btn btn-primary font-semibold! cursor-pointer mt-10">
                Start Hiring
              </HiringButton>
            </div>
          </div>
        </div>
      </section>

      <OurPricing />
      <Testimonials />

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-3.5 max-w-200 mx-auto">
            <h2 className="font-semibold! m-auto text-center">
              Beyond Offshore Recruitment: Our Ecosystem for Your Long-Term
              Success
            </h2>

            <p className="fs-20 text-center">
              Recruiting through Prismolix means more than just acquiring top
              talent. You’ll benefit from our comprehensive ecosystem of support
              services, ensuring your new remote {data.title.rendered} succeeds
              and integrates seamlessly into your business operations.
            </p>
          </div>

          <div className="mt-50">
            <div className="flex justify-center gap-y-3 md:gap-y-4 lg:gap-y-5 flex-wrap xl:-mx-5">
              {[
                {
                  img: "save-cost.svg",
                  title: "Simplified Compensation",
                  p: "Forget about the stresses of payroll. We process all payments, so you can focus on building your business.",
                },
                {
                  img: "save-time.svg",
                  title: "Regulatory Confidence",
                  p: "Remain compliant with all necessary regulations without the worry. We handle all of the legalities for you.",
                },
                {
                  img: "badge.svg",
                  title: "Continuous Upskilling",
                  p: `Your new remote ${data.title.rendered} will receive ongoing coaching to stay atop of market shifts.`,
                },
                {
                  img: "bolt.svg",
                  title: "Committed Assistance",
                  p: "Enjoy peace of mind with our committed support staff, ready to help you at every stage.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 mb-5"
                >
                  <div className="card p-5 flex flex-col items-center gap-3 md:gap-4 text-center h-full">
                    <div className="img-wrapper w-13.25">
                      <img src={`/images/${card.img}`} alt={card.title} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTA
        heading={"Ready to Scale Your Vision with Top-Tier Offshore Talent?"}
        para={"Schedule Your Complimentary Consultation Today!"}
      />

      <HiringModal />
    </>
  );
};

export default Page;
