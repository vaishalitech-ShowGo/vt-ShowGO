import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="fixed top-0 left-0 w-full h-[99px] bg-black flex items-center justify-around px-6 md:px-16 z-50 shadow-lg">
      {/* Logo - Clickable */}
      <Link to="/" onClick={() => setActiveTab("home")}>
        <h1 className="text-white text-[35px] font-semibold cursor-pointer">
          ShowGo.
        </h1>
      </Link>

      {/* Hamburger Menu - Visible on Small Screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex justify-between w-[265.8px] text-lg">
        {["home", "events", "about"].map((tab) => (
          <li key={tab} className="w-[87px] flex justify-center">
            <Link
              to={`/${tab === "home" ? "" : tab}`}
              onClick={() => setActiveTab(tab)}
            >
              <button
                className={`w-[87px] h-[40px] rounded-full text-lg font-semibold flex items-center justify-center cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-white bg-transparent"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </Link>
          </li>
        ))}
      </ul>

      {/* Get Started Button (Desktop) */}
      <Link to="/login-signup" className="hidden md:flex">
        <button className="bg-white text-black w-[149.26px] h-[40px] rounded-full font-semibold shadow-lg hover:opacity-80 flex items-center justify-center cursor-pointer">
          <span className="w-[112px] text-center">Get Started</span>
        </button>
      </Link>

      {/* Mobile Menu (Only Visible When Open) */}
      {isOpen && (
        <div className="absolute top-[99px] left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
          {["home", "events", "about"].map((tab) => (
            <Link
              key={tab}
              to={`/${tab === "home" ? "" : tab}`}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);
              }}
            >
              <button
                className={`w-[120px] h-[40px] rounded-full text-lg font-semibold flex items-center justify-center cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-white bg-transparent"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </Link>
          ))}

          {/* Get Started Button (Mobile) */}
       
            <button className="bg-white text-black w-[149.26px] h-[40px] rounded-full font-semibold shadow-lg hover:opacity-80">
              Get Started
            </button>
       
        </div>
      )}
    </nav>
  );
};

export default Navbar;
