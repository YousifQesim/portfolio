"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-full">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto my-4 p-4 shadow-lg rounded-lg bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-2 border rounded-md mb-4"
            required
          />

          <label className="block mb-2 text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full p-2 border rounded-md mb-4"
            required
          />

          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-md mb-4"
            required
          />

          <label className="block mb-2 text-gray-700">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border rounded-md mb-4 h-32 resize-none"
            required
          />

          <motion.input
            type="submit"
            value={isSending ? "Sending..." : "Send"}
            className={`w-full p-2 rounded-md text-white ${
              isSending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={isSending}
            whileTap={{ scale: 0.95 }}
          />
        </motion.form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
