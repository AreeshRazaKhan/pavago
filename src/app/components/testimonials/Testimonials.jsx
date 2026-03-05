"use client";
import React from "react";
import PulseBadge from "../ui/PulseBadge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Marcus Thorne",
    company: "Thorne Strategy Group",
    text: "Working with Prismolix has been a game-changer for our internal operations. I run a specialized tech consulting firm, and we needed two offshore placements to manage our backend workflows. The team was incredibly responsive and, most importantly, found us candidates who actually understood our company culture. We will definitely be returning to Prismolix for our future hiring needs.",
  },
  {
    id: 2,
    name: "Julian Vance",
    company: "Peak Shield Roofing",
    text: "I started with a single offshore administrative assistant from Prismolix to test the waters. I was so impressed by the quality of talent that within a month, I decided to hire a full-time remote salesperson through them as well. They presented top-tier candidates for both roles in under a week. The ROI has been immediate.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "NexaFlow Systems",
    text: "I’ve experimented with various offshore SDR agencies in the past, but the quality of candidates from Prismolix is on another level. Their vetting process is clearly rigorous. The transition was smooth, and our new remote representatives were hitting their outreach KPIs within their first ten days.",
  },
  {
    id: 4,
    name: "David Chen",
    company: "Ironwood Property Mgmt",
    text: "Been working with Prismolix for a few months for our back-office support. What sets them apart is their accessibility. The leadership team doesn't just 'fill a seat'; they provide on-demand consulting to ensure the remote integration is successful. They have become an essential partner in our property management business.",
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    company: "BrightPath EdTech",
    text: "Finding senior-level developers locally was becoming a bottleneck for our product roadmap. Prismolix helped us source an elite offshore Full-Stack Engineer who integrated perfectly into our development environment. We saved nearly 60% on overhead while actually increasing our sprint velocity.",
  },
  {
    id: 6,
    name: "Liam O’Shea",
    company: "Verve Digital",
    text: "We needed a UI/UX designer who could handle fast-paced pivots for our startup. Prismolix connected us with a creative lead whose portfolio was world-class. The communication has been flawless despite the time zone difference, and the talent level surpassed several local agencies we interviewed.",
  },
  {
    id: 7,
    name: "Amara Okafor",
    company: "Horizon Finance Partners",
    text: "Bringing on an offshore finance specialist was a big step for our small business, but Prismolix made it risk-free. Our new remote accountant is meticulous with our ledger and tax prep. Their 3-week onboarding process ensured all our security protocols were met before day one.",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="py-70 px-3 md:px-4 lg:px-5 bg-[#F2EBFF] testimonials-section">
        <div className="container mx-auto">
          <div className="text-center flex flex-col gap-3.5">
            <span className="font-poppins  font-semibold">Testimonials</span>

            <PulseBadge
              paragraph={"Direct Feedback From Business Leaders Like You"}
            />
          </div>

          <div className="mt-50">
            <Swiper
              slidesPerView={1}
              modules={[Autoplay, Navigation]}
              navigation={true}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="text-center ">
                    <p className="fs-22">{testimonial.text}</p>

                    <div className="flex flex-col items-center gap-4 md:gap-5 mt-5 md:mt-6.5">
                      <div>
                        <p className="person-name fs-20 font-semibold! font-poppins">
                          {testimonial.name}
                        </p>
                        <p className="company-name">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
