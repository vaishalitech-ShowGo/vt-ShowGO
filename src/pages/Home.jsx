import React from "react";
import TwoArrows from "../assets/TwoArrows.png"
import Arrows from "../assets/Arrows.png"
import Users from "../assets/Users.png"
import Map from "../assets/Map.png"
import DiscoverConcerts from "../assets/DiscoverConcerts.png";

import EventPoster1 from "../assets/EventPoster1.png"
import EventPoster2 from "../assets/EventPoster2.png"
import EventPoster3 from "../assets/EventPoster3.png"
import EventPoster4 from "../assets/EventPoster4.png"
import InterectiveGallery from "../assets/Interactive-Gallery-[remix] 1.png"
import ShareYourWork from "../assets/Share-Your-Work-[remix] (2) 1.png"
import GlideRemix from "../assets/Glide-[remix] 1.png"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className=" min-h-[190px] bg-black flex flex-col items-center justify-center">
        <h1 className="text-white font-extrabold text-[70px] leading-[69px] tracking-[0.24em] max-w-[885px] font-inter text-center">
          Snap Tickets, <br /> Share Moments
        </h1>
      </div>

      <div className="min-h-[398px] bg-black flex flex-col items-center justify-center  gap-3">
        <div
          className="w-[165px] h-[58px] rounded-lg cursor-pointer flex items-center justify-center"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.34)",
            borderRadius: "10px",
          }}
        >
          <button
            className="w-[89px] h-[29px] text-white font-Karla cursor-pointer"
            style={{
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0.05em",
            }}
          >
            Dive In
          </button>
        </div>

        <div className="flex bg-black text-white p-10 max-w-[1090px] gap-2">
          <div className="flex-1 flex flex-col items-center gap-3">
            <img
              src={TwoArrows}
              alt="TransferIcon"
              className="w-[41.43px] h-[53px]"
            />
            <h1
              className="w-[319.77px] h-[78px] text-center font-inter"
              style={{
                fontSize: "36px",
                lineHeight: "39px",
                letterSpacing: "0.07em",
              }}
            >
              Transfer Your Ticket
            </h1>
            <p className="text-center w-[300px] h-[88px]">
              Can’t make it to the show? Easily transfer your ticket to a friend
              and let them enjoy the event in your place.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-3">
            <img
              src={Arrows}
              alt="SellTicketIcon"
              className="w-[41.43px] h-[53px]"
            />
            <h1
              className="w-[319.77px] h-[78px] text-center font-inter"
              style={{
                fontSize: "36px",
                lineHeight: "39px",
                letterSpacing: "0.07em",
              }}
            >
              Sell Your <br /> Ticket
            </h1>
            <p className="text-center w-[300px] h-[88px]">
              If plans change, sell your ticket directly through our platform,
              and find a new buyer quickly and securely.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-3.5">
            <img src={Users} alt="UserIcon" className="w-[41.43px] h-[53px]" />
            <h1
              className="w-[319.77px] h-[78px] text-center font-inter"
              style={{
                fontSize: "36px",
                lineHeight: "39px",
                letterSpacing: "0.07em",
              }}
            >
              Group <br /> Bookings
            </h1>
            <p
              className="text-center w-[267px] h-[44px] font-light text-sm"
              style={{
                lineHeight: "22px",
                letterSpacing: "0.11em",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book with friends and keep track of everyone’s plans.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black flex items-center justify-center gap-12">
        <img src={Map} alt="" className="w-[475px] h-[624px]" />
        <img src={DiscoverConcerts} alt="" className="w-[900px] h-[625px]" />
      </div>

      <div className="min-h-[50px] bg-black">
        <h1
          className="text-white font-inter font-[400] text-[32px] leading-[32px] tracking-[0.17em] w-[355px] h-[32px]"
          style={{ marginLeft: "53px", marginBottom: "45px" }}
        >
          Trending Events:
        </h1>

        <div className="min-h-[450px] w-[1280px] bg-black flex items-center justify-center gap-12">
          <img src={EventPoster1} alt="" className="w-[335px] h-[414px]" />
          <img src={EventPoster2} alt="" className="w-[335px] h-[414px]" />
          <img src={EventPoster3} alt="" className="w-[335px] h-[414px]" />
          <img src={EventPoster4} alt="" className="w-[335px] h-[414px]" />
        </div>
      </div>

      <div className="min-h-screen bg-black flex items-center justify-around gap-12">
        <div>
          <h1
            className="text-white text-3xl"
            style={{ marginTop: "450px", marginBottom: "45px" }}
          >
            Last-minute change? <br /> No problem! <br /> Easily transfer your{" "}
            <br /> ticket to a friend!"
          </h1>
          <button className="text-white text-2xl">Explore</button>
        </div>
        <img
          src={InterectiveGallery}
          alt=""
          className="w-[660px] h-[656.89px]"
        />
      </div>

      <div className="min-h-screen bg-black flex items-center justify-around gap-12">
        <img src={ShareYourWork} alt="" className="w-[671px] h-[676px]" />
        <div>
          <h1
            className="w-[439px] h-[141.1px] text-3xl text-white"
            style={{ marginTop: "200px" }}
          >
            Can't make it? Sell your <br /> tickets quickly and <br /> securely.
          </h1>
          <button className="text-2xl text-white">Explore</button>
        </div>
      </div>

      <div className="min-h-screen bg-black flex items-center justify-around gap-12">
        <div>
          <h1
            className="w-[387.62px] h-[201.17px] text-white text-3xl"
            style={{
              marginTop: "200px",
              marginBottom: "45px",
              marginLeft: "280px",
            }}
          >
            Book together, stay <br /> connected, and chat <br /> with your
            friends. <br />
            <button className="bg-white text-black">Explore</button>
          </h1>
        </div>
        <img src={GlideRemix} alt="" className="w-[720px] h-[646px]" />
      </div>

        <Footer />
    </>
  );
};

export default Home;





