"use client"
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NumberCounters from "../NumberCounters";
import { useInView } from "react-intersection-observer";
import VideoPopup from "../VideoPopUp";

const DownloadButton = dynamic(() => import("../DownloadButton"), {
  ssr: false,
});

const About = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleDownload = async () => {
    const response = await fetch("/YusifQasimCv.pdf");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
      }}
      transition={{ duration: 1 }}
      className="about  flex items-center relative"
      id="about"
      ref={ref}
      style={{ overflow: "hidden" }}
    >
      <div className="flex flex-col md:my-0 md:w-3/4 lg:w-5/6 mx-auto ">
        <motion.div
        className="lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h1 className="text-7xl font-extrabold text-white text-center opacity-5 uppercase">
            About
          </h1>
          <h3 className="text-xl font-extrabold text-white text-center absolute top-6 left-[27%] vsm:left-[30%] m:left-[33%] md:left-[40%] lg:left-[43%] xl:left-[45%] ">
            My Introduction
          </h3>
        </motion.div>

        <div className="flex justify-center items-center flex-col lg:flex-row mt-24 md:mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="w-2/4"
          >
            <Image
              className="mx-auto my-0 rounded-2xl"
              src="/my.jpg"
              alt="Next.js Logo"
              width={400}
              height={400}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-col lg:w-2/4"
          >
                <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="lg:flex lg:flex-col lg:relative md:my-0  h-auto hidden "
          >
            

            <h1 className="text-7xl font-extrabold text-white text-center opacity-5 uppercase">
              About me
            </h1>
            <h3 className="text-xl font-extrabold text-white text-center absolute top-6 lg:right-[30%] xl:right-[38%] ">
              My Introduction
            </h3>
        
          </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="white text-justify mt-12 mx-auto my-0 w-3/4 md:w-full"
            >
              I am an individual with broad skills, also energetic and eager to
              learn new ones. I am always highly enthused about my work and tasks
              ahead, extremely driven, with a clear goal to succeed, and committed
              to learning and self-development. Furthermore, I am adept at
              handling multiple tasks on a daily basis competently and at working
              well under pressure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="flex gap-10 justify-center mt-6"
            >
              <NumberCounters />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="my-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
                className="flex justify-center"
              >
                <DownloadButton pdfUrl={pdfUrl} onClick={handleDownload}>
                  Download Resume
                  <Image
                    src="/download.svg"
                    alt="telegram logo"
                    width={20}
                    height={20}
                    priority
                  />
                </DownloadButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
                className="flex justify-center"
              >
                
        <VideoPopup videoUrl="/introvid.mp4" />
    
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
