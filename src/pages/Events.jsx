import EventsImage1 from "../assets/events1.png";
import EventsImage2 from "../assets/events2.png";
import EventsImage3 from "../assets/events3.png";
import HeartNShare from "../assets/HeartNShare.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <>
      <div className="min-h-[600px] bg-black flex items-center justify-center gap-43">
        <img src={EventsImage1} alt="" className="h-[544px] w-[463px]" />

        <div
          className="flex flex-col gap-3 h-[476px] w-[655px]"
          style={{ position: "relative", top: "-50px" }}
        >
          <h1 className="text-[50px] text-white">Summer Music Festival 2024</h1>
          <p className="max-w-[570px] text-[30px] text-[#D5D5D5]">
            Join us for an electrifying evening filled with live music,
            captivating performances, and vibrant energy. Discover a lineup of
            talented artists, enjoy delicious food and drinks, and connect with
            fellow music lovers in an immersive atmosphere.
          </p>

          <h1 className="text-[45px] text-white">
            FROM: <span className="text-[#09FF67]">Rs. 5000</span>
          </h1>

          <div className="flex items-center gap-4">
            <Link to="/event-details">
              <button
                className="bg-white text-black w-[437px] h-[57px] text-[20px] font-semibold rounded-[25px] cursor-pointer"
              >
                Buy Now
              </button>
            </Link>

            <img
              src={HeartNShare}
              alt="Heart and Share"
              className="w-[164px] h-[70px]"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[550px] bg-black flex items-center justify-center gap-43">
        <img src={EventsImage2} alt="" className="h-[544px] w-[463px]" />

        <div
          className="flex flex-col gap-4 h-[476px] w-[655px]"
          style={{ position: "relative", top: "-50px" }}
        >
          <h1 className="text-[50px] text-white">Summer Music Festival 2024</h1>
          <p className="max-w-[570px] text-[30px] text-[#D5D5D5]">
            Join us for an electrifying evening filled with live music,
            captivating performances, and vibrant energy. Discover a lineup of
            talented artists, enjoy delicious food and drinks, and connect with
            fellow music lovers in an immersive atmosphere.
          </p>

          <h1 className="text-[45px] text-white">
            FROM: <span className="text-[#09FF67]">Rs. 5000</span>
          </h1>

          <div className="flex items-center gap-4 mt-4">
            <Link to="/event-details">
              <button className="bg-white text-black w-[437px] h-[57px] text-[20px] font-semibold rounded-[25px] cursor-pointer">
                Buy Now
              </button>
            </Link>
            <img
              src={HeartNShare}
              alt="Heart and Share"
              className="w-[164px] h-[70px]"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[550px] bg-black flex items-center justify-center gap-43">
        <img
          src={EventsImage3}
          alt=""
          className="h-[544px] w-[463px]"
          style={{ marginTop: "40px" }}
        />

        <div
          className="flex flex-col gap-4 h-[476px] w-[655px]"
          style={{ position: "relative", top: "-37px" }}
        >
          <h1 className="text-[50px] text-white">Summer Music Festival 2024</h1>
          <p className="max-w-[570px] text-[30px] text-[#D5D5D5]">
            Join us for an electrifying evening filled with live music,
            captivating performances, and vibrant energy. Discover a lineup of
            talented artists, enjoy delicious food and drinks, and connect with
            fellow music lovers in an immersive atmosphere.
          </p>

          <h1 className="text-[45px] text-white">
            FROM: <span className="text-[#09FF67]">Rs. 5000</span>
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <Link to="/event-details">
              <button className="bg-white text-black w-[437px] h-[57px] text-[20px] font-semibold rounded-[25px] cursor-pointer">
                Buy Now
              </button>
            </Link>
            <img
              src={HeartNShare}
              alt="Heart and Share"
              className="w-[164px] h-[70px]"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
