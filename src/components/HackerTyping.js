// src/components/HackerTyping.js
import React, { useEffect, useRef } from "react";

const HackerScrolling = () => {
  const containerRef = useRef(null);

  // Array of custom messages
  const customMessages = [
    "Initializing system...",
    "Loading modules...",
    "Connecting to server...",
    "Fetching data...",
    "System ready.",
    "Welcome to Coding Club!",
  ];

  // Function to generate random hacker-like text
  const generateRandomText = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let text = "";
    for (let i = 0; i < Math.floor(Math.random() * 80) + 20; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
  };

  useEffect(() => {
    const container = containerRef.current;

    // Append random lines of text at regular intervals
    const interval = setInterval(() => {
      if (container) {
        // Add a random line of hacker text
        const randomTextLine = document.createElement("div");
        randomTextLine.textContent = generateRandomText();
        randomTextLine.style.color = "#00ff00"; // Green text color for hacker vibe
        randomTextLine.style.fontFamily = "monospace";
        container.appendChild(randomTextLine);

        // Add custom messages at specific intervals
        if (customMessages.length > 0 && Math.random() < 0.1) {
          const messageLine = document.createElement("div");
          messageLine.textContent = customMessages.shift(); // Remove the first message from the array
          messageLine.style.color = "#00ff00";
          messageLine.style.fontFamily = "monospace";
          messageLine.style.fontWeight = "bold";
          container.appendChild(messageLine);
        }

        // Scroll down automatically
        container.scrollTop = container.scrollHeight;

        // Stop adding lines when all custom messages are displayed
        if (customMessages.length === 0) {
          clearInterval(interval);
        }
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "#00ff00",
        overflowY: "hidden",
        padding: "10px",
      }}
    ></div>
  );
};

export default HackerScrolling;
