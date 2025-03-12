import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="min-h-[300px] w-full bg-black text-white">
      <div
        className="container mx-auto flex flex-wrap justify-around lg:flex-nowrap gap-8 h-[344px] pt-10"
        style={{
          paddingLeft: "70px",
          paddingRight: "60px",
          paddingTop: "140px",
        }}
      >
        {/* Contact Section */}
        <div className="flex flex-col gap-4 w-1/5">
          <Link
            to="/contact"
            className="text-lg font-semibold min-h-[40px] hover:underline"
          >
            Contact Us
          </Link>
          <p className="flex items-center gap-2">
            📧{" "}
            <a href="mailto:info@musicfest.com" className="hover:underline">
              info@musicfest.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            📞{" "}
            <a href="tel:+15551234567" className="hover:underline">
              +1 (555) 123-4567
            </a>
          </p>
          <p className="flex items-center gap-2">📍 Central Park, New York</p>
        </div>


        {/* Quick Links Section */}
        <div className="flex flex-col gap-2 w-1/5">
          <h3 className="text-lg font-semibold min-h-[40px]">Quick Links</h3>
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

        {/* Account */}
        <div className="flex flex-col gap-3 w-1/5">
          <h3 className="text-lg font-semibold min-h-[40px]">Account</h3>
          <Link to="/account-delete" className="hover:underline">
            Request Account <br /> Deletion
          </Link>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col gap-3 w-1/5">
          <h3 className="text-lg font-semibold min-h-[40px]">Follow Us</h3>
          <div className="flex gap-3">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="flex flex-col gap-3 w-1/5">
          <h3 className="text-lg font-semibold min-h-[40px]">Newsletter</h3>
          <p>Stay updated with our latest events</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-gray-800 text-white rounded-l-md outline-none"
            />
            <button className="bg-white text-black rounded-r-md cursor-pointer px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center border-t border-gray-600 text-gray-400 text-sm mt-5 pt-3">
        © 2024 Summer Music Festival. All rights reserved. <br />© 2025 ShowGo.
      </div>
    </footer>
  );
};

export default Footer;
