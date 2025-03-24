// src/components/HackerTyping.js 
import React, { useEffect, useRef } from "react";

const HackerScrolling = () => {
  const containerRef = useRef(null);
  // Use a ref for custom messages so the effect doesn't depend on it
  const customMessagesRef = useRef([
    "Initializing system...",
    "Loading modules...",
    "Connecting to server...",
    "Fetching data...",
    "System ready.",
    "Welcome to Coding Club!",
  ]);

  // Function to generate random hacker-like text
  const generateRandomText = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let text = "";
    const length = Math.floor(Math.random() * 80) + 20;
    for (let i = 0; i < length; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
  };

  useEffect(() => {
    const container = containerRef.current;

    const interval = setInterval(() => {
      if (container) {
        // Create a random line of hacker text
        const randomTextLine = document.createElement("div");
        randomTextLine.textContent = generateRandomText();
        randomTextLine.style.color = "#00ff00"; // Green text color
        randomTextLine.style.fontFamily = "monospace";
        container.appendChild(randomTextLine);

        // Occasionally insert a custom message
        if (customMessagesRef.current.length > 0 && Math.random() < 0.1) {
          const messageLine = document.createElement("div");
          messageLine.textContent = customMessagesRef.current.shift(); // Remove the first message
          messageLine.style.color = "#00ff00";
          messageLine.style.fontFamily = "monospace";
          messageLine.style.fontWeight = "bold";
          container.appendChild(messageLine);
        }

        // Auto-scroll to the bottom
        container.scrollTop = container.scrollHeight;

        // Optionally, stop the interval when all custom messages are displayed.
        // (Note: This will also stop adding random lines; remove this if you want continuous scrolling.)
        if (customMessagesRef.current.length === 0) {
          clearInterval(interval);
        }
      }
    }, 100); // Adjust the interval for typing speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array—customMessagesRef doesn't need to be added

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "#00ff00",
        overflowY: "auto", // Changed to auto so scrolling is visible
        padding: "10px",
      }}
    ></div>
  );
};

export default HackerScrolling;
