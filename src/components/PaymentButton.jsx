// PaymentButton.jsx
import React from "react";
import axios from "axios";
import { CiCoffeeCup } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ⚡ Replace process.env with constants
const RAZORPAY_KEY_ID = "rzp_live_RvnAT1YhK5bBNJ"; // your public key
const BACKEND_URL = "https://paymentbackend-svsy.onrender.com";

export default function PaymentButton() {
  const handlePayment = async () => {
    try {
      // 1️⃣ Create order from backend
      const { data } = await axios.post(`${BACKEND_URL}/create-order`, {
        amount: 1, // amount in INR
      });

      // 2️⃣ Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Yuvraj Sahu",
        description: "Portfolio Payment",
        order_id: data.id,
        handler: function (response) {
          toast.success("Payment Successful 🎉", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(response);
        },

        prefill: {
          name: "Client Name",
          email: "client@email.com",
          contact: "9000000000",
        },
        theme: {
          color: "#4f46e5",
        },
      };

      // 3️⃣ Open Razorpay checkout
      if (window.Razorpay) {
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        alert("Razorpay SDK not loaded");
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    }
  };

  return (
    <>
      {" "}
      <button
  onClick={handlePayment}
  className="group flex hover:cursor-pointer items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
>
  {/* Coffee cup icon */}
  <CiCoffeeCup className="h-7 w-7 mr-2 transition-transform duration-300 group-hover:-rotate-20" />
  Buy me a Coffee
</button>
      <ToastContainer />
    </>
  );
}
