"use client"
import { motion } from "framer-motion";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import educationData from '/education.json';
import workData from '/work.json';
import certificationData from '/certification.json';
import Timeline from '../timeline';
import Image from "next/image";

export default function Qualification() {
  const [showEducationTimeline, setShowEducationTimeline] = useState(true);
  const [showWorkTimeline, setShowWorkTimeline] = useState(false);
  const [showCertificationTimeline, setShowCertificationTimeline] = useState(false);
  const [activeButton, setActiveButton] = useState('education');

  const handleEducationClick = () => {
    setShowEducationTimeline(true);
    setShowWorkTimeline(false);
    setShowCertificationTimeline(false);
    setActiveButton('education');
  };

  const handleCertificationClick = () => {
    setShowEducationTimeline(false);
    setShowWorkTimeline(false);
    setShowCertificationTimeline(true);
    setActiveButton('certification');
  };

  const handleWorkClick = () => {
    setShowEducationTimeline(false);
    setShowWorkTimeline(true);
    setShowCertificationTimeline(false);
    setActiveButton('work');
  };
  return (
    <div id="Qualification" className="h-screen relative  w-full">
          <main className="relative top-10  w-full">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='my-8'
      >
        <h1 className="lg:text-7xl text-4xl font-extrabold text-white text-center opacity-5 uppercase">
        Qualification
        </h1>
        <h3 className="text-xl font-extrabold text-white text-center absolute top-1 lg:top-6 left-[27%] vsm:left-[30%] m:left-[34%] md:left-[40%] lg:left-[43%] xl:left-[45%] ">
         personal journey
        </h3>
      </motion.div>
      <div className=" w-full">

        <ul className="flex justify-center my-16 text-sm md:text-lg">
      <li>
      <button
         onClick={handleEducationClick}
         className={`mb-4  py-2 px-4 flex gap-1 items-center ${
          activeButton === 'education' ? 'text-violet-600' : 'text-white'
        }`}
        >
          <Image
        className={`${activeButton === 'education' ? 'inline' : 'hidden'}`}
            src="/educationViolet.svg"
            alt="education logo"
            width={20}
            height={20}
          />
            <Image
        className={`${activeButton === 'education' ? 'hidden' : 'inline'}`}
            src="/education.svg"
            alt="education logo"
            width={20}
            height={20}
          />
          
          
          Education
        </button>
      </li>
      <li>
        <button
         onClick={handleCertificationClick}
          className={`mb-4  py-2 px-4 flex gap-1 items-center ${activeButton === 'certification' ? 'text-violet-600' : 'text-white'}`}
        >
            <Image
        className={`${activeButton === 'certification' ? 'inline' : 'hidden'}`}
            src="/certificationViolet.svg"
            alt="certification logo"
            width={20}
            height={20}
          />
            <Image
        className={`${activeButton === 'certification' ? 'hidden' : 'inline'}`}
            src="/certification.svg"
            alt="certification logo"
            width={20}
            height={20}
          />
          Certifications
        </button>
      </li>
      <li>
        <button
         onClick={handleWorkClick}
          className={`mb-4  py-2 px-4 flex gap-1 items-center ${activeButton === 'work' ? 'text-violet-600' : 'text-white'}`}
        >
          <Image
        className={`${activeButton === 'work' ? 'inline' : 'hidden'}`}
            src="/workViolet.svg"
            alt="work logo"
            width={20}
            height={20}
            />
            <Image
        className={`${activeButton === 'work' ? 'hidden' : 'inline'}`}
            src="/work.svg"
            alt="work logo"
            width={20}
            height={20}
          />
          Work
        </button>
      </li>
    
    </ul>
            </div>
        <div>
        {showEducationTimeline && <Timeline data={educationData} />}
        {showCertificationTimeline && <Timeline data={certificationData} />}
        {showWorkTimeline && <Timeline data={workData} />}
        </div>
      </main>
    </div>
  );
}



