import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-12.5 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-7.5">
            <div className="logo-wrapper max-w-62.5">
              <img src="/images/logo.png" alt="" />
            </div>
            <div className="flex items-center justify-center gap-7.5">
              <a href="#" className="fs-18 text-black!">
                Terms & Conditions
              </a>
              <div className="fs-18 text-black!">|</div>

              <a href="#" className="fs-18 text-black!">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
