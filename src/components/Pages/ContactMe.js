"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const App = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        "service_op35dyj",
        "template_ce3fxzh",
        form.current,
        "LNcV7stvoXWvNRvNW"
      )
      .then(() => {
        setIsSending(false);
        toast.success("Email sent successfully!");
        form.current.reset(); // Reset form fields
      })
      .catch(() => {
        setIsSending(false);
        toast.error("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen mt-32 relative" id="contact">

      
<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='my-8'
      >
        <h1 className="lg:text-7xl text-4xl font-extrabold text-white text-center opacity-5 uppercase">
        Contact Me
        </h1>
        <h3 className="text-xl font-extrabold text-white text-center absolute top-1 lg:top-6 left-[27%] vsm:left-[30%] m:left-[34%] md:left-[40%] lg:left-[43%] xl:left-[45%] ">
         Get In Touch
        </h3>
      </motion.div>
    <div className=" flex flex-col md:flex-row gap-x-4 gap-y-4 justify-center items-center  w-full ">
    

      <div className="flex md:flex-col flex-row gap-x-2 my-2 md:my-0 gap-6  justify-start h-3/4">
        <div className="flex gap-x-2 items-center  ">
          <Image
            src="/phone.svg"
            alt="phone logo"
            width={24}
            height={24}
            loading="eager"
            priority={true}
          />
          <div>
            <h1 className="text-white">Call Me</h1>
            <p className="text-[10px] text-grayColor">+964 750 236 9315</p>
          </div>
        </div>
        <div className="flex gap-x-4 items-center ">

          <Image
            src="/email.svg"
            alt="email logo"
            width={24}
            height={24}
            loading="eager"
            priority={true}
          />
          <div>
            <h1 className="text-white">Email</h1>
            <p className="text-[10px] text-grayColor">yusifqasim22@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center ">

          <Image
            src="/location.svg"
            alt="location logo"
            width={24}
            height={24}
            loading="eager"
            priority={true}
          />
          <div>
            <h1 className="text-white">location</h1>
            <p className="text-[10px] text-grayColor">Erbil , Soran</p>
          </div>
        </div>
      </div>
      <div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto my-4 p-4 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-x-4">
            <div className="relative">
              <label className="text-white block mb-2 absolute left-2 top-2 text-xs">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full pt-8 pl-2  border h-16  rounded-md mb-4 bg-inputBackground border-none text-gray-300 text-xs "
                required
              />
            </div>

            <div className="relative">
              <label className="text-white block mb-2 absolute left-2 top-2 text-xs">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full pt-8 pl-2 border h-16 rounded-md mb-4 bg-inputBackground border-none text-xs text-gray-300 "
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-white block mb-2 absolute left-2 top-2 text-xs">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full pt-8 pl-2 border h-16 rounded-md mb-4 bg-inputBackground border-none text-xs text-gray-300"
              required
            />
          </div>
          <div className="relative">
            <label className="text-white block mb-2 absolute left-2 top-2 text-xs ">
              Message
            </label>
            <textarea
              name="message"
              className="w-full pt-8 pl-2 border  rounded-md mb-4 text-xs resize-none border-none bg-inputBackground text-gray-300"
              required
              rows="5"
              cols="25"
            ></textarea>
          </div>

          <motion.input
            type="submit"
            value={isSending ? "Sending..." : "Send"}
            className={`w-full p-2 rounded-md text-white cursor-pointer ${
              isSending
                ? "bg-violet-600 cursor-not-allowed"
                : "bg-violet-600 hover:bg-violet-700"
            }`}
            disabled={isSending}
            whileTap={{ scale: 0.95 }}
          />
        </motion.form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
    </div>

  );
};

export default App;
