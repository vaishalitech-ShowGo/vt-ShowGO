import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="min-h-[300px] w-full bg-black text-white">
      <div
        className="container mx-auto flex flex-wrap justify-center items-start gap-2 pt-10 px-6 md:px-12 lg:px-16"
        style={{ paddingTop: "100px" }}
      >
        {/* Contact Section */}
        <div className="flex flex-col gap-3 w-[20%] min-w-[160px] text-left">
          <Link
            to="/contact"
            className="text-lg font-semibold min-h-[40px] hover:underline"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </Link>
          <p className="flex items-center gap-2 justify-start">
            📧{" "}
            <a href="mailto:info@musicfest.com" className="hover:underline">
              info@musicfest.com
            </a>
          </p>
          <p className="flex items-center gap-2 justify-start">
            📞{" "}
            <a href="tel:+15551234567" className="hover:underline">
              +1 (555) 123-4567
            </a>
          </p>
          <p className="flex items-center gap-2 justify-start">
            📍 Central Park, New York
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-2 w-[16%] min-w-[160px] text-left">
          <h3 className="text-lg font-semibold min-h-[40px]">Quick Links</h3>
          <a href="/join-community" className="hover:underline">
            Join Community
          </a>
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-2 w-[10%] min-w-[160px] text-left">
          <h3 className="text-lg font-semibold min-h-[40px]">Account</h3>
          <Link
            to="/account-delete"
            className="hover:underline"
            onClick={() => window.scrollTo(0, 0)}
          >
            Request Account <br /> Deletion
          </Link>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col gap-2 w-[16%] min-w-[160px] text-center">
          <h3 className="text-lg font-semibold min-h-[40px]">Follow Us</h3>
          <div className="flex gap-3 justify-center">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4 w-[20%]  text-left">
          <h3 className="text-lg font-semibold ">Newsletter</h3>
          <p>Stay updated with our latest events</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#27272A] text-white rounded-[8px] outline-none w-full md:w-auto"
              style={{ paddingLeft: "8px", marginLeft: "-28px" }}
            />
            <button
              className="bg-white text-black rounded-[8px] cursor-pointer text-[15px]"
              style={{
                paddingLeft: "5px",
                paddingTop: "5px",
                paddingBottom: "7px",
                paddingRight: "5px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div
        className="container mx-auto flex flex-wrap justify-center items-start gap-10 pt-10 px-6 md:px-12 lg:px-16 mb-16"
        style={{ paddingTop: "60px" }}
      >
        © 2025 ShowGo. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
