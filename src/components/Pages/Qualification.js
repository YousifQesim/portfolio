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
  const [showEducationTimeline, setShowEducationTimeline] = useState(false);
  const [showWorkTimeline, setShowWorkTimeline] = useState(true);
  const [showCertificationTimeline, setShowCertificationTimeline] = useState(false);
  const [activeButton, setActiveButton] = useState('education');

  return (
    <div>
          <main>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='my-8'
      >
        <h1 className="text-7xl font-extrabold text-white text-center opacity-5 uppercase">
        Qualification
        </h1>
        <h3 className="text-xl font-extrabold text-white text-center absolute top-6 left-[27%] vsm:left-[30%] m:left-[34%] md:left-[40%] lg:left-[43%] xl:left-[45%] ">
        My personal journey
        </h3>
      </motion.div>
        <ul className="flex justify-center relative bottom-6">
      <li>
      <button
          onClick={() => {
            setShowEducationTimeline(true);
            setShowWorkTimeline(false);
            setShowCertificationTimeline(false);
            setActiveButton('education');
          }}
          className={`mb-4 text-white py-2 px-4 flex gap-1 items-center ${activeButton === 'education' ? 'text-violet-600' : 'text-white'}`}
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
          onClick={() => {setActiveButton('certification');
          setShowEducationTimeline(false);
                setShowWorkTimeline(false);
                setShowCertificationTimeline(true);}}
          className={`mb-4 text-white py-2 px-4 flex gap-1 items-center ${activeButton === 'certification' ? 'text-violet-600' : 'text-white'}`}
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
          onClick={() => {setActiveButton('work');
          setShowEducationTimeline(false);
                setShowWorkTimeline(true);
                setShowCertificationTimeline(false);}}
          className={`mb-4 text-white py-2 px-4 flex gap-1 items-center ${activeButton === 'work' ? 'text-violet-600' : 'text-white'}`}
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
        <div>
        {showEducationTimeline && <Timeline data={educationData} />}
        {showCertificationTimeline && <Timeline data={certificationData} />}
        {showWorkTimeline && <Timeline data={workData} />}
        </div>
      </main>
    </div>
  );
}



