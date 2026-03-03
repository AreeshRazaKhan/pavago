import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-8 lg:py-12.5 px-3 md:px-4 lg:px-5 shadow-[0_0_35px_#00000014]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-7.5">
            <div className="logo-wrapper max-w-40 sm:max-w-50">
              <img src="/images/logo.webp" alt="" />
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-7.5">
              <a href="#" className="fs-18 text-black!">
                Terms & Conditions
              </a>
              <div className="fs-18 text-black!">|</div>

              <a href="#" className="fs-18 text-black!">
                Privacy Policy
              </a>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#">
                <img
                  src="/images/Twitter.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="/images/link3ein.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="/images/insta.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="/images/fb.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="/images/youtube.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
