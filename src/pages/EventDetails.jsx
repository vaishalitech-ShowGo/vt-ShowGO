import React from "react";
import EventsImage4 from "../assets/events4.png";
import Map from "../assets/Map1.png";
import VenueDetails from "../assets/VenueDetails.png";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const EventDetails = () => {
  const { 
    quantity, 
    selectedTicket, 
    increment, 
    decrement, 
    updateSelectedTicket 
  } = useCart();

  const ticketOptions = [
    { name: "VIP PASS", price: 3000, display: "VIP PASS - Rs. 3000" },
    { name: "REGULAR PASS", price: 2000, display: "REGULAR PASS - Rs. 2000" },
    { name: "EARLY BIRD", price: 1000, display: "EARLY BIRD - Rs. 1000" }
  ];

  const handleSelection = (ticket) => {
    updateSelectedTicket(ticket);
  };

  const currentTicket = ticketOptions.find(t => t.name === selectedTicket.name) || ticketOptions[2];

  return (
    <div className="bg-black">
      {/* Event Details Section */}
      <div className="px-4 py-10 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Left Side Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={EventsImage4}
              alt="Event"
              className="w-full max-w-[463px] h-auto rounded-xl"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Summer Music Festival
            </h1>
            <h2 className="text-lg md:text-xl text-gray-400 mt-2">
              Unleashing the Extraordinary
            </h2>
            <p className="text-sm md:text-base text-[#D5D5D5] mt-4 mb-5">
              Experience an unforgettable night of live performances from
              world-renowned artists, featuring a perfect blend of genres from
              rock to electronic dance music.
            </p>

            {/* Price and Ticket Selection */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="flex-1 bg-[#18181B] p-4 rounded-lg">
                <span className="text-xl md:text-2xl font-semibold">
                  {currentTicket.display}
                </span>
              </div>
              
              <div className="flex-1 bg-[#18181B] p-4 rounded-lg">
                <div className="space-y-3">
                  {ticketOptions.map((option) => (
                    <div 
                      key={option.name}
                      className="flex items-center gap-2 bg-[#27272A] p-3 rounded-md cursor-pointer hover:bg-gray-700"
                      onClick={() => handleSelection(option)}
                    >
                      <input 
                        type="radio" 
                        name="ticket" 
                        className="accent-green-500" 
                        checked={selectedTicket.name === option.name}
                        onChange={() => {}}
                        readOnly
                      />
                      {option.display}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity & Button Section */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
              <div className="flex items-center bg-[#18181B] text-white rounded-full px-4 py-2">
                <button
                  className="text-xl cursor-pointer px-2"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="text-lg mx-2">{quantity}</span>
                <button
                  className="text-xl cursor-pointer px-2"
                  onClick={increment}
                >
                  +
                </button>
              </div>

              <Link 
                to="booking-confirmation" 
                className="flex-1 w-full md:w-auto"
              >
                <button className="bg-[#18181B] text-white w-full h-[37px] text-sm md:text-base font-semibold rounded-[25px] cursor-pointer">
                  Book Now
                </button>
              </Link>

              <div className="flex gap-6 text-white text-2xl md:text-xl cursor-pointer">
                <FaHeart className="hover:text-red-500" />
                <FaShareAlt className="hover:text-gray-400" />
              </div>
            </div>

            {/* Price Summary Section */}
            <div className="bg-[#18181B] p-5 rounded-xl mt-8">
              <div className="flex justify-between text-base py-2">
                <span>Subtotal</span>
                <span>INR {quantity * selectedTicket.price}</span>
              </div>
              <div className="flex justify-between text-base text-yellow-400 py-2">
                <span>+ Other Charges</span>
                <span>INR 75.00</span>
              </div>
              <hr className="border-gray-700 my-2" />
              <div className="flex justify-between text-base font-semibold py-2">
                <span>Total Amount</span>
                <span>INR {(quantity * selectedTicket.price + 75).toFixed(2)}</span>
              </div>
            </div>

            {/* Event Info */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold">Event Info</h3>
              <ul className="text-sm md:text-base text-gray-400 list-disc pl-6 space-y-2 mt-2">
                <li>Event Restriction: 18+ event with valid ID required.</li>
                <li>Event Time: Doors open at 9:00 PM, no re-entry.</li>
                <li>Prohibited Items: No outside food, drinks, or large bags.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Details */}
      <div className="bg-black py-12 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-[1200px] mx-auto">
          <img
            className="w-full max-w-[425px] h-auto"
            src={VenueDetails}
            alt="Venue Details"
          />
          <img
            className="w-full max-w-[676px] h-auto"
            src={Map}
            alt="Map"
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-black py-12 md:py-16 px-4 md:px-10 lg:px-20 mb-16">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
            Terms & Conditions
          </h3>
          <ul className="text-sm md:text-base text-gray-400 list-disc pl-6 space-y-3 md:space-y-4">
            {[
              "If you were denied entry, please email at bash@gmail.com",
              "In case of event cancellation, refunds will only be processed if payouts haven't been released.",
              "Bash is not responsible for intellectual property issues during performances.",
              "Tickets allow 'Single Entry Per Day' and are non-refundable.",
              "Attendees must carry a valid ID proof for age verification at the venue.",
              "The event organizers reserve the right to refuse entry without providing a reason.",
              "Outside food and beverages are strictly prohibited inside the venue.",
              "The event schedule and lineup are subject to change without prior notice."
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;