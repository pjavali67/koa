// Example integration in a Login component
"use client";
import React,{ useState  } from "react";
import LostPassword from "./LostPassword";


const LoginwithLost: React.FC = () => {
  const [showLostPassword, setShowLostPassword] = useState(false);

  return (
    <>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              onClick={() => setShowLostPassword(true)}
              className="text-cyan-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
      {showLostPassword && (
        <LostPassword onClose={() => setShowLostPassword(false)} />
      )}
    </div>
    </>
  );
};

export default LoginwithLost;