import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black"
      style={{ marginTop: "-100px" }}
    >
      <div
        className="bg-gray-900 text-white rounded-lg shadow-lg w-96"
        style={{ padding: "32px" }}
      >
        <h2
          className="text-2xl font-bold text-center"
          style={{ marginBottom: "24px" }}
        >
          {isLogin ? "Login Form" : "Signup Form"}
        </h2>

        {/* Toggle Buttons */}
        <div
          className="flex bg-gray-200 rounded-lg"
          style={{ padding: "4px", marginBottom: "24px" }}
        >
          <button
            className={`flex-1 rounded-md font-medium transition cursor-pointer ${
              isLogin ? "bg-black text-gray-400" : "text-gray-600"
            }`}
            style={{ paddingTop: "8px", paddingBottom: "8px" }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`cursor-pointer flex-1 rounded-md font-medium transition ${
              !isLogin
                ? "bg-black text-gray-400"
                : "text-gray-600"
            }`}
            style={{ paddingTop: "8px", paddingBottom: "8px" }}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Form Fields */}
        <form>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border bg-black border-gray-400 rounded-md focus:outline-none focus:border-gray-900"
            style={{
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              marginBottom: "16px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border bg-black border-gray-400 rounded-md focus:outline-none focus:border-gray-900"
            style={{
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              marginBottom: "16px",
            }}
          />

          {/* Show Confirm Password only for Signup */}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full bg-black border border-gray-400 rounded-md focus:outline-none focus:border-gray-900"
              style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingLeft: "12px",
                paddingRight: "12px",
                marginBottom: "16px",
              }}
            />
          )}

          <button
            className="w-full bg-black text-white rounded-md text-lg font-semibold shadow-md transition hover:bg-gray-700 cursor-pointer"
            type="submit"
            style={{ paddingTop: "12px", paddingBottom: "12px" }}
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Toggle Signup Option */}
        <p
          className="text-center text-gray-600 text-sm"
          style={{ marginTop: "16px" }}
        >
          {isLogin ? "Not a member?" : "Already have an account?"}{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup now" : "Login now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
