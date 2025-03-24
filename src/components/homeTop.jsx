import React, { useState, useEffect } from 'react';
import '../css/homeTop.css';
import Typewriter from 'typewriter-effect';
import Particle from './Particle';

export default function HomeTop() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after a short delay
    setTimeout(() => {
      setFadeIn(true);
    }, 1000); // 1 second delay
  }, []);

  return (
    <>
      <div className="particlejs-top">
        <Particle />
        <div className={`heading ${fadeIn ? 'fade-in' : ''} text-xl sm:text-2xl md:text-7xl
    leading-tight`}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("CODING CLUB-VIT Vellore").start();
            }}
            
          />
        </div>
      </div>
    </>
  );
}
