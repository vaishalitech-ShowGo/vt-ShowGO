import React from "react";
import EventsImage4 from "../assets/events4.png";
import Mapp from "../assets/Map1.png";
import VenueDetails from "../assets/VenueDetails.png";
import Footer from "../components/Footer";
import HeartNShare from "../assets/HeartNShare.png";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/CartSlice";

const EventDetails = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <div
        className="bg-black flex items-center justify-center"
        style={{ padding: "40px" }}
      >
        <div className="flex items-start justify-around max-w-[1200px] w-full">
          {/* Left Side Image */}
          <div className="relative">
            <img
              src={EventsImage4}
              alt="Event"
              className="h-[544px] w-[463px] rounded-xl"
            />
          </div>

          {/* Right Side Content */}
          <div className="text-white w-[600px]" style={{ marginLeft: "40px" }}>
            <h1 className="text-[40px]">Summer Music Festival</h1>
            <h2
              className="text-[22px] text-gray-400"
              style={{ marginTop: "8px" }}
            >
              Unleashing the Extraordinary
            </h2>
            <p
              className="text-[14px] text-[#D5D5D5] leading-relaxed"
              style={{ marginTop: "16px" }}
            >
              Experience an unforgettable night of live performances from world-{" "}
              <br /> renowned artists, featuring a perfect blend of genres from
              rock to <br /> electronic dance music.
            </p>

            {/* Price Section */}
            <div className="flex items-center" style={{ marginTop: "20px" }}>
              <span className="text-[30px] font-semibold">
                <span className="text-[18px]">INR</span> 299.99
              </span>
            </div>

            {/* Step 5: Quantity & Button Section (Updated with Redux) */}
            <div
              className="flex items-center gap-4"
              style={{ marginTop: "12px" }}
            >
              {/* Quantity Selector */}
              <div
                className="flex items-center bg-[#18181B] text-white rounded-full"
                style={{ padding: "2px 8px" }}
              >
                <button
                  className="text-[20px]"
                  style={{ paddingBottom: "5px", paddingLeft: "8px" }}
                  onClick={() => dispatch(decrement())} // Dispatch decrement action
                >
                  -
                </button>
                <span
                  className="mx-4 text-[18px]"
                  style={{ paddingLeft: "25px" }}
                >
                  {quantity}
                </span>
                <button
                  className="text-[20px] px-2"
                  style={{
                    paddingBottom: "5px",
                    paddingLeft: "25px",
                    paddingRight: "8px",
                  }}
                  onClick={() => dispatch(increment())} // Dispatch increment action
                >
                  +
                </button>
              </div>

              {/* Book Now Button */}
              <button className="bg-[#18181B] text-white w-[350px] h-[37px] text-[15px] font-semibold rounded-[25px] cursor-pointer">
                Book Now
              </button>

              {/* Favorite & Share Buttons */}
              <div>
                <img
                  className="h-[50px]"
                  src={HeartNShare}
                  alt=""
                  style={{ paddingBottom: "10px" }}
                />
              </div>
            </div>

            {/* Price Summary Section */}
            <div
              className="bg-[#18181B] p-5 rounded-xl text-white"
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
              <ul
                className="text-[16px] text-gray-400 list-disc"
                style={{ paddingLeft: "30px", paddingTop: "7px" }}
              >
                <li>Event Restriction: 18+ event with valid ID required.</li>
                <li>
                  Event Time and Dress Code: Doors open at 9:00 PM, no re-entry,
                  casual or themed attire encouraged.
                </li>
                <li>
                  Prohibited Items: Outside food, drinks, large bags, and
                  professional cameras are not allowed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Details */}
      <div
        className="bg-black text-white flex justify-around"
        style={{ paddingTop: "45px" }}
      >
        <img
          className="h-[237px] w-[425px]"
          src={VenueDetails}
          alt=""
          style={{ marginRight: "-305px" }}
        />
        <img className="h-[346.22px] w-[676px]" src={Mapp} alt="" />
      </div>

      {/* Terms & Conditions */}
      <div className="bg-black">
        <div style={{ paddingTop: "82px", paddingLeft: "180px" }}>
          <h3 className="text-[22px] font-semibold text-white">
            Terms & Conditions
          </h3>
          <ul
            className="text-[16px] text-gray-400 list-disc"
            style={{ paddingLeft: "30px", paddingTop: "7px" }}
          >
            <li>If you were denied entry, please email at bash@gmail.com</li>
            <li>
              In case of event cancellation, Bash would be responsible to issue
              refunds only if payouts have not been released to the event
              organiser before the cancellation was communicated.
            </li>
            <li>
              Additionally, Bash shall not be held liable or responsible for any
              violation of intellectual property rights that may arise out of
              any Artist performance at the event.
            </li>
            <li>
              Your ticket allows only “Single Entry Per Day”. Tickets are
              non-cancelable, non-refundable and non-transferable.
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EventDetails;
