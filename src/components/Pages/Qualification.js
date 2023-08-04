'use client'
import { motion, useAnimation } from "framer-motion";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import educationData from '/education.json';
import workData from '/work.json';
import certificationData from '/certification.json';
import Timeline from '../timeline';
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Qualification() {
  const [showEducationTimeline, setShowEducationTimeline] = useState(true);
  const [showWorkTimeline, setShowWorkTimeline] = useState(false);
  const [showCertificationTimeline, setShowCertificationTimeline] = useState(false);
  const [activeButton, setActiveButton] = useState('education');
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
    <motion.div id="Qualification" className="h-screen relative w-full">
      <main className="relative top-10 w-full">
        <motion.div
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          ref={ref}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='my-8'
        >
          <h1 className="lg:text-7xl text-5xl font-extrabold text-white text-center opacity-5 uppercase">
            Achievement
          </h1>
          <h3 className="text-xl font-extrabold text-white text-center absolute top-2 lg:top-6 left-[30%] vsm:left-[28%] m:left-[32%] md:left-[40%] lg:left-[41%] xl:left-[45%] ">
            personal journey
          </h3>
        </motion.div>
        <motion.div className="w-full">
          <ul className="flex justify-center my-16 text-sm md:text-lg">
            <li>
              <motion.button
                onClick={handleEducationClick}
                className={`mb-4 py-2 px-4 flex gap-1 items-center ${
                  activeButton === 'education' ? 'text-violet-600' : 'text-white'
                }`}
              >
                <Image
                  className={`${activeButton === 'education' ? 'inline' : 'hidden'}`}
                  src="/educationViolet.svg"
                  alt="education logo"
                  width={20}
                  height={20}
                  loading="eager"
                  priority={true}
                />
                <Image
                  className={`${activeButton === 'education' ? 'hidden' : 'inline'}`}
                  src="/education.svg"
                  alt="education logo"
                  width={20}
                  height={20}
                  loading="eager"
                  priority={true}
                />
                Education
              </motion.button>
            </li>
            <li>
              <motion.button
                onClick={handleCertificationClick}
                className={`mb-4 py-2 px-4 flex gap-1 items-center ${activeButton === 'certification' ? 'text-violet-600' : 'text-white'}`}
              >
                <Image
                  className={`${activeButton === 'certification' ? 'inline' : 'hidden'}`}
                  src="/certificationViolet.svg"
                  alt="certification logo"
                  width={20}
                  height={20}
                  loading="eager"
                  priority={true}
                />
                <Image
                  className={`${activeButton === 'certification' ? 'hidden' : 'inline'}`}
                  src="/certification.svg"
                  alt="certification logo"
                  width={20}
                  height={20}
                  loading="eager"
                  priority={true}
                />
                Certifications
              </motion.button>
            </li>
            <li>
              <motion.button
                onClick={handleWorkClick}
                className={`mb-4 py-2 px-4 flex gap-1 items-center ${activeButton === 'work' ? 'text-violet-600' : 'text-white'}`}
              >
                <Image
                  className={`${activeButton === 'work' ? 'inline' : 'hidden'}`}
                  src="/workViolet.svg"
                  alt="work logo"
                  width={20}
                  height={20}
                  loading="eager"
                  priority={true}
                />
                <Image
                  className={`${activeButton === 'work' ? 'hidden' : 'inline'}`}
                  src="/work.svg"
                  alt="work logo"
                  width={20}
                  height={20}
                  loading="eager"
                  priority={true}
                />
                Work
              </motion.button>
            </li>
          </ul>
        </motion.div>
        <div>
          {showEducationTimeline && <Timeline data={educationData} />}
          {showCertificationTimeline && <Timeline data={certificationData} />}
          {showWorkTimeline && <Timeline data={workData} />}
        </div>
      </main>
    </motion.div>
  );
}
