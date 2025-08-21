import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import SkillsSection from "./components/Skills";
import ScrollTop from "./components/ScrollTop";
import Banner from "./components/Banner";
import FeaturedPosts from "./components/FeaturedPosts";
import {
  mockAboutData,
  mockBannerData,
  mockHeroData,
  mockPostsData,
  mockProjectsData,
  skillCategories,
} from "./data";

const HomePage = () => {
  return (
    <div>
      <Hero {...mockHeroData} />
      <FeaturedProjects projects={mockProjectsData} />

      <SkillsSection categories={skillCategories} />

      <ScrollTop />
      <FeaturedPosts posts={mockPostsData} />
      <Banner {...mockBannerData} />
      <About {...mockAboutData} />
    </div>
  );
};

export default HomePage;
