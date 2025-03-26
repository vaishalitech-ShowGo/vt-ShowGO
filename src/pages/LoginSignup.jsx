import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      login(); 
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col justify-center p-6">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ticket h-10 w-10 text-white"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold ml-2 text-white">ShowGo</h1>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Snap Tickets, Share Moments
          </h2>

          <p className="text-white md:text-ml lg:text-base xl:text-xl">
            Book tickets for concerts, sports, theater, and more with just a few clicks.
          </p>
        </div>

        {/* Auth Form Section */}
        <div className="bg-white/10 rounded-lg p-1 ">
          {/* Login/Signup Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 rounded-lg p-1 flex gap-2">
              <button
                className={`w-32 h-12 text-lg font-semibold rounded-md transition-all duration-300 border-2 ${
                  isLogin
                    ? "bg-[#18181B] text-[#FAFAFA] border-[#18181B] hover:bg-[#28282E]"
                    : "bg-transparent text-[#71717A] border-transparent hover:bg-[#28282E]"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`w-32 h-12 text-lg font-semibold rounded-md transition-all duration-300 border-2 ${
                  !isLogin
                    ? "bg-[#18181B] text-[#FAFAFA] border-[#18181B] hover:bg-[#28282E]"
                    : "bg-transparent text-[#71717A] border-transparent hover:bg-[#28282E]"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Full Name - Only for Sign Up */}
              {!isLogin && (
                <div className="space-y-3">
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="block w-full h-11 pl-10 pr-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full h-11 pl-10 pr-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3">
                <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="block w-full h-11 pl-10 pr-10 py-2 text-sm rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <path d="M14.12 14.12a3 3 0 0 1-4.24-4.24"></path>
                        <line x1="3" x2="21" y1="3" y2="21"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password - Only for Sign Up */}
              {!isLogin && (
                <div className="space-y-3">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="block w-full h-11 pl-10 pr-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-11 flex items-center justify-center gap-2 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {isLogin ? "Login" : "Create Account"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>

          {/* Toggle Link */}
          <div className="mt-6 text-center text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 hover:underline p-0 h-auto text-white"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;