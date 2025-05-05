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
    <Router>
      <div className="flex flex-col min-h-screen text-slate-600 bg-lime-50">
        <Navbar user={user} setUser={setUser} />

        <main className="flex-grow container mx-auto px-4">
          <GreetingPopup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat-section" element={<CatSection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/paan-corner" element={<PaanCorner />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
