import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-8 lg:py-12.5 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-7.5">
            <div className="logo-wrapper max-w-40 sm:max-w-50">
              <img src="/images/logo.png" alt="" />
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
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67038ab42d33780dceb0022d_Twitter.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67038a6aa15fd2cfecf581aa_link3ein.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67038a6cdda79f74446ea577_insta.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67038a6a0051cbea7768c6ad_fb.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/6834d76bf55868ebcdedd4a4_youtube.svg"
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
