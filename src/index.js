import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'; 
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000,        // Animation duration in ms
  offset: 0,            // Trigger animation 50px before element is in view (try 0 if you want it even earlier)
  easing: 'ease-out',    // Smooth easing
  once: true,            // Animate only once
  anchorPlacement: 'top-bottom',
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
