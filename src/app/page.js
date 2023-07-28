
"use client"
import Home from "@/components/Pages/Home";
import About from "@/components/Pages/About";
import Skills from "@/components/Pages/skills";
import Qualification from "@/components/Pages/Qualification";
import IntroAnimation from "@/components/IntroAnimation";
import { useState,useEffect } from "react";
// import MainContent from "./MainContent";
const HomePage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsIntroComplete(true);
    }, 12000);
  }, []);

  return (
    <div >
       {!isIntroComplete && <IntroAnimation onComplete={handleIntroComplete} />}
  
      {isIntroComplete &&
      <div>
        
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      </div>
      }
    </div>
  );
};

export default HomePage;
