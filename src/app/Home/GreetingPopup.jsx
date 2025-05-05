import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GreetingPopup = () => {
  const [visible, setVisible] = useState(true);
  const [greeting, setGreeting] = useState("");
  const [snack, setSnack] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning!");
      setSnack("How about some healthy morning snacks?");
    } else if (hour >= 12 && hour < 16) {
      setGreeting("Good Afternoon!");
      setSnack("Time for a tasty lunch?");
    } else if (hour >= 16 && hour < 20) {
      setGreeting("Good Evening!");
      setSnack("Evening snacks make the day better!");
    } else {
      setGreeting("Good Night!");
      setSnack("Ready for a cozy dinner?");
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    Navigate("/cat-section");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-2">{greeting}</h2>
        <p className="mb-4">{snack}</p>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          onClick={handleClose}
        >
          Let's Shop!
        </button>
      </div>
    </div>
  );
};

export default GreetingPopup;
