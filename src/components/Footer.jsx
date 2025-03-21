import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 px-4 sm:px-6 md:px-16 lg:px-24 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-10 text-center md:text-left">
        {/* Contact Section */}
        <div className="space-y-3 w-full">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <Link to="/contact" className="hover:underline block">Contact Us</Link>
          <p>📧 <a href="mailto:info@musicfest.com" className="hover:underline">info@musicfest.com</a></p>
          <p>📞 <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a></p>
          <p>📍 Central Park, New York</p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-3 w-full">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-1">
            <Link to="/join-community" className="hover:underline">Join Community</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Account Section */}
        <div className="space-y-3 w-full">
          <h3 className="text-lg font-semibold">Account</h3>
          <Link to="/account-delete" className="hover:underline block">Request Account Deletion</Link>
        </div>

        {/* Follow Us Section */}
        <div className="space-y-3 w-full">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 justify-center">
            <FaFacebookF className="cursor-pointer text-xl hover:text-gray-400" />
            <FaTwitter className="cursor-pointer text-xl hover:text-gray-400" />
            <FaInstagram className="cursor-pointer text-xl hover:text-gray-400" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-3 w-full">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p>Stay updated with our latest events</p>
          <div className="flex flex-col gap-3 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#27272A] text-white rounded-md outline-none w-full px-4 py-2"
            />
            <button className="bg-white text-black rounded-md px-5 py-2 w-full text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center border-t border-gray-700 py-4 text-sm">
        © 2025 ShowGo. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;