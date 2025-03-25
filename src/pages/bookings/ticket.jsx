import React, { useState ,useEffect} from "react";
import qrcode from "../../assets/images/qrcode.png";
const Ticket = () => {
  const [venueAddress, setVenueAddress] = useState("");
  const [name ,setName ]=useState("");
 

  useEffect(() => {
    setVenueAddress("polyhubfood court Vadgaon bk pune 411041");
    setName("Alok Kumar Singh");
  }, []);
   

  return (
    <>
      <div className=" h-96 w-52 bg-white rounded-4xl relative  flex flex-col ">
        {/* Spacer to make margin-top effect visible */}
        <div className="h-4"></div>
        {/* Black Box */}
        <div className="bg-black w-full flex flex-col justify-center items-center  p-1">
          <div className="text-sm font-semibold font-serif">Sonic Vibes</div>
          <div className="text-xs text-center font-serif ">Night</div>
        </div>
        <div className="w-full flex font-serif justify-center p-1">
          <div className="text-[8px] font-serif text-gray-500">
            The Sound of Arijit Singh
          </div>
        </div>
        <div className="w-full h-32 flex ">
          <div className="pl-5 pt-2 h-full w-full font-serif flex-col flex gap-2">
            {/* venue details  */}
            <div className="venue">
              <div className="title-field text-[8px] font-serif text-black font-semibold ">
                Venue
              </div>
              <div className="description text-[8px] font-serif text-gray-500">
                {venueAddress && venueAddress.length > 30
                  ? venueAddress.slice(0, 27) + "..."
                  : venueAddress}
              </div>
            </div>
            {/* Quantity */}
            <div className="Quantity">
              <div className="title-field font-serif text-[8px] text-black font-semibold ">
                Quantity
              </div>
              <div className=" description font-serif text-[8px] text-gray-500 ">2</div>
            </div>
            {/* name  */}
            <div className="Name">
              <div className="title-field text-[8px] font-serif text-black font-semibold ">
                Name
              </div>
              <div className="text-[8px] font-serif text-gray-500">
      {name && name.length > 20 ? name.slice(0, 17) + "..." : name}
    </div>
            </div>
          </div>
          <div className="pr-4 pl-2 pt-2 font-serif h-full w-full flex-col flex gap-2">
            {/* Date*/}
            <div className="Date">
              <div className="title-field font-serif text-[8px] text-black font-semibold ">
                Date
              </div>
              <div className="font-serif description text-[8px] text-gray-500 ">
                April 20 ,2025
              </div>
            </div>
            {/* Time */}
            <div className="Time">
              <div className="title-field font-serif text-[8px] text-black font-semibold ">
                Time
              </div>
              <div className="font-serif description text-[8px] text-gray-500 ">
                2:00 PM
              </div>
            </div>
            {/*AccessPass  */}
            <div className="AccessPass">
              <div className="font-serif title-field text-[8px] text-black font-semibold ">
                Access Pass
              </div>
              <div className="font-serif description text-[8px] text-gray-500 ">
                Premium Pass : Rs.<span>700/-</span>
              </div>
            </div>
          </div>
        </div>
        {/* qr code here  */}
        <div className="w-full h-32 flex justify-center p-1">
          <div className="h-30 w-30  flex items-center justify-center">
            <img
              src={qrcode}
              alt="QR Code"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        {/* Black Box */}
        <div className="bg-black w-full flex flex-col justify-center items-center  p-1">
          <div className="text-[8px] text-gray-400 font-serif">booked on</div>
          <div className="bg-gray-400 w-18 h-[0.1px] "></div>
          <div className="text-[12px]  mt-0 text-center font-serif ">Show GO</div>
        </div>
        {/* Spacer to make margin-top effect visible */}
        <div className="h-4"></div>
        {/* Circles */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-3 h-6 w-6 bg-black rounded-full"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-3 h-6 w-6 bg-black rounded-full"></div>
      </div>
    </>
  );
};

export default Ticket;
