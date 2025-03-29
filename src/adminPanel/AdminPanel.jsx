import { useState, useEffect } from "react";
import EventList from "../pages/EventList.jsx";
import { Client, Databases, ID, Storage } from "appwrite";

const AdminPanel = () => {
     const [showEventList, setShowEventList] = useState(false);
     const [editingIndex, setEditingIndex] = useState(null);
     const [events, setEvents] = useState([]);
     const [loading, setLoading] = useState(false);

     // Initialize Appwrite client
     const client = new Client()
          .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
          .setProject('67699acf002ecc80c89f'); // Your project ID

     const databases = new Databases(client);
     const storage = new Storage(client);

     const [eventData, setEventData] = useState({
          name: "",
          description: "",
          price: "",
          discountPrice: "",
          ticketPrice: "",
          discount: "",
          eventInfo: "",
          categories: "",
          location: "",
          organiserId: "",
          tags: "",
          totalTickets: "",
          ticketLeft: "",
          phase: "",
          image: null,
          existingImage: null,
          date: "",
          time: ""
     });

     useEffect(() => {
          fetchEvents();
     }, []);

     const fetchEvents = async () => {
          setLoading(true);
          try {
               const response = await databases.listDocuments(
                    '6769b0dd00017ee9df9d', // Your database ID
                    'events' // Your collection ID
               );
               setEvents(response.documents);
          } catch (error) {
               console.error("Error fetching events:", error);
          } finally {
               setLoading(false);
          }
     };

     const handleEdit = (index) => {
          const eventToEdit = events[index];
          setEventData({
               ...eventToEdit,
               existingImage: eventToEdit.imageField,
               image: null
          });
          setEditingIndex(index);
          setShowEventList(false);
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          // Required fields validation
          if (!eventData.name.trim() || !eventData.description.trim() ||
               !eventData.price.trim() || !eventData.organiserId.trim() ||
               !eventData.totalTickets.trim() || !eventData.date || !eventData.time) {
               alert("All required fields must be filled!");
               return;
          }

          setLoading(true);

          try {
               let imageUrl = eventData.existingImage;

               // Upload new image if provided
               if (eventData.image) {
                    const fileId = ID.unique();
                    await storage.createFile(
                         '66dd97eb0009f68104ef', // Your bucket ID
                         fileId,
                         eventData.image
                    );

                    // Get file preview URL
                    imageUrl = storage.getFilePreview(
                         '66dd97eb0009f68104ef', // Your bucket ID
                         fileId
                    ).href;
               }

               const eventPayload = {
                    name: eventData.name,
                    description: eventData.description,
                    price: parseFloat(eventData.price),
                    discountPrice: eventData.discountPrice ? parseFloat(eventData.discountPrice) : null,
                    ticketPrice: eventData.ticketPrice ? parseFloat(eventData.ticketPrice) : null,
                    discount: eventData.discount ? parseFloat(eventData.discount) : null,
                    eventInfo: eventData.eventInfo,
                    categories: eventData.categories,
                    location: eventData.location,
                    organiserId: eventData.organiserId,
                    tags: eventData.tags,
                    totalTickets: parseInt(eventData.totalTickets),
                    ticketLeft: parseInt(eventData.ticketLeft || eventData.totalTickets),
                    phase: eventData.phase,
                    imageField: imageUrl,
                    date: eventData.date,
                    time: eventData.time
               };

               if (editingIndex !== null) {
                    // Update existing event
                    await databases.updateDocument(
                         'YOUR_DATABASE_ID',
                         'YOUR_COLLECTION_ID',
                         events[editingIndex].$id,
                         eventPayload
                    );
                    alert("Event Updated Successfully!");
               } else {
                    // Create new event
                    await databases.createDocument(
                         'YOUR_DATABASE_ID',
                         'YOUR_COLLECTION_ID',
                         ID.unique(),
                         eventPayload
                    );
                    alert("Event Added Successfully!");
               }

               // Refresh events list
               await fetchEvents();
               resetForm();
               setShowEventList(true);
          } catch (error) {
               console.error("Error saving event:", error);
               alert("Error saving event. Please try again.");
          } finally {
               setLoading(false);
          }
     };

     const handleDelete = async (eventId) => {
          if (window.confirm("Are you sure you want to delete this event?")) {
               try {
                    await databases.deleteDocument(
                         'YOUR_DATABASE_ID',
                         'YOUR_COLLECTION_ID',
                         eventId
                    );
                    await fetchEvents();
                    alert("Event deleted successfully!");
               } catch (error) {
                    console.error("Error deleting event:", error);
                    alert("Error deleting event. Please try again.");
               }
          }
     };

     const resetForm = () => {
          setEventData({
               name: "",
               description: "",
               price: "",
               discountPrice: "",
               ticketPrice: "",
               discount: "",
               eventInfo: "",
               categories: "",
               location: "",
               organiserId: "",
               tags: "",
               totalTickets: "",
               ticketLeft: "",
               phase: "",
               image: null,
               existingImage: null,
               date: "",
               time: ""
          });
          setEditingIndex(null);
     };

     return (
          <div className="flex min-h-screen bg-gray-900">
               <aside className="w-1/4 bg-gray-800 p-5 min-h-screen">
                    <button
                         onClick={() => { setShowEventList(false); resetForm(); }}
                         className="block w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mb-4"
                    >
                         {editingIndex !== null ? "Edit Event" : "Add Event"}
                    </button>
                    <button
                         onClick={() => setShowEventList(true)}
                         className="block w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md"
                    >
                         Event List
                    </button>
               </aside>
               <div className="w-3/4 flex justify-center items-center p-5">
                    {loading ? (
                         <div className="text-white">Loading...</div>
                    ) : showEventList ? (
                         <EventList
                              events={events}
                              onEdit={handleEdit}
                              onDelete={handleDelete}
                         />
                    ) : (
                         <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-4xl text-white">
                              <h2 className="text-3xl font-bold text-center mb-6">
                                   {editingIndex !== null ? "Edit Event" : "Add New Event"}
                              </h2>
                              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                                   {Object.keys(eventData).map((key, index) => (
                                        key !== "image" && key !== "existingImage" && (
                                             <div key={index} className="bg-gray-700 p-3 rounded-md">
                                                  <input
                                                       type={key === "date" ? "date" : key === "time" ? "time" : "text"}
                                                       placeholder={key}
                                                       value={eventData[key]}
                                                       onChange={(e) => setEventData({ ...eventData, [key]: e.target.value })}
                                                       className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600"
                                                       required={
                                                            ["name", "description", "price", "organiserId", "totalTickets", "date", "time"].includes(key)
                                                       }
                                                  />
                                             </div>
                                        )
                                   ))}

                                   <div className="col-span-2">
                                        <label className="block text-white mb-2">Upload Image</label>
                                        <input
                                             type="file"
                                             accept="image/*"
                                             onChange={(e) => setEventData({ ...eventData, image: e.target.files[0] })}
                                             className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600"
                                        />
                                        {eventData.existingImage && (
                                             <img
                                                  src={eventData.existingImage}
                                                  alt="Event"
                                                  className="mt-3 max-h-32 rounded-md"
                                             />
                                        )}
                                   </div>

                                   <div className="col-span-2 text-center mt-4">
                                        <button
                                             type="submit"
                                             className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md w-full"
                                             disabled={loading}
                                        >
                                             {loading ? "Processing..." : editingIndex !== null ? "Update Event" : "Add Event"}
                                        </button>
                                   </div>
                              </form>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default AdminPanel;