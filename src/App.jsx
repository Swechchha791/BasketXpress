import Navbar from "./app/Navbar/Navbar";
import Home from "./app/Home/Home";
import Footer from "./app/Footer/Footer";
import Cart from "./app/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatSection from "./app/CategorySection/CatSection";
import Login from "./app/Login/Login";
import GreetingPopup from "./app/Home/GreetingPopup";
import { useEffect, useState } from "react";
import PaanCorner from "./app/Home/Products/PaanCorner";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored);
  }, []);

  return (
    <>
      <div className="min-h-screen mx-auto dark:bg-green-900 dark:text-white text-slate-600">
        <Router>
          <Navbar user={user} setUser={setUser} />
          <div className="bg-lime-100 dark:bg-green-900">
            <div className="max-w-screen-xl mx-auto">
              <GreetingPopup />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat-section" element={<CatSection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/paan-corner" element={<PaanCorner />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
