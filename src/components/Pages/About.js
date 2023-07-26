"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import NumberCounters from "../NumberCounters";

const DownloadButton = dynamic(() => import("../DownloadButton"), {
  ssr: false,
});

const About = () => {
  const [pdfUrl, setPdfUrl] = useState("");

  const handleDownload = async () => {
    const response = await fetch("/YusifQasimCv.pdf");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center relative"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center items-center md:w-3/4 mx-auto my-0 flex-wrap md:relative absolute top-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
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
          className="md:w-2/4 flex flex-col"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex order-3 md:order-none md:my-0 mb-24 md:relative"
          >
            <h1 className="text-7xl font-extrabold text-white text-center opacity-5 absolute -top-20 md:-top-10 md:right-24 uppercase">
              About me
            </h1>
            <h3 className="text-xl font-extrabold text-white text-center absolute -top-14 left-[30%] md:-top-4 md:left-[215px]">
              My Introduction
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="white text-justify mt-12 mx-auto my-0 w-3/4"
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
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;