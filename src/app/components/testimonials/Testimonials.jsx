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
    name: "Nik Fuller",
    company: "FLLR Consulting",
    companyLogo:
      "https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670ceee5aca62063e54ddb49_FLLR%2BLogo-Horizontal-Full%2BColor%2BKnockout.webp",
    text: "Hey. Just want to give a review on Pavago. My name is Nick Fuller. I run a consulting company in the technology space, and we use Pavago for two offshore placements, two different operation resources to help run the back end for our consulting firm. The team has been amazing to work with. Super responsive, really able to find us the right talent that we're looking for, the right culture, fit for the company. We'll definitely use Pavago again for any other placement needs that we have. Highly, highly recommend working with this team here",
  },

  {
    id: 2,
    name: "Cole",
    company: "Mighty Dog Roofing",
    companyLogo:
      "https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670cf2df7d18b9fa0612f554_mighty-dog-roofing.webp",
    text: "I was so happy with Pavago, that I started with one offshore va and then I decided to move forward with a offshore salesperson too and I was presented with candidates for both roles within a week.",
  },

  {
    id: 3,
    name: "Nik Hulewsky",
    company: "Cofounders",
    companyLogo:
      "https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670cf41e6de0b9f5f3f450b5_cofounders.webp",
    text: "I have used other offshore SDRs before, but I was super impressed with candidate quality and how smooth the process was with Pavago's Offshore Recuritment",
  },

  {
    id: 4,
    name: "Carlos Rovira",
    company: "Rovira Property Management",
    companyLogo:
      "https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670cf20a4e0b67cd2a33e118_rovira-property-managementlarge-logo.avif",
    text: "Been working with Pavago for a few months. They helped me hire a offshore VA to work on back office tasks. So far I am very happy with them. Their responsiveness is great and the company owner (Parker) makes himself available to me for consulting on demand. He is a great knowledge source and has been an excellent partner thus far.",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="py-70 px-3 md:px-4 lg:px-5 bg-primary testimonials-section">
        <div className="container mx-auto">
          <div className="text-center flex flex-col gap-3.5">
            <span className="font-poppins text-white font-semibold">
              Testimonials
            </span>

            <PulseBadge paragraph={"Straight Talk From Biz Owners Like You"} />
          </div>

          <div className="mt-50">
            <Swiper
              slidesPerView={1}
              modules={[Autoplay, Navigation]}
              navigation={true}
              spaceBetween={30}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="text-center text-white">
                    <p className="fs-22">{testimonial.text}</p>

                    <div className="flex flex-col items-center gap-4 md:gap-5 mt-5 md:mt-6.5">
                      <div className="logo-wrapper max-w-25 w-25 h-10 max-h-10 md:max-w-30 md:w-30 md:h-15 md:max-h-15">
                        <img
                          src={testimonial.companyLogo}
                          className="w-full! h-full! object-contain"
                        />
                      </div>
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
