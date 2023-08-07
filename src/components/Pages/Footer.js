"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Footer = () => {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className={`bg-footerBack h-40 w-full ${
            inView ? "visible" : "invisible"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-footerBack h-40 flex flex-col justify-center items-center">
            <div>
              <div
                className={`items-center justify-between flex md:space-x-8 mx-auto max-w-screen-xl  p-4`}
                id="navbar-default"
              >
                <div
                  className={`items-center justify-center w-full flex md:space-x-8 mx-auto max-w-screen-xl   p-4`}
                  id="navbar-default2"
                >
                  <ul className="font-medium text-sm flex space-x-8 ">
                    <li>
                      <a aria-current="page" href="/#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/#about">About</a>
                    </li>
                    <li>
                      <a href="/#skills">Skills</a>
                    </li>
                    <li className="hidden md:inline">
                      <a href="/#Qualification">Qualification</a>
                    </li>
                    <li className="hidden md:inline">
                      <a href="/#portfolio">Portfolio</a>
                    </li>
                    <li className="hidden md:inline">
                      <a href="/#contact">Contact Me</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex gap-x-4 my-4 relative bottom-3 z-50 ">
              <a href="https://github.com/YusifQasim" target="_blank">
                <Image
                  src="/githubwhite.svg"
                  alt="Telegram logo"
                  width={20}
                  height={20}
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
              <a
                href="https://iq.linkedin.com/in/yusif-qasim-208473232?trk=people-guest_people_search-card"
                target="_blank"
              >
                <Image
                  src="/linkedwhite.svg"
                  alt="Telegram logo"
                  width={20}
                  height={20}
                  loading="lazy"
              
                />
              </a>
              <a
                href="https://twitter.com/EusifQasim?t=XtH8suqlfeWm5c4Q3ci9kA&s=09"
                target="_blank"
              >
                <Image
                  src="/twiter.svg"
                  alt="Telegram logo"
                  width={20}
                  height={20}
                  loading="lazy"
              
                />
              </a>
              <a
                href="https://www.facebook.com/YUSIF.QASIM.ALI?mibextid=ZbWKwL"
                target="_blank"
              >
                <Image
                  src="/facebook.svg"
                  alt="Telegram logo"
                  width={20}
                  height={20}
                  loading="lazy"
              
                />
              </a>
              <a
                href="https://instagram.com/yusif_qasim_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
              >
                <Image
                  src="/instagram.svg"
                  alt="Telegram logo"
                  width={20}
                  height={20}
                  loading="lazy"
              
                />
              </a>
            </div>
            <div className=" text-sm">© Yusif Qasim. All rights reserved.</div>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Footer;
