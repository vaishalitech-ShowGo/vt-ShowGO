import React from "react";
import { useForm } from "react-hook-form";

const AdminPanel = () => {
     const { register, handleSubmit, setValue } = useForm();

     const onSubmit = (data) => {
          console.log("Event Data:", data);
     };

     // Function to handle numeric input for Ticket Price and Discount
     const handleNumericInput = (e, fieldName) => {
          const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and decimals
          setValue(fieldName, value); // Update the form value
     };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-8">
               <div className="w-full max-w-4xl bg-gray-800 shadow-2xl border border-gray-700 rounded-2xl p-8">
                    <h2 className="text-center text-3xl font-bold mb-8 text-blue-400">Admin Panel - Add Event</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                         {/* Event Image */}
                         <div className="flex flex-col gap-2">
                              <label className="text-gray-300 text-sm font-medium">Event Image</label>
                              <input
                                   type="file"
                                   {...register("eventImage")}
                                   className="w-full bg-gray-700 text-gray-300 p-3 border border-gray-600 rounded-lg cursor-pointer focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                              />
                         </div>

                         {/* Event Name */}
                         <div className="flex flex-col gap-2">
                              <label className="text-gray-300 text-sm font-medium">Event Name</label>
                              <input
                                   {...register("eventName")}
                                   placeholder="Enter Event Name"
                                   className="w-full bg-gray-700 text-white p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
                              />
                         </div>

                         {/* Event Bio */}
                         <div className="flex flex-col gap-2">
                              <label className="text-gray-300 text-sm font-medium">Event Bio</label>
                              <textarea
                                   {...register("eventBio")}
                                   placeholder="Enter Event Bio"
                                   className="w-full bg-gray-700 text-white p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
                                   rows="4"
                              ></textarea>
                         </div>

                         {/* Ticket Price & Discount */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="flex flex-col gap-2">
                                   <label className="text-gray-300 text-sm font-medium">Ticket Price (INR)</label>
                                   <input
                                        {...register("ticketPrice")}
                                        type="text" // Changed to text input
                                        placeholder="Enter Price"
                                        className="w-full bg-gray-700 text-white p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
                                        onChange={(e) => handleNumericInput(e, "ticketPrice")} // Handle numeric input
                                   />
                              </div>
                              <div className="flex flex-col gap-2">
                                   <label className="text-gray-300 text-sm font-medium">Discount (%)</label>
                                   <input
                                        {...register("discount")}
                                        type="text" // Changed to text input
                                        placeholder="Enter Discount"
                                        className="w-full bg-gray-700 text-white p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
                                        onChange={(e) => handleNumericInput(e, "discount")} // Handle numeric input
                                   />
                              </div>
                         </div>

                         {/* Event Info */}
                         <div className="flex flex-col gap-2">
                              <label className="text-gray-300 text-sm font-medium">Event Info</label>
                              <textarea
                                   {...register("eventInfo")}
                                   placeholder="Additional Information"
                                   className="w-full bg-gray-700 text-white p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
                                   rows="4"
                              ></textarea>
                         </div>

                         {/* Submit Button */}
                         <div className="text-center">
                              <button
                                   type="submit"
                                   className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 text-lg font-semibold shadow-md focus:ring-2 focus:ring-blue-400"
                              >
                                   Add Event
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AdminPanel;