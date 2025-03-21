import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiMenu, FiUser, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporarily true to see user avatar design
  const [showPopover, setShowPopover] = useState(false); // Popover state

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setShowPopover(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[99px] bg-black flex items-center justify-between md:justify-around md:px-16 z-50 shadow-lg">
      {/* Logo - Clickable */}
      <Link to="/" onClick={() => setActiveTab("home")}>
        <h1 className="text-white text-[35px] font-semibold cursor-pointer">ShowGo.</h1>
      </Link>

      {/* Hamburger Menu - Visible on Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
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

      {/* Get Started / User Avatar */}
      {isLoggedIn ? (
        <div className="relative">
    <img
        src="https://images.pexels.com/photos/1586663/pexels-photo-1586663.jpeg?cs=srgb&dl=pexels-sulimansallehi-1586663.jpg&fm=jpg"
        alt="User Avatar"
        className="w-10 h-10 rounded-full cursor-pointer border-[1.5px] border-white hover:scale-105 transition-transform duration-300"
        onClick={() => setShowPopover(!showPopover)}
    />
    {showPopover && (
        <div className="absolute top-14 right-0 bg-black text-white rounded-lg shadow-md w-56 py-5 px-6 z-[1000] space-y-4">
            <Link to="/profile">
                <button className="w-full flex items-center justify-start gap-3 text-base text-white  outline-white/40 rounded-lg py-3 px-4 hover:bg-white hover:text-black transition-all duration-300">
                    <FiUser className="w-5 h-5" />
                    <span className="font-medium">View Profile</span>
                </button>
            </Link>

            <button
                onClick={logoutHandler}
                className="w-full flex items-center justify-start gap-3 text-base text-white rounded-lg py-3 px-4 hover:bg-white hover:text-black transition-all duration-300"
            >
                <FiLogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
            </button>
        </div>
    )}
</div>
      ) : (
        <Link to="/login-signup" className="hidden md:flex">
          <button className="bg-white text-black w-[149.26px] h-[40px] rounded-full font-semibold shadow-lg hover:opacity-80 flex items-center justify-center cursor-pointer">
            <span className="w-[112px] text-center">Get Started</span>
          </button>
        </Link>
      )}

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
          {!isLoggedIn && (
            <Link to="/login-signup">
              <button className="bg-white text-black w-[149.26px] h-[40px] rounded-full font-semibold shadow-lg hover:opacity-80">
                Get Started
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
