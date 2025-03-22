import { useState } from "react";

const AdminPanel = () => {
     const [eventName, setEventName] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState("");
     const [discountPrice, setDiscountPrice] = useState("");
     const [ticketPrice, setTicketPrice] = useState("");
     const [discount, setDiscount] = useState("");
     const [eventInfo, setEventInfo] = useState("");
     const [image, setImage] = useState(null);

     const handleSubmit = (e) => {
          e.preventDefault();
          if (
               !eventName ||
               !description ||
               !price ||
               !ticketPrice ||
               !discount ||
               !eventInfo ||
               !image
          ) {
               alert("All fields are required!");
               return;
          }

          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onloadend = () => {
               const newEvent = {
                    eventName,
                    description,
                    price,
                    discountPrice,
                    ticketPrice,
                    discount,
                    eventInfo,
                    image: reader.result,
               };

               const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
               storedEvents.push(newEvent);
               localStorage.setItem("events", JSON.stringify(storedEvents));

               setEventName("");
               setDescription("");
               setPrice("");
               setDiscountPrice("");
               setTicketPrice("");
               setDiscount("");
               setEventInfo("");
               setImage(null);
               alert("Event Added Successfully!");
          };
     };

     return (
          <div className="flex justify-center items-center min-h-screen bg-gray-900">
               <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-3xl text-white">
                    <h2 className="text-3xl font-bold text-center mb-6">Add New Event</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                         <input
                              type="text"
                              placeholder="Event Name"
                              value={eventName}
                              onChange={(e) => setEventName(e.target.value)}
                              className="w-full p-3 rounded-md bg-gray-700 text-white border-none"
                         />
                         <textarea
                              placeholder="Event Description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="w-full p-3 rounded-md bg-gray-700 text-white border-none h-20"
                         />

                         <div className="grid grid-cols-2 gap-4">
                              <input
                                   type="number"
                                   placeholder="Price (₹)"
                                   value={price}
                                   onChange={(e) => setPrice(e.target.value)}
                                   className="w-full p-3 rounded-md bg-gray-700 text-white border-none"
                              />
                              <input
                                   type="number"
                                   placeholder="Discount Price (₹)"
                                   value={discountPrice}
                                   onChange={(e) => setDiscountPrice(e.target.value)}
                                   className="w-full p-3 rounded-md bg-gray-700 text-white border-none"
                              />
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <input
                                   type="number"
                                   placeholder="Ticket Price (₹)"
                                   value={ticketPrice}
                                   onChange={(e) => setTicketPrice(e.target.value)}
                                   className="w-full p-3 rounded-md bg-gray-700 text-white border-none"
                              />
                              <input
                                   type="number"
                                   placeholder="Discount (%)"
                                   value={discount}
                                   onChange={(e) => setDiscount(e.target.value)}
                                   className="w-full p-3 rounded-md bg-gray-700 text-white border-none"
                              />
                         </div>

                         <textarea
                              placeholder="Event Info"
                              value={eventInfo}
                              onChange={(e) => setEventInfo(e.target.value)}
                              className="w-full p-3 rounded-md bg-gray-700 text-white border-none h-20"
                         />

                         <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage(e.target.files[0])}
                              className="w-full p-3 rounded-md bg-gray-700 text-white border-none"
                         />

                         <button
                              type="submit"
                              className="w-full bg-green-500 hover:bg-green-600 p-3 rounded-md text-white font-semibold"
                         >
                              Add Event
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default AdminPanel;
