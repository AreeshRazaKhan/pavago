import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-8 lg:py-12.5 px-3 md:px-4 lg:px-5 shadow-[0_0_35px_#00000014]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-7.5">
            <div className="logo-wrapper max-w-40 sm:max-w-50">
              <img width={200} height={40} src="/images/logo.webp" alt="Logo" />
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-7.5">
              <Link href={"/terms-&-conditions"} className="fs-18 text-black!">
                Terms & Conditions
              </Link>
              <div className="fs-18 text-black!">|</div>

              <Link href={"/privacy-policy"} className="fs-18 text-black!">
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="#"
                aria-label="Visit our Twitter profile"
              >
                <img
                  src="/images/Twitter.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </Link>

              <Link
                href="#"
                aria-label="Visit our LinkedIn profile"
              >
                <img
                  src="/images/link3ein.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </Link>

              <Link
                href="#"
                aria-label="Visit our Instagram profile"
              >
                <img
                  src="/images/insta.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </Link>

              <Link
                href="#"
                aria-label="Visit our Facebook page"
              >
                <img
                  src="/images/fb.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </Link>

              <Link
                href="#"
                aria-label="Visit our YouTube channel"
              >
                <img
                  src="/images/youtube.svg"
                  alt=""
                  className="w-8! h-8! sm:w-9! sm:h-9!"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
