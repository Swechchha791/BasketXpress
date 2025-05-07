import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", phone: "", otp: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Sending OTP to:", formData.phone);
    setStep(2);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    const newUser = { name: formData.name };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    alert("OTP Verified! 🎉");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={step === 1 ? handleSubmit : handleOTPSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {step === 1 && (
          <>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-white text-black"
              />
            </div>

            {/* Mobile no Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium mb-1">
                Mobile No:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-white text-black"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* OTP Field */}
            <div className="mb-4">
              <label htmlFor="otp" className="block font-medium mb-1">
                `Enter OTP sent to {formData.phone} (Enter any no: 123456)`
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                maxLength={6}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-white text-black"
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-lime-600 text-white py-2 rounded hover:bg-lime-700 transition"
        >
          {step === 1 ? "Send OTP" : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default Login;
