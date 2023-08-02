"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/#");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (link) => {
    setIsMenuOpen(false);
    setActiveLink(link);
  };

  return (
    <nav className="bg-transparent relative">
      {/* Mobile menu items */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 right-0"
          >
            <ul className="font-medium text-xs flex justify-center items-center gap-8 min-h-48 flex-wrap w-full p-4 md:p-0 bg-ProjectBackground shadow-lg shadow-indigo-600">
            <li>
                <motion.a
                  href="/#"
                  className={`flex flex-col justify-center items-center py-2 pl-3 pr-4 ${
                    activeLink === "/#" ? "text-violet-600" : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick("/#")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`${activeLink === "/#" ? "block" : "hidden"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/homeindigo.svg"
                      alt="about logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  <motion.div
                    className={`${activeLink === "/#" ? "hidden" : "block"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/home.svg"
                      alt="about logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  Home 
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#about"
                  className={`flex flex-col justify-center items-center py-2 pl-3 pr-4 ${
                    activeLink === "/#about" ? "text-violet-600" : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick("/#about")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`${activeLink === "/#about" ? "block" : "hidden"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/aboutindigo.svg"
                      alt="about logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  <motion.div
                    className={`${activeLink === "/#about" ? "hidden" : "block"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/about.svg"
                      alt="about logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#skills"
                  className={`flex flex-col justify-center items-center py-2 pl-3 pr-4 ${
                    activeLink === "/#skills" ? "text-violet-600" : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick("/#skills")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`${activeLink === "/#skills" ? "block" : "hidden"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/skillindigo.svg"
                      alt="skill logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  <motion.div
                    className={`${activeLink === "/#skills" ? "hidden" : "block"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/skill.svg"
                      alt="skill logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  Skills
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#Qualification"
                  className={`flex flex-col justify-center items-center py-2 pl-3 pr-4 ${
                    activeLink === "/#Qualification" ? "text-violet-600" : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick("/#Qualification")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`${activeLink === "/#Qualification" ? "block" : "hidden"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/educationViolet.svg"
                      alt="education logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  <motion.div
                    className={`${activeLink === "/#Qualification" ? "hidden" : "block"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/education.svg"
                      alt="education logo"
                      width={18}
                  height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  Qualification
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#portfolio"
                  className={`flex flex-col justify-center items-center py-2 pl-3 pr-4 ${
                    activeLink === "/#portfolio" ? "text-violet-600" : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick("/#portfolio")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`${activeLink === "/#portfolio" ? "block" : "hidden"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/workViolet.svg"
                      alt="work logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  <motion.div
                    className={`${activeLink === "/#portfolio" ? "hidden" : "block"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/work.svg"
                      alt="work logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  Portfolio
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#contact"
                  className={`flex flex-col justify-center items-center py-2 pl-3 pr-4 ${
                    activeLink === "/#contact" ? "text-violet-600" : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick("/#contact")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`${activeLink === "/#contact" ? "block" : "hidden"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/directViolet.svg"
                      alt="direct logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  <motion.div
                    className={`${activeLink === "/#contact" ? "hidden" : "block"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src="/direct.svg"
                      alt="direct logo"
                      width={18}
                      height={18}
                      loading="eager"
                      priority={true}
                    />
                  </motion.div>
                  Contact Me
                </motion.a>
              </li>


              <button onClick={toggleMenu}>
                <Image
                  className="absolute right-8 bottom-6"
                  src="/close.svg"
                  alt="close logo"
                  width={18}
                  height={18}
                  loading="eager"
                  priority={true}
                />
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu items for larger screens */}
      <div
        className={`${
          isMenuOpen ? "hidden" : "flex"
        } items-center justify-between md:flex md:space-x-8 mx-auto max-w-screen-xl hidden p-4`}
        id="navbar-default"
      >
           <div
        className={`${
          isMenuOpen ? 'hidden' : 'flex'
        } items-center justify-between w-full md:flex md:space-x-8 mx-auto max-w-screen-xl hidden  p-4`}
        id="navbar-default"
      >
        <div className="flex items-center">
          <span className="text-2xl font-semibold text-white hover:text-violet-600 cursor-pointer">
            Yusif Qasim
          </span>
        </div>
        <ul className="font-medium text-sm flex space-x-8 ">
          <li>
            <a
              className={`${
                activeLink === '/#'? 'text-violet-600'
                : 'text-white'
              
              }`}
              aria-current="page"
              href="/#"
            >
            
              Home
            </a>
          </li>
          <li>
            <a
              className={`${
                activeLink === '/#about'    ? 'text-violet-600'
                : 'text-white'
              }`}
              href="/#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`${
                activeLink === '/#skills'    ? 'text-violet-600'
                : 'text-white'
              }`}
              href="/#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={`${
                activeLink === '/#Qualification'
                ? 'text-violet-600'
                : 'text-white'
              }`}
              href="/#Qualification"
            >
              Qualification
            </a>
          </li>
          <li>
            <a
              className={`${
                activeLink === '/#portfolio'
                  ? 'text-violet-600'
                  : 'text-white'
              }`}
              href="/#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className={`${
                activeLink === '/#contact'
                  ? 'text-violet-600'
                  : 'text-white'
              }`}
              href="/#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      </div>

      {/* Mobile menu button */}
      <motion.button
        type="button"
        className={`md:hidden w-full p-4 text-center h-16 bg-transparent  text-white fixed bottom-0 right-0 ${
          isMenuOpen ? "hidden rotate-90" : "flex flex-col"
        }`}
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="sr-only">Open main menu</span>
        <div className="absolute right-8 top-2 bg-violet-600 rounded-full p-2">
          <Image
            src="/menu.svg"
            alt="menu logo"
            width={18}
            height={18}
            loading="eager"
            priority={true}
          />
        </div>
      </motion.button>
    </nav>
  );
};

export default Navbar;

