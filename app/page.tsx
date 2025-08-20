import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import SkillsSection from "./components/Skills";
import ScrollTop from "./components/ScrollTop";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />

      <SkillsSection />
      <FeaturedProjects />
      <ScrollTop />
    </div>
  );
};

export default HomePage;
