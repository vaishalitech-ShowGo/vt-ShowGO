import React from "react";
import TwoArrows from "../assets/TwoArrows.png";
import Arrows from "../assets/Arrows.png";
import Users from "../assets/Users.png";
import Map from "../assets/Map.png";
import DiscoverConcerts from "../assets/DiscoverConcerts.png";
import Transfer from "../assets/transfer.gif";
import Group from "../assets/group.gif";
import Sell from "../assets/sell.gif";

import EventPoster1 from "../assets/EventPoster1.png";
import EventPoster2 from "../assets/EventPoster2.png";
import EventPoster3 from "../assets/EventPoster3.png";
import EventPoster4 from "../assets/EventPoster4.png";


const Home = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="bg-black flex flex-col items-center justify-center min-h-[190px] ">
        <h1 className="text-white font-extrabold text-[40px] leading-[45px] tracking-[0.15em] sm:text-[55px] sm:leading-[60px] sm:tracking-[0.20em] md:text-[70px] md:leading-[69px] md:tracking-[0.24em] max-w-[885px] font-inter text-center">
          Snap Tickets, <br /> Share Moments
        </h1>
      </div>

      {/* Merged Section: "Dive In" + Features */}
      <div className="bg-black flex flex-col items-center justify-center gap-6 min-h-[500px] ">
        {/* "Dive In" Button */}
        <div className="w-[140px] h-[50px] sm:w-[165px] sm:h-[58px] rounded-lg cursor-pointer flex items-center justify-center border border-white/34">
          <button className="text-white font-Karla cursor-pointer text-[18px] sm:text-[22px] md:text-[24px] leading-[100%] tracking-[0.05em]">
            Dive In
          </button>
        </div>

        {/* Feature Section */}
        <div className="text-white p-10 w-full flex flex-col md:flex-row gap-5 md:gap-2 justify-center items-center ">
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

          <div className="flex-1 flex flex-col items-center gap-3 text-center max-w-[350px] ">
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

      <div className="min-h-screen  bg-black flex flex-col xl:flex-row  items-center justify-center gap-6 md:gap-12 w-full px-4 mt-8 md:mt-0 ">
        <img
          src={Map}
          alt=""
          className="w-full max-w-[500px] h-auto md:h-[624px]"
        />
        <img
          src={DiscoverConcerts}
          alt=""
          className="w-full  h-auto md:h-[625px] "
        />
      </div>

      <div className="bg-black w-full px-4 md:px-12 py-8">
    <h1
        className="text-white font-inter font-[400] text-[24px] leading-[38px] tracking-[0.17em] sm:text-[28px] sm:leading-[30px] md:text-[32px] md:leading-[32px] mb-6"
        style={{
            paddingLeft: "50px",
            paddingBottom: "30px",
            paddingTop: "20px",
        }}
    >
        Trending Events:
    </h1>

    {/* Event Posters with Details */}
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-center items-center gap-6 w-full">
        {[EventPoster1, EventPoster2, EventPoster3, EventPoster4].map((poster, index) => (
            <div key={index} className="w-[80%] sm:w-[335px] h-auto bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={poster}
                    alt="Event Poster"
                    className="w-full h-[414px] object-cover"
                />
                <div className="p-4 text-center space-y-2">
                    <h3 className="text-lg font-semibold">Event Name {index + 1}</h3>
                    <p className="text-md text-gray-400">Date: 25th March 2025</p>
                    <p className="text-md text-white-400">Rs. 15,000</p>
                </div>
            </div>
        ))}
    </div>
</div>


<div className="bg-black w-full">
  {/* Section 1 */}
  <div className="h-screen w-full flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between py-4 md:items-center">
    {/* Text and Button (Left Side) */}
    <div className="max-w-1/2 h-auto md:h-full relative left-6 lg:left-20  flex flex-col  justify-end ">
      <h1 className="text-white text-xl sm:text-2xl md:text-4xl">
        Last-minute change? <br /> No problem! <br /> Easily transfer your <br /> ticket to a friend!
      </h1>
      <button className="bg-white w-36 text-2xl text-black font-medium rounded-full shadow-md py-2 md:py-3 hover:bg-gray-200 transition h-12 ">
        Explore
      </button>
    </div>
    {/* Image */}
    <div className="md:w-1/2 h-1/2 md:h-full">
    <img src={Transfer} alt="Transfer" className=" max-w-full h-full rounded-[20px] ml-[100px] md:ml-20 " />
    </div>
  </div>

  {/* Spacer */}
  <div className="h-12 md:h-16 bg-black"></div>

  {/* Section 2 (Reversed Layout) */}
  <div className="min-h-screen flex flex-col-reverse items-center  md:flex-row md:items-center justify-evenly gap-6 md:gap-16 px-4 md:px-20 py-8 md:py-1  ">
  {/* Image (Left Side) */}
  <img src={Sell} alt="Sell" className="w-full max-w-[400px] h-auto" />

  {/* Text and Button (Right Side - Center Aligned) */}
  <div className="max-w-1/2 h-full relative flex flex-col  justify-end ">
      <h1 className="text-white text-xl sm:text-2xl md:text-4xl">
        Last-minute change? <br /> No problem! <br /> Easily transfer your <br /> ticket to a friend!
      </h1>
      <button className="bg-white w-36 text-2xl  text-black font-medium rounded-full shadow-md py-2 md:py-3 hover:bg-gray-200 transition h-12 ">
        Explore
      </button>
    </div>
</div>



  {/* Spacer */}
 

  {/* Section 3 */}
  <div className="min-h-auto flex flex-col items-center md:flex-row md:items-end justify-evenly gap-6 md:gap-20 px-4 md:px-24 py-8 md:py-16  ">
  {/* Text and Button (Left Side) */}
  <div className="max-w-1/2 h-full relative md:left-20  flex flex-col  justify-end ">
      <h1 className="text-white text-xl sm:text-2xl md:text-4xl">
        Last-minute change? <br /> No problem! <br /> Easily transfer your <br /> ticket to a friend!
      </h1>
      <button className="bg-white w-36 text-2xl text-black font-medium rounded-full shadow-md py-2 md:py-3 hover:bg-gray-200 transition h-12 ">
        Explore
      </button>
    </div>
  
  {/* Image (Right Side - Adjusted Alignment) */}
  <div className="flex justify-end w-full md:w-auto">
    <img src={Group} alt="Group" className="w-full max-w-[750px] h-auto" />
  </div>
</div>
</div>




    </>
  );
};

export default Home;
