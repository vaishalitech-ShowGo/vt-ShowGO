import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="min-h-[300px] w-full bg-black text-white">
      {/* Container for all sections in a row */}
      <div
        className="container mx-auto flex flex-wrap justify-between items-start gap-8 pt-10 px-6 md:px-12 lg:px-16"
        style={{ paddingTop: "140px" }}
      >
        {/* Contact Section */}
        <div className="flex flex-col gap-4 w-[18%] min-w-[180px]">
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
        <div className="flex flex-col gap-2 w-[18%] min-w-[180px]">
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

        {/* Account Section */}
        <div className="flex flex-col gap-3 w-[18%] min-w-[180px]">
          <h3 className="text-lg font-semibold min-h-[40px]">Account</h3>
          <Link to="/account-delete" className="hover:underline">
            Request Account <br /> Deletion
          </Link>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col gap-3 w-[18%] min-w-[180px]">
          <h3 className="text-lg font-semibold min-h-[40px]">Follow Us</h3>
          <div className="flex gap-3">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-3 w-[18%] min-w-[180px]">
          <h3 className="text-lg font-semibold min-h-[40px]">Newsletter</h3>
          <p>Stay updated with our latest events</p>
          <div className="flex flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-[#27272A] text-white rounded-[12px] outline-none w-full md:w-auto"
            />
            <button className="bg-white text-black rounded-[12px] cursor-pointer text-[15px] px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center border-t border-gray-600 text-gray-400 text-sm py-4">
        © 2025 ShowGo.
      </div>
    </footer>
  );
};

export default Footer;
