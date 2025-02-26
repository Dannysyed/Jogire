import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import FAQPage from "./pages/FAQPage";
import "./index.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhatsappContact from "./components/WhatsappContact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
      <WhatsappContact />
    </Router>
  );
}

export default App;
