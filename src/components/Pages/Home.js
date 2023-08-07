"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

import Link from "next/link";

const AnimatedImage = ({ src, alt, width, height }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <Head>
        <title>Yusif Qasim - Portfolio</title>
        <meta name="description" content="Yusif Qasim - Portfolio" />
        <meta
          name="keywords"
          content="Yusif , qasim, Portfolio, Yusif Qasim Portfolio, next js portfolio"
        />
      </Head>
      <div className="flex xl:justify-center justify-start md:ml-12 ml-4 xl:ml-0 items-center gap-8 mb-24 flex-wrap">
        <div className="flex vsm:flex-col flex-row order-last vsm:order-first    gap-6">
          <Link
            href="https://iq.linkedin.com/in/yusif-qasim-208473232?trk=people-guest_people_search-card"
            target="_blank"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl shadow-violet-700"
          >
            <AnimatedImage
              src="/linked.svg"
              alt="LinkedIn logo - Yusif Qasim"
              width={24}
              height={24}
              loading="lazy"
          
            />
          </Link>
          <Link
            href="https://github.com/YusifQasim"
            target="_blank"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <AnimatedImage
              src="/github.svg"
              alt="GitHub logo - Yusif Qasim"
              width={24}
              height={24}
              loading="lazy"
          
            />
          </Link>
          <Link
            href="tel:+9647502369315"
            target="_blank"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <AnimatedImage
              src="/telegram.svg"
              alt="Telegram logo - Yusif Qasim"
              width={24}
              height={24}
              loading="lazy"
          
            />
          </Link>
        </div>
        <div className="w-3/4 md:w-1/3 order-3 md:order-none">
          <div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="xl:text-5xl text-3xl text-white font-semibold xl:break-words xl:w-52 xl:leading-tight"
              >
                Hi, I am Yusif
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base font-bold text-grayColor mb-3"
              >
                Front End Web Developer
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="w-4/4 text-xs text-grayColor font-medium mb-3"
              >
                I have a passion for building intuitive, user-friendly
                interfaces that provide an enjoyable and seamless user
                experience.
              </motion.p>
              <a href="/#contact">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-white bg-violet-600 hover:bg-violet-800 transition ease-in-out delay-10 duration-200 gap-2  focus:outline-none font-medium rounded-lg text-sm px-2 py-2.5 mt-4 text-center inline-flex items-center"
                >
                  Contact me
                  <AnimatedImage
                    src="/direct.svg"
                    alt="Telegram logo - Yusif Qasim"
                    width={20}
                    height={20}
                    loading="lazy"
                
                  />
                </motion.button>
              </a>
            </div>

            <a href="#about" aria-label="Read more about page">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="xl:flex xl:items-center gap-1 absolute bottom-32 hidden"
              >
                <AnimatedImage
                  src="/mouse.svg"
                  alt="Mouse logo - Yusif Qasim"
                  width={24}
                  height={24}
                  loading="lazy"
              
                />

                <p className="text-white text-xs font-medium">Scroll down</p>
                <span className="animate-bounce">
                  <AnimatedImage
                    src="/down.svg"
                    alt="Mouse logo - Yusif Qasim"
                    width={24}
                    height={24}
                    loading="lazy"
                
                  />
                </span>
              </motion.div>
            </a>
          </div>
        </div>

        <div className="md:w-1/3 order-2 md:order-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full md:w-4/5 mx-auto"
          >
            <Image
            loading="eager"
              src="/my.webp"
              alt="Personal Image - Yusif Qasim"
              width={270}
              height={270}
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
