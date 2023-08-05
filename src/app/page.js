'use client'
import Home from "@/components/Pages/Home";
import About from "@/components/Pages/About";
import Skills from "@/components/Pages/skills";
import Qualification from "@/components/Pages/Qualification";
import Projects from "@/components/Pages/Projects";
import ContactMe from "@/components/Pages/ContactMe";
import Footer from "@/components/Pages/Footer";
const HomePage = () => {
  return (
    <div className="dark:bg-ProjectBackground">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default HomePage;
