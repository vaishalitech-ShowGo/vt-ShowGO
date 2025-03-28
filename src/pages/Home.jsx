import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const sliderRef = useRef(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 200, // Increased from 500 for faster transitions
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500, // Reduced from 3000 for quicker cycling
    cssEase: 'ease-in-out', // Smoother animation
    swipeToSlide: true, // Allows swiping to any slide (not just full scrolls)
    draggable: true, // Enables mouse dragging on desktop
    pauseOnHover: true, // Pauses autoplay on hover
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15%', // Better padding for mobile
          adaptiveHeight: true // Adjusts height based on current slide
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10%', // Less padding on very small screens
          adaptiveHeight: true
        }
      }
    ]
  };

  return (
    <>
      {/* Heading Section */}
      <div className="overflow-x-hidden">
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
              Can't make it to the show? Easily transfer your ticket to a friend
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
              Book with friends and keep track of everyone's plans.
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

      {/* Trending Events Section with Carousel */}
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

  {/* Event Posters with Details using react-slick */}
  <div className="px-4 sm:px-8">
    <Slider {...carouselSettings}>
      {[EventPoster1, EventPoster2, EventPoster3, EventPoster4].map((poster, index) => (
        <div key={index} className="px-4 focus:outline-none"> {/* Added consistent gap */}
          <div className="w-[280px] sm:w-[335px] h-auto bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden flex-shrink-0">
            <img
              src={poster}
              alt={`Event ${index + 1}`}
              className="w-full h-[250px] sm:h-[350px] object-cover" 
            />
            <div className="p-4 text-center space-y-2">
              <h3 className="text-lg font-semibold">Event Name {index + 1}</h3>
              <p className="text-md text-gray-400">Date: 25th March 2025</p>
              <p className="text-md text-white-400">Rs. 15,000</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

      {/* Rest of your sections remain the same */}
      <div className="bg-black w-full overflow-hidden"> {/* Added overflow-hidden */}
  {/* Section 1 */}
  <div className="min-h-screen w-full flex flex-col justify-center items-center gap-8 md:flex-row md:justify-between md:items-center py-8 px-4 md:px-8 lg:px-12">
    {/* Text and Button (Left Side) */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 md:pl-8 lg:pl-12">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
        Last-minute change? <br /> No problem! <br /> Easily transfer your <br /> ticket to a friend!
      </h1>
      <button className="bg-white w-36 text-xl md:text-2xl text-black font-medium rounded-full shadow-md py-2 hover:bg-gray-200 transition h-12">
        Explore
      </button>
    </div>
    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={Transfer} 
        alt="Transfer" 
        className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-[20px]" 
      />
    </div>
  </div>

  {/* Spacer */}
  <div className="h-12 md:h-16 bg-black"></div>

  {/* Section 2 (Reversed Layout) */}
  <div className="min-h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 px-4 md:px-8 lg:px-12 py-8">
    {/* Image (Left Side) */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={Sell} 
        alt="Sell" 
        className="w-full max-w-md md:max-w-lg lg:max-w-xl" 
      />
    </div>

    {/* Text and Button (Right Side) */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 md:pr-8 lg:pr-12">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
        Last-minute change? <br /> No problem! <br /> Easily transfer your <br /> ticket to a friend!
      </h1>
      <button className="bg-white w-36 text-xl md:text-2xl text-black font-medium rounded-full shadow-md py-2 hover:bg-gray-200 transition h-12">
        Explore
      </button>
    </div>
  </div>

  {/* Spacer */}
  <div className="h-12 md:h-16 bg-black"></div>

  {/* Section 3 */}
  <div className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 md:px-8 lg:px-12 py-8">
    {/* Text and Button (Left Side) */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 md:pl-8 lg:pl-12">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
        Last-minute change? <br /> No problem! <br /> Easily transfer your <br /> ticket to a friend!
      </h1>
      <button className="bg-white w-36 text-xl md:text-2xl text-black font-medium rounded-full shadow-md py-2 hover:bg-gray-200 transition h-12">
        Explore
      </button>
    </div>

    {/* Image (Right Side) */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={Group} 
        alt="Group" 
        className="w-full max-w-md md:max-w-lg lg:max-w-xl" 
      />
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Home;