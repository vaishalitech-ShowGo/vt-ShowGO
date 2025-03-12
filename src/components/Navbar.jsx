import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <nav className="fixed top-0 left-0 w-full h-[99px] bg-black flex items-center justify-around z-50 shadow-lg">
      {/* Logo */}
      <h1 className="text-white text-[35px] font-semibold">ShowGo.</h1>

      {/* Navigation Links */}
      <ul className="flex justify-between w-[265.8px] text-lg">
        <li className="w-[87px] flex justify-center">
          <Link to="/" onClick={() => setActiveTab("home")}>
            <button
              className={`w-[87px] h-[40px] rounded-full text-lg font-semibold flex items-center justify-center cursor-pointer ${
                activeTab === "home"
                  ? "bg-white text-black"
                  : "text-white bg-transparent"
              }`}
            >
              Home
            </button>
          </Link>
        </li>

        <li className="w-[87px] flex justify-center">
          <Link to="/events" onClick={() => setActiveTab("events")}>
            <button
              className={`w-[87px] h-[40px] rounded-full text-lg font-semibold flex items-center justify-center cursor-pointer ${
                activeTab === "events"
                  ? "bg-white text-black"
                  : "text-white bg-transparent"
              }`}
            >
              Events
            </button>
          </Link>
        </li>

        <li className="w-[87px] flex justify-center">
          <Link to="/about" onClick={() => setActiveTab("about")}>
            <button
              className={`w-[87px] h-[40px] rounded-full text-lg font-semibold flex items-center justify-center cursor-pointer ${
                activeTab === "about"
                  ? "bg-white text-black"
                  : "text-white bg-transparent"
              }`}
            >
              About
            </button>
          </Link>
        </li>
      </ul>

      {/* Get Started Button */}
      <Link to="/get-started">
        <button className="bg-white text-black w-[149.26px] h-[40px] rounded-full font-semibold shadow-lg hover:opacity-80 flex items-center justify-center">
          <span className="w-[112px] text-center">Get Started</span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
