import React, { useState } from "react";
import EventsImage4 from "../assets/events4.png";
import Map from "../assets/Map1.png";
import VenueDetails from "../assets/VenueDetails.png";
import Footer from "../components/Footer";
import { FaHeart, FaShareAlt } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/CartSlice";

const EventDetails = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const [showRadioOptions, setShowRadioOptions] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState("Selected Ticket")

  const handleSelection = (value) =>{
    setSelectedTicket(value); // Display Selected Options
    setShowRadioOptions(false); // After Select Ticket prize the dropdown will be closed. 
  }

  return (
    <>
      <div
        className="bg-black flex items-center justify-center px-4"
        style={{ padding: "40px" }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-around max-w-[1200px] w-full">
          {/* Left Side Image */}
          <div className="w-full flex justify-center md:w-auto">
            <img
              src={EventsImage4}
              alt="Event"
              className="w-full max-w-[463px] h-auto rounded-xl"
            />
          </div>

          {/* Right Side Content */}
          <div
            className="text-white w-full md:w-[600px] mt-6 md:mt-0"
            style={{ marginLeft: "40px" }}
          >
            <h1 className="text-[28px] md:text-[40px]">
              Summer Music Festival
            </h1>
            <h2
              className="text-[18px] md:text-[22px] text-gray-400"
              style={{ marginTop: "8px" }}
            >
              Unleashing the Extraordinary
            </h2>
            <p
              className="text-[14px] text-[#D5D5D5] leading-relaxed"
              style={{ marginTop: "16px", marginBottom: "20px" }}
            >
              Experience an unforgettable night of live performances from
              world-renowned artists, featuring a perfect blend of genres from
              rock to electronic dance music.
            </p>

            {/* Price and Ticket Selection in Same Row with Different Backgrounds */}
            <div className="flex items-center justify-between gap-4 mt-4 pb-4">

              {/* Price Box */}
              <div className="text-white py-3 px-5 rounded-lg flex items-center gap-3">
                <span className="text-[24px] md:text-[30px] font-semibold">
                  <span className="text-[16px] md:text-[18px]">INR</span> 299.99
                </span>
                <span className="text-green-400 text-[14px] md:text-[16px] font-medium">
                  EARLY BIRD - Rs. 1000
                </span>
              </div>

              {/* Ticket Selection with Radio Options */}
              <div className="bg-[#18181B] text-white py-3 px-5 rounded-lg relative w-full max-w-[250px] cursor-pointer">
                <div
                  className="appearance-none bg-[#18181B] text-white w-full cursor-pointer text-[16px] outline-none rounded-[20px] flex items-center justify-between"
                  style={{ padding: "6px" }}
                  onClick={() => setShowRadioOptions(!showRadioOptions)}
                >
                  {selectedTicket}▼
                </div>

                {showRadioOptions && (
                    <div className="absolute top-full left-0 w-full bg-[#18181B] text-white rounded-lg shadow-md mt-2 p-4 space-y-3 border border-gray-700">
                        <div 
                            className="flex items-center gap-2 bg-[#27272A] p-3 rounded-md cursor-pointer hover:bg-gray-700"
                            onClick={() => handleSelection("VIP PASS - Rs. 3000")}
                        >
                            <input type="radio" name="ticket" value="vip" className="accent-green-500" />
                            VIP PASS - Rs. 3000
                        </div>

                        <div 
                            className="flex items-center gap-2 bg-[#27272A] p-3 rounded-md cursor-pointer hover:bg-gray-700"
                            onClick={() => handleSelection("REGULAR PASS - Rs. 2000")}
                        >
                            <input type="radio" name="ticket" value="regular" className="accent-green-500" />
                            REGULAR PASS - Rs. 2000
                        </div>

                        <div 
                            className="flex items-center gap-2 bg-[#27272A] p-3 rounded-md cursor-pointer hover:bg-gray-700"
                            onClick={() => handleSelection("EARLY BIRD - Rs. 1000")}
                        >
                            <input type="radio" name="ticket" value="early" className="accent-green-500" />
                            EARLY BIRD - Rs. 1000
                        </div>
                    </div>
                )}
              </div>
            </div>

            {/* Quantity & Button Section */}
            <div
              className="flex flex-col md:flex-row items-center gap-12 w-full"
              style={{ marginTop: "12px" }}
            >
              {/* Quantity Selector */}
              <div
                className="flex items-center bg-[#18181B] text-white rounded-full "
                style={{ padding: "4px" }}
              >
                <button
                  className="text-[20px] cursor-pointer"
                  onClick={() => dispatch(decrement())}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  -
                </button>
                <span className="text-[18px]">{quantity}</span>
                <button
                  className="text-[20px] cursor-pointer"
                  style={{ paddingLeft: "10px", paddingRight: "6px" }}
                  onClick={() => dispatch(increment())}
                >
                  +
                </button>
              </div>

              {/* Book Now Button */}
              <Link to="booking-confirmation">
                <button className="bg-[#18181B] text-white w-full md:w-[350px] h-[37px] text-[15px] font-semibold rounded-[25px] cursor-pointer">
                  Book Now
                </button>
              </Link>

              {/* Favorite & Share Icons */}
              <div className="w-full md:w-auto flex justify-center gap-7 text-white text-[30px] md:text-[25px] cursor-pointer">
                <FaHeart className="hover:text-red-500" />
                <FaShareAlt className="hover:text-gray-400" />
              </div>
            </div>

            {/* Price Summary Section */}
            <div
              className="bg-[#18181B] p-5 rounded-xl text-white w-full"
              style={{ marginTop: "30px" }}
            >
              <div
                className="flex justify-between text-[16px]"
                style={{ padding: "8px 14px" }}
              >
                <span>Subtotal</span>
                <span>INR {quantity * 299.99}</span>
              </div>
              <div
                className="flex justify-between text-[16px] text-yellow-400 mt-2"
                style={{ paddingBottom: "10px", paddingLeft: "11px" }}
              >
                <span>+ Other Charges</span>
              </div>
              <hr className="border-gray-700" />
              <div
                className="flex justify-between text-[15px] font-semibold"
                style={{ padding: "14px" }}
              >
                <span>Total Amount</span>
                <span>INR {(quantity * 299.99 + 75).toFixed(2)}</span>
              </div>
            </div>

            {/* Event Info */}
            <div style={{ marginTop: "32px" }}>
              <h3 className="text-[22px] font-semibold">Event Info</h3>
              <ul className="text-[16px] text-gray-400 list-disc pl-6 pt-2">
                <li>Event Restriction: 18+ event with valid ID required.</li>
                <li>Event Time: Doors open at 9:00 PM, no re-entry.</li>
                <li>
                  Prohibited Items: No outside food, drinks, or large bags.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Details */}
      <div
  className="bg-black text-white flex flex-col md:flex-row justify-center items-center py-12 md:py-20"
  style={{ paddingTop: "45px" }}
>
  <img
    className="w-full max-w-[425px] h-auto"
    src={VenueDetails}
    alt="Venue Details"
  />
  <img
    className="w-full max-w-[676px] h-auto mt-6 md:mt-0 md:ml-8"
    src={Map}
    alt="Map"
  />
</div>

      {/* Terms & Conditions */}
      <div className="bg-black flex justify-center px-4 py-12 md:py-24 mb-16">
  <div className="w-full max-w-[1200px]">
    {/* Heading with increased margin-bottom for spacing */}
    <h3 className="text-[28px] font-bold text-white mb-8">
      Terms & Conditions
    </h3>
    <ul className="text-[16px] text-gray-400 list-disc pl-6 space-y-4">
      <li>If you were denied entry, please email at bash@gmail.com</li>
      <li>
        In case of event cancellation, refunds will only be processed if payouts
        haven't been released.
      </li>
      <li>
        Bash is not responsible for intellectual property issues during
        performances.
      </li>
      <li>Tickets allow “Single Entry Per Day” and are non-refundable.</li>
      <li>
        Attendees must carry a valid ID proof for age verification at the venue.
      </li>
      <li>
        The event organizers reserve the right to refuse entry without providing a
        reason.
      </li>
      <li>
        Outside food and beverages are strictly prohibited inside the venue.
      </li>
      <li>
        The event schedule and lineup are subject to change without prior notice.
      </li>
    </ul>
  </div>
</div>

</>
  );
};

export default EventDetails;
