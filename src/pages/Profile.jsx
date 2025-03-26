import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiSave, FiX, FiArrowLeft, FiMail, FiPhone } from "react-icons/fi";

const Profile = () => {
  const [user, setUser] = useState({
    fullname: "John Doe",
    email: "johndoe@example.com",
    bio: "Web Developer | Tech Enthusiast",
    phoneNumber: "123-456-7890",
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedUser({ ...updatedUser, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(updatedUser);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gray-700 px-6 py-4 flex justify-between items-center border-b border-gray-600">
          <Link to="/" className="flex items-center text-amber-400 hover:text-amber-300">
            <FiArrowLeft className="mr-2" /> Back to Home
          </Link>
          <button
            onClick={() => setEditMode(!editMode)}
            className={`flex items-center px-4 py-2 rounded-lg ${editMode 
              ? "bg-gray-600 hover:bg-gray-500 text-white" 
              : "bg-amber-600 hover:bg-amber-500 text-white"}`}
          >
            {editMode ? (
              <>
                <FiX className="mr-2" /> Cancel
              </>
            ) : (
              <>
                <FiEdit className="mr-2" /> Edit Profile
              </>
            )}
          </button>
        </div>

        {/* Profile Content */}
        <div className="p-6 md:p-8">
          {/* Profile Image and Basic Info */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className="relative group">
              <img
                src={user.profileImage}
                alt="profile"
                className="h-32 w-32 rounded-full border-4 border-amber-500 object-cover shadow-lg"
              />
              {editMode && (
                <label 
                  htmlFor="profile-upload"
                  className="absolute inset-0 bg-black bg-opacity-60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <span className="text-white text-sm font-medium">Change Photo</span>
                  <input
                    type="file"
                    id="profile-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>

            <div className="flex-1">
              {editMode ? (
                <input
                  type="text"
                  name="fullname"
                  value={updatedUser.fullname}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              ) : (
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{user.fullname}</h1>
              )}
              
              {editMode ? (
                <input
                  type="text"
                  name="bio"
                  value={updatedUser.bio}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              ) : (
                <p className="text-gray-300 italic mb-4">{user.bio}</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <FiMail className="text-amber-400 mr-3 text-xl" />
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              ) : (
                <span className="text-gray-300">{user.email}</span>
              )}
            </div>

            <div className="flex items-center">
              <FiPhone className="text-amber-400 mr-3 text-xl" />
              {editMode ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={updatedUser.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              ) : (
                <span className="text-gray-300">{user.phoneNumber}</span>
              )}
            </div>
          </div>

          {/* Save Button in Edit Mode */}
          {editMode && (
            <div className="mt-8">
              <button
                onClick={handleSave}
                className="w-full md:w-auto flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg transition-colors"
              >
                <FiSave className="mr-2" /> Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;