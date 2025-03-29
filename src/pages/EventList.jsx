import { useState, useEffect } from "react";

const EventList = ({ events, onEdit, onDelete }) => {
     const [columns, setColumns] = useState([]);
     const [expandedRows, setExpandedRows] = useState(null);

     useEffect(() => {
          if (events.length > 0) {
               const allKeys = new Set();
               events.forEach((event) => {
                    Object.keys(event).forEach((key) => allKeys.add(key));
               });
               setColumns([...allKeys]);
          }
     }, [events]);

     const toggleExpand = (index) => {
          setExpandedRows((prevIndex) => (prevIndex === index ? null : index));
     };

     // Mandatory fields that should always be visible
     const mandatoryFields = [
          "name",
          "ticketPrice",
          "discount",
          "description",
          "imageField",
     ];

     return (
          <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
               <h2 className="text-5xl font-extrabold text-center mb-8 text-white uppercase tracking-wide bg-gray-800 py-3 px-6 rounded-lg shadow-md">
                    Event List
               </h2>

               <div className="bg-gray-100 p-6 rounded-lg shadow-xl w-full max-w-6xl border-4 border-gray-500">
                    {events.length === 0 ? (
                         <p className="text-center text-gray-600 text-lg">No events found.</p>
                    ) : (
                         <div className="overflow-x-auto">
                              <table className="w-full border-collapse text-sm md:text-base border border-gray-400">
                                   <thead className="bg-gray-700 text-white uppercase border-b border-gray-400">
                                        <tr>
                                             <th className="p-4 text-left border-r border-gray-400">ID</th>
                                             {mandatoryFields.map((col, index) => (
                                                  <th
                                                       key={index}
                                                       className="p-4 text-left border-r border-gray-400 capitalize"
                                                  >
                                                       {col.replace(/([A-Z])/g, " $1").trim()}
                                                  </th>
                                             ))}
                                             <th className="p-4 text-left">Actions</th>
                                        </tr>
                                   </thead>

                                   <tbody className="bg-white">
                                        {events.map((event, index) => {
                                             // Extra fields (excluding mandatory ones)
                                             const extraColumns = columns.filter(
                                                  (col) =>
                                                       !mandatoryFields.includes(col) &&
                                                       !col.startsWith("$") && // Exclude Appwrite system fields
                                                       col !== "image" // We use imageField instead
                                             );

                                             return (
                                                  <>
                                                       <tr
                                                            key={index}
                                                            className="border-b border-gray-400 hover:bg-gray-200 transition-all"
                                                       >
                                                            <td className="p-4 font-bold text-gray-700 border-r border-gray-400">
                                                                 #{index + 1}
                                                            </td>

                                                            {/* Event Name */}
                                                            <td className="p-4 border-r border-gray-400">
                                                                 {event.name || "No Event Name"}
                                                            </td>

                                                            {/* Ticket Price */}
                                                            <td className="p-4 border-r border-gray-400">
                                                                 {event.ticketPrice || "N/A"}
                                                            </td>

                                                            {/* Discount */}
                                                            <td className="p-4 border-r border-gray-400">
                                                                 {event.discount || "N/A"}
                                                            </td>

                                                            {/* Description Column (Truncated with Tooltip) */}
                                                            <td className="p-4 border-r border-gray-400">
                                                                 <div className="relative group">
                                                                      <span className="truncate block w-40 text-gray-600 cursor-pointer group-hover:underline">
                                                                           {event.description?.length > 30
                                                                                ? event.description.substring(0, 30) + "..."
                                                                                : event.description || "No Description"}
                                                                      </span>
                                                                      {event.description?.length > 30 && (
                                                                           <div className="absolute left-0 mt-2 w-60 bg-gray-700 text-white text-sm p-2 rounded shadow-md hidden group-hover:block">
                                                                                {event.description}
                                                                           </div>
                                                                      )}
                                                                 </div>
                                                            </td>

                                                            {/* Image Column */}
                                                            <td className="p-4 border-r border-gray-400">
                                                                 {event.imageField ? (
                                                                      <img
                                                                           src={event.imageField}
                                                                           alt="Event"
                                                                           className="w-16 h-16 object-cover rounded-md mx-auto shadow-md"
                                                                      />
                                                                 ) : (
                                                                      "No Image"
                                                                 )}
                                                            </td>

                                                            {/* Actions */}
                                                            <td className="p-4 flex justify-center space-x-2">
                                                                 <button
                                                                      onClick={() => onEdit(index)}
                                                                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md text-sm"
                                                                 >
                                                                      Edit
                                                                 </button>

                                                                 <button
                                                                      onClick={() => onDelete(event.$id)}
                                                                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md text-sm"
                                                                 >
                                                                      Delete
                                                                 </button>

                                                                 {extraColumns.length > 0 && (
                                                                      <button
                                                                           onClick={() => toggleExpand(index)}
                                                                           className={`px-3 py-1 rounded-lg font-semibold shadow-md text-sm transition-all ${expandedRows === index
                                                                                     ? "bg-gray-600 text-white"
                                                                                     : "bg-gray-500 text-white hover:bg-gray-600"
                                                                                }`}
                                                                      >
                                                                           {expandedRows === index
                                                                                ? "▲ Hide Details"
                                                                                : "▼ Show More"}
                                                                      </button>
                                                                 )}
                                                            </td>
                                                       </tr>

                                                       {/* Expanded Details Row */}
                                                       {expandedRows === index && (
                                                            <tr className="bg-gray-300">
                                                                 <td
                                                                      colSpan={mandatoryFields.length + 2}
                                                                      className="p-4"
                                                                 >
                                                                      <div className="bg-white p-4 rounded-lg shadow-md">
                                                                           <strong>Additional Details:</strong>
                                                                           <ul className="mt-2 text-gray-700">
                                                                                {extraColumns.map(
                                                                                     (col, colIndex) =>
                                                                                          event[col] && (
                                                                                               <li key={colIndex} className="py-1">
                                                                                                    <strong>
                                                                                                         {col
                                                                                                              .replace(/([A-Z])/g, " $1")
                                                                                                              .trim()}
                                                                                                         :
                                                                                                    </strong>{" "}
                                                                                                    {event[col]}
                                                                                               </li>
                                                                                          )
                                                                                )}
                                                                           </ul>
                                                                           {/* Close Button */}
                                                                           <button
                                                                                onClick={() => toggleExpand(index)}
                                                                                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md text-sm"
                                                                           >
                                                                                Close Details
                                                                           </button>
                                                                      </div>
                                                                 </td>
                                                            </tr>
                                                       )}
                                                  </>
                                             );
                                        })}
                                   </tbody>
                              </table>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default EventList;
