"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "Which positions can I fill through Prismolix?",
    answer:
      "Any role that is remote, we can secure. If it is possible to perform the work digitally, we can staff it — encompassing Sales, Marketing, Admin/Operations, Finance, IT & Engineering, Product, and additional fields based on your requirements.",
  },
  {
    id: 2,
    question: "From which locations or territories do you recruit experts?",
    answer:
      "We frequently source professionals from Latin America, Pakistan, and South Africa. The ideal territory is determined by the specific position, necessary schedule alignment, and your financial plan.",
  },
  {
    id: 3,
    question: "Do candidates truly have experience with American firms?",
    answer:
      "We focus on applicants who have a history of collaborating with U.S.-based organizations and can function within American professional standards regarding dialogue, accountability, and performance. You will still conduct the interviews and select the individual you prefer, allowing you to verify the match personally.",
  },
  {
    id: 4,
    question: "Is the global talent full-time and committed to my company?",
    answer:
      "We source remote professionals based on the operational model you require. For specific positions (such as Virtual Assistants), we provide dedicated recruits who function solely within your squad.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <>
      <section className="bg-[#F2EBFF] py-70 px-3 md:px-4 lg:px-5 overflow-x-hidden">
        <div className="container mx-auto">
          <h2 className="font-semibold! text-center">
            Frequently Ask Questions
          </h2>

          <div className="mt-50">
            <div className="faq-wrapper flex flex-col gap-5 lg:gap-6">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="py-4 md:py-5 lg:py-6 gradient-line relative"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex w-full cursor-pointer items-center justify-between outline-none ps-5 pb-4 pe-8 md:ps-6 lg:ps-7.5 md:pb-5 lg:pb-6 md:pe-10 lg:pe-20"
                  >
                    <h3 className="font-semibold!  text-left">
                      {item.question}
                    </h3>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeId === item.id && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <p className="p-5 md:p-6 lg:p-7.5 pt-0!  fs-18">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12 sm:mt-18 md:mt-22 lg:mt-27.5">
            <div className="flex flex-col justify-center">
              <h3 className=" underline font-inter">Still have questions?</h3>

              <img
                src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67038359125260b47d274571_arrow-2.svg"
                alt=""
                className="self-end -mt-5 -mb-12.5 translate-x-full h-[65%]! sm:h-[75%]! md:h-auto! arrow"
              />

              <button className="btn btn-white font-semibold! cursor-pointer shadow-[0_10px_50px_#b57aff8c]">
                Schedule a call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
