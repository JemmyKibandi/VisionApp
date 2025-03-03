"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for navigation in App Directory
import { motion, useAnimate } from "framer-motion"; // Import necessary Framer Motion components
import "./styles.css"; // Import your styles

const Home = () => {
  const fetchUserCount = async () => {
    const response = await fetch("http://localhost:5001/vision-board-4ab0b/us-central1/getUsersCount");
    const data = await response.json();
    console.log("User count:", data.count);
};

  const [scope, animate] = useAnimate();
  const router = useRouter(); // useRouter hook to handle navigation

  useEffect(() => {
    const containerElement = document.querySelector(".container") as HTMLElement;

    // Check if the container element exists
    if (containerElement) {
      const containerWidth = containerElement.offsetWidth;

      // Define the animation
      const animateLoader = async () => {
        await animate(
          [
            [scope.current, { x: 0, width: "100%" }],
            [scope.current, { x: containerWidth, width: "0%" }, { delay: 0.6 }],
          ],
          {
            duration: 2,
            repeat: 1,
            repeatDelay: 0.8,
          }
        );
        // Redirect after animation completes
        router.push("/Auth/Login");
      };

      animateLoader();
    } else {
      console.error("Container element not found");
    }
  }, [animate, scope, router]); // Added `router` as dependency

  return (
    <div className="container">
      <motion.div ref={scope} className="loader" />
    

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text">
        <i>The Vision Board App ❤️</i>
      </h1>
        </main>
      </div>
    </div>
  );
};

export default Home;
