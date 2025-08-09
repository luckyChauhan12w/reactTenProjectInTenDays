import React from "react";
import HeroSection from "./Layouts/HeroSection";
import Pricing from "./Layouts/Pricing";
import Features from "./Layouts/Feature";
import Testimonials from "./Layouts/Testimonials";
import Footer from "./Layouts/Footer";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
