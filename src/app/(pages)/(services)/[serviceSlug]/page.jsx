import CTA from "@/app/components/cta/CTA";
import FAQ from "@/app/components/faq/FAQ";
import OurPricing from "@/app/components/pricing/OurPricing";
import Link from "next/link";
import React, { Suspense } from "react";
import {
  getServiceCategory,
  getSubServicesByCategoryId,
} from "@/services/services.service";

const page = async ({ params }) => {
  const { serviceSlug } = await params;

  const category = await getServiceCategory(serviceSlug);

  if (!category) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="mt-4">The requested service group does not exist.</p>
        <Link href="/" className="text-blue-500 underline mt-4 block">
          Return Home
        </Link>
      </div>
    );
  }

  const subServices = await getSubServicesByCategoryId(category.id);
  const { acf } = category;

  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="font-h2 text-center" id="title">
              {acf?.title || category.name}
            </h1>

            <p className="text-center fs-22 mt-6" id="subTitle">
              {acf?.sub_title}
            </p>

            <div
              className="flex justify-center items-center gap-3.5 mt-50 flex-wrap"
              id="subServiceBtn"
            >
              {subServices?.length > 0 ? (
                subServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${serviceSlug}/${service.slug}`}
                    className="category-list-btn text-center"
                  >
                    {service.title.rendered}
                  </Link>
                ))
              ) : (
                <p className="text-gray-500">Coming soon...</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTA heading={acf?.cta_heading} para={acf?.cta_paragraph} />
      <OurPricing />
      <FAQ />
    </>
  );
};

export default page;
