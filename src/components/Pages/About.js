"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

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
    // entire screen div
    <div className="min-h-screen flex items-center relative" id="about">
      {/* section div */}
      <div className="flex justify-center items-center md:w-3/4 mx-auto my-0  flex-wrap md:relative absolute top-20 ">
        {/* image div */}
        <div className="w-2/4 ">
          <Image
            className="mx-auto my-0 rounded-2xl "
            src="/my.jpg"
            alt="Next.js Logo"
            width={400}
            height={400}
            priority
          />
        </div>

        {/* about information div */}
        <div className="md:w-2/4  flex flex-col ">
          <div className="flex order-3 md:order-none md:my-0 mb-24 md:relative ">

          <h1 className="text-7xl font-extrabold text-white text-center opacity-5 absolute -top-20 md:-top-10 md:right-24 uppercase ">
            About me
          </h1>
          <h3 className="text-xl font-extrabold text-white text-center absolute -top-14 left-[30%] md:-top-4 md:left-[215px]">
            My Introduction
          </h3>
          </div>
          <p className=" white text-justify  mt-12  mx-auto my-0 w-3/4">
            individual, with broad skills, also energetic and eager to learn new
            ones. I am always highly enthused about my work and tasks ahead,
            extremely driven, with a clear goal to succeed, and committed to
            learning and self development. Furthermore, I am adept at handling
            multiple tasks on a daily basis competently and at working well
            under pressure
          </p>
          {/* experiece and awards div */}
          <div className="flex gap-10 justify-center mt-6">
            <div className="text-center">
              <h1 className="text-white font-bold text-xl">2+</h1>
              <span className="text-xs">
                <p>Years</p>
                <p>Experience</p>
              </span>
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold text-xl">10+</h1>
              <span className="text-xs">
                <p>Project</p>
                <p>Completed</p>
              </span>
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold text-xl">05+</h1>
              <span className="text-xs">
                <p>Web Development</p>
                <p>Certifications</p>
              </span>
            </div>
          </div>
          <div className=" my-8" >
          <div className=" flex justify-center">

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
            
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
