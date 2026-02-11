"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What roles can I hire through Pavago?",
    answer:
      "Whatever roles are remote, we can find. If it can be done remotely, we can recruit for it — including Sales, Marketing, Admin/Operations, Finance, IT & Engineering, Product, and more based on your needs.",
  },
  {
    id: 2,
    question: "Which countries or regions do you source talent from?",
    answer:
      "We commonly source talent from Latin America, Pakistan, and South Africa. The best region depends on the role, required time zone overlap, and budget.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <>
      <section className="bg-primary py-70 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <h2 className="font-semibold! text-center text-white!">
            Frequently Ask Questions
          </h2>

          <div className="mt-50">
            <div className="faq-wrapper flex flex-col gap-5 lg:gap-6">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="py-4 md:py-5 lg:py-6 border-b border-[#fff3]"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex w-full cursor-pointer items-center justify-between outline-none ps-5 pb-4 pe-8 md:ps-6 lg:ps-7.5 md:pb-5 lg:pb-6 md:pe-10 lg:pe-20"
                  >
                    <h3 className="font-semibold! text-[#e6e6e6]! text-left">
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
                        <p className="p-5 md:p-6 lg:p-7.5 pt-0 text-white! fs-18">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-18 md:mt-22 lg:mt-27.5">
            <div className="flex flex-col justify-center">
              <h3 className="text-white! underline font-inter">
                Still have questions?
              </h3>

              <img
                src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67038359125260b47d274571_arrow-2.svg"
                alt=""
                className="self-end -mt-5 -mb-12.5 translate-x-full h-[75%]! md:h-auto!"
              />

              <button className="btn btn-white font-semibold! cursor-pointer shadow-[0_5px_50px_#8eb4ff]">
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
