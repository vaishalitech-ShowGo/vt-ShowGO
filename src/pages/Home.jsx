import React from "react";
import TwoArrows from "../assets/TwoArrows.png";
import Arrows from "../assets/Arrows.png";
import Users from "../assets/Users.png";
import Map from "../assets/Map.png";
import DiscoverConcerts from "../assets/DiscoverConcerts.png";
import Transfer from "../assets/transfer.gif"
import Group from "../assets/group.gif"
import Sell from "../assets/sell.gif"

import EventPoster1 from "../assets/EventPoster1.png";
import EventPoster2 from "../assets/EventPoster2.png";
import EventPoster3 from "../assets/EventPoster3.png";
import EventPoster4 from "../assets/EventPoster4.png";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="bg-black flex flex-col items-center justify-center min-h-[190px]">
        <h1
          className="
      text-white font-extrabold text-[40px] leading-[45px] tracking-[0.15em] 
      sm:text-[55px] sm:leading-[60px] sm:tracking-[0.20em] 
      md:text-[70px] md:leading-[69px] md:tracking-[0.24em] 
      max-w-[885px] font-inter text-center
    "
        >
          Snap Tickets, <br /> Share Moments
        </h1>
      </div>

      {/* Merged Section: "Dive In" + Features */}
      <div className="bg-black flex flex-col items-center justify-center gap-6 min-h-[500px]">
        {/* "Dive In" Button */}
        <div
          className="
      w-[140px] h-[50px] sm:w-[165px] sm:h-[58px] rounded-lg cursor-pointer 
      flex items-center justify-center border border-white/34
    "
        >
          <button
            className="
        text-white font-Karla cursor-pointer text-[18px] sm:text-[22px] md:text-[24px] 
        leading-[100%] tracking-[0.05em]
      "
          >
            Dive In
          </button>
        </div>

        {/* Feature Section */}
        <div className="text-white p-10 w-full flex flex-col md:flex-row gap-5 md:gap-2 justify-center items-center">
          <div className="flex-1 flex flex-col items-center gap-3 text-center max-w-[350px]">
            <img
              src={TwoArrows}
              alt="TransferIcon"
              className="w-[35px] h-[45px] sm:w-[41.43px] sm:h-[53px]"
            />
            <h1 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] leading-[35px] sm:leading-[39px] tracking-[0.07em]">
              Transfer Your Ticket
            </h1>
            <p className="text-sm sm:text-base">
              Can’t make it to the show? Easily transfer your ticket to a friend
              and let them enjoy the event in your place.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-3 text-center max-w-[350px]">
            <img
              src={Arrows}
              alt="SellTicketIcon"
              className="w-[35px] h-[45px] sm:w-[41.43px] sm:h-[53px]"
            />
            <h1 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] leading-[35px] sm:leading-[39px] tracking-[0.07em]">
              Sell Your <br /> Ticket
            </h1>
            <p className="text-sm sm:text-base">
              If plans change, sell your ticket directly through our platform,
              and find a new buyer quickly and securely.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-3.5 text-center max-w-[350px]">
            <img
              src={Users}
              alt="UserIcon"
              className="w-[35px] h-[45px] sm:w-[41.43px] sm:h-[53px]"
            />
            <h1 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] leading-[35px] sm:leading-[39px] tracking-[0.07em]">
              Group <br /> Bookings
            </h1>
            <p className="text-sm sm:text-base font-light leading-[20px] sm:leading-[22px] tracking-[0.11em]">
              Book with friends and keep track of everyone’s plans.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full px-4 mt-8 md:mt-0">
        <img
          src={Map}
          alt=""
          className="w-full max-w-[475px] h-auto md:h-[624px]"
        />
        <img
          src={DiscoverConcerts}
          alt=""
          className="w-full max-w-[900px] h-auto md:h-[625px]"
        />
      </div>

      <div className="bg-black w-full px-4 md:px-12 py-8">
        <h1
          className="
      text-white font-inter font-[400] text-[24px] leading-[38px] tracking-[0.17em]
      sm:text-[28px] sm:leading-[30px]
      md:text-[32px] md:leading-[32px] mb-6
    "
          style={{ paddingLeft: "50px", paddingBottom: "30px", paddingTop:"20px"}}
        >
          Trending Events:
        </h1>

        {/* Event Posters - Always in One Row on Desktop */}
        <div
          className="
      flex flex-wrap md:flex-nowrap justify-center md:justify-center items-center
      gap-6 w-full
    "
        >
          <img
            src={EventPoster1}
            alt=""
            className="w-[80%] sm:w-[335px] h-[414px]"
          />
          <img
            src={EventPoster2}
            alt=""
            className="w-[80%] sm:w-[335px] h-[414px]"
          />
          <img
            src={EventPoster3}
            alt=""
            className="w-[80%] sm:w-[335px] h-[414px]"
          />
          <img
            src={EventPoster4}
            alt=""
            className="w-[80%] sm:w-[335px] h-[414px]"
          />
        </div>
      </div>

      <div className="bg-black w-full">
        {/* Section 1 */}
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-around gap-10 md:gap-20 px-6 md:px-12">
          <div className="text-center md:text-left">
            <h1
              className="text-white text-2xl sm:text-3xl leading-snug"
              style={{
                paddingTop: "380px",
                paddingLeft: "100px",
                marginBottom: "10px",
              }}
            >
              Last-minute change? <br /> No problem! <br /> Easily transfer your{" "}
              <br /> ticket to a friend!
            </h1>
            <button
              className="bg-white text-black text-lg sm:text-xl font-medium rounded-full shadow-md px-5 py-2 tracking-[3px]"
              style={{
                marginLeft: "100px",
                padding: "4px",
                paddingLeft: "9px",
              }}
            >
              Explore
            </button>
          </div>
          <img
            src={Transfer}
            alt=""
            className="w-[90%] max-w-[660px] h-auto rounded-[20px]"
          />
        </div>

        {/* Section 2 */}
        <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-12">
          <img
            src={Sell}
            alt=""
            className="w-[90%] max-w-[671px] h-auto"
          />
          <div className="text-center md:text-left">
            <h1
              className="text-white text-2xl sm:text-3xl leading-snug mb-4"
              style={{ paddingBottom: "20px" }}
            >
              Can't make it? Sell your <br /> tickets quickly and <br />{" "}
              securely.
            </h1>
            <button
              className="bg-white text-black text-lg sm:text-xl font-medium rounded-full shadow-md px-5 py-2 tracking-[3px]"
              style={{
                padding: "4px",
                paddingLeft: "9px",
              }}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Section 3 */}
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-around gap-10 md:gap-20 px-6 md:px-12">
          <div className="text-center md:text-left">
            <h1
              className="text-white text-xl sm:text-3xl leading-snug"
              style={{
                paddingTop: "380px",
                paddingLeft: "100px",
                marginBottom: "30px",
              }}
            >
              Book together, stay <br /> connected, and chat <br /> with your
              friends.
            </h1>
            <button
              className="bg-white text-black text-lg sm:text-xl font-medium rounded-full shadow-md px-5 py-2 tracking-[3px]"
              style={{
                marginLeft: "100px",
                padding: "4px",
                paddingLeft: "9px",
              }}
            >
              Explore
            </button>
          </div>
          <img
            src={Group}
            alt=""
            className="w-[90%] max-w-[720px] h-auto"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;



      