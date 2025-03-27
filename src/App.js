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
// import YogaClassForm from "./components/YogaClassForm";
// import DietPlanForm from "./components/DietPlanForm";
// import CounselingForm from "./components/CounselingForm";
// import AnthemSection from "./components/AnthemSection";
import TestimonialPage from "./pages/TestimonialPage";
import BlogPost from "./components/BlogPost";
import BlogsPage from "./pages/BlogsPage";
import AddBlogForm from "./components/AddBlogForm";
import GurusPage from "./pages/GurusPage";
import MissionPage from "./pages/MissionPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gurus" element={<GurusPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/add-blog" element={<AddBlogForm />} />
      </Routes>
      <Footer />
      <WhatsappContact />
      {/* <YogaClassForm />
      <DietPlanForm />
      <CounselingForm />
      <AnthemSection /> */}
    </Router>
  );
}

export default App;
