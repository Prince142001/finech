import React from "react";
import LogoDark from "../../assets/logo-dark.png";
import BackgrounPattern from "../../assets/Background-Pattern.png";

function Footer() {
  const listClass =
    "space-y-2 text-[#878787] text-[16px] leading-4.5 font-medium -tracking-wide";

  return (
    <footer className="relative bg-white w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{ backgroundImage: `url(${BackgrounPattern})` }}
      />

      <div className="relative z-30 mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="space-y-4">
            <img src={LogoDark} alt="Finech" className="h-8 w-auto" />
            <p className="text-sm text-neutral-600">support@finech.com</p>
          </div>

          <div>
            <h4 className="text-[18px] leading-5 font-medium -tracking-wide mb-4">
              Company
            </h4>
            <ul className={listClass}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] leading-5 font-medium -tracking-wide mb-4">
              Products
            </h4>
            <ul className={listClass}>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">API & Developer Docs</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] leading-5 font-medium -tracking-wide mb-4">
              Resources
            </h4>
            <ul className={listClass}>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] leading-5 font-medium -tracking-wide mb-4">
              Legal
            </h4>
            <ul className={listClass}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
              <li>
                <a href="#">Security & Trust</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] leading-5 font-medium -tracking-wide mb-4">
              Contact
            </h4>
            <ul className={listClass}>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t pt-6">
          <p className="text-sm text-neutral-500">
            © 2025 Finech. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#" className="hover:text-neutral">
              Login
            </a>
            <a href="#" className="hover:text-neutral">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
