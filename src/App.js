import './App.css';
import Home from './pages/home.jsx';  
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import About from './pages/about';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Event from './pages/event';
import Photos from './pages/Photos'; 
import JoinAndPay from './pages/JoinAndPay';
import HackerTyping from "./components/HackerTyping"; // Import HackerTyping component
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000); // Animation lasts for 5 seconds
  }, []);

  if (loading) {
    return <HackerTyping />; // Show HackerTyping during loading
  }

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ClubWebsite" element={<Home />} />
        <Route path="/ClubWebsite/event" element={<Event />} />
        <Route path="/ClubWebsite/contact" element={<Contact />} />
        <Route path="/ClubWebsite/team" element={<About />} />
        <Route path="/ClubWebsite/photos" element={<Photos />} /> 
        <Route path="/ClubWebsite/join-and-pay" element={<JoinAndPay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
