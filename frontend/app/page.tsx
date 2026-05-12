"use client";

import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-2">Eventra</h1>

        <p className="text-center text-gray-500 mb-6">
          Discover amazing events near you
        </p>

        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`py-2 rounded-lg font-medium ${
              isLogin
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`py-2 rounded-lg font-medium ${
              !isLogin
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Forms */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 mb-4"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3 mb-4"
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-3 mb-4"
          />
        )}

        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
          {isLogin ? "Sign In" : "Create Account"}
        </button>

        <p className="text-sm text-center mt-5 text-gray-500">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-black font-medium cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </main>
  );
}