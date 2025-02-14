"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Signing up...");
    // Handle sign-up logic here, e.g., create user account
    router.push("/auth/sign-up"); // Redirect to the /auth/sign-up page after sign-up
  };
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here, e.g., create user account
    router.push("/Auth/SignUp"); // Redirect to the /auth/sign-up page after sign-up
  };
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-[90%] max-w-md">
      <h2
        className="text-2xl font-bold text-center mb-4 text-black"
        style={{ fontFamily: "Leckerli One, cursive" }}
      >
        Log in to your Account
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label
          htmlFor="email"
          className="text-sm font-medium text-black"
          style={{ fontFamily: "Leckerli One, cursive" }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
        <label
          htmlFor="username"
          className="text-sm font-medium text-black"
          style={{ fontFamily: "Leckerli One, cursive" }}
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        {/* Phone Number Field */}
        <label
          htmlFor="phoneNumber"
          className="text-sm font-medium text-black"
          style={{ fontFamily: "Leckerli One, cursive" }}
        >
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
        <label
          htmlFor="password"
          className="text-sm font-medium text-black"
          style={{ fontFamily: "Leckerli One, cursive" }}
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-sm text-gray-600 hover:text-pink-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white rounded-lg p-2 mt-4 transition-all duration-200"
        >
          Sign Up
        </button>
        <p className="text-sm text-center mt-4">
          {"Don't have an account? "}
          <button
            onClick={handleSignUp}
            className="text-pink-500 font-medium hover:underline"
          >
            {" "}
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 w-full">
      <LoginCard />
    </div>
  );
};

export default SignupPage;
