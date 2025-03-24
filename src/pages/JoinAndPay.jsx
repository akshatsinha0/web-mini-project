// src/pages/JoinAndPay.jsx
import React from 'react';
import bgImage from '../assets/bg.png'; 

const JoinAndPay = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_iSvrQqTNwRSpYm", // Test Key ID
      amount: "50000", // Amount in paise (INR 500)
      currency: "INR",
      name: "Club Website",
      description: "Event Participation Payment",
      image: "https://yourwebsite.com/logo.png", // Optional logo
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#F37254"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div
      className="
        min-h-screen 
        flex flex-col 
        justify-center 
        items-center 
        bg-cover 
        bg-center 
        curtain-animation
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center fade-up shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-4">
          Join & Pay
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-lg mx-auto">
          To take part in our exciting events, please proceed to payment by clicking the button below.
        </p>
        <button
          className="
            px-6 
            py-3 
            bg-green-600 
            text-white 
            rounded-md 
            text-xl 
            font-medium 
            hover:bg-green-700 
            transition 
            duration-300
          "
          onClick={handlePayment}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default JoinAndPay;
