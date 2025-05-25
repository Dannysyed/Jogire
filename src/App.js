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
// import CounselingForm from "./components/CounselingForm";
// import AnthemSection from "./components/AnthemSection";
import TestimonialPage from "./pages/TestimonialPage";
import BlogPost from "./components/BlogPost";
import BlogsPage from "./pages/BlogsPage";
import AddBlogForm from "./components/AddBlogForm";
import GurusPage from "./pages/GurusPage";
import MissionPage from "./pages/MissionPage";
import MentorsPage from "./pages/MentorsPage";
import GroupYogaClassForm from "./components/GroupYogaClassForm";
import PersonalYogaClassForm from "./components/PersonalYogaClassForm";
import DietPlanForm from "./components/DietPlanForm";
import GutHealthForm from "./components/GutHealthForm";
import MentalHealthForm from "./components/MentalHealthForm";
import MetabolicHealthForm from "./components/MetabolicHealthForm";

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
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/add-blog" element={<AddBlogForm />} />
        <Route
          path="/services/group-yoga-class"
          element={<GroupYogaClassForm formType="group-yoga" />}
        />
        <Route
          path="/services/personal-yoga-class"
          element={<PersonalYogaClassForm formType="personal-yoga" />}
        />
        <Route
          path="/services/diet-plan"
          element={<DietPlanForm formType="diet-plan" />}
        />
        <Route
          path="/services/gut-health"
          element={<GutHealthForm formType="gut-health" />}
        />
        <Route
          path="/services/mental-health"
          element={<MentalHealthForm formType="mental-health" />}
        />
        <Route
          path="/services/metabolic-health"
          element={<MetabolicHealthForm formType="metabolic-health" />}
        />
      </Routes>
      <Footer />
      <WhatsappContact />
      {/*<CounselingForm />
      <AnthemSection /> */}
    </Router>
  );
}

export default App;
