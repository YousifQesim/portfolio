import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IndexPage = () => {
  const [typedText, setTypedText] = useState('');
  const text = "Welcome to Yusif Qasim's Portfolio website, where the fusion of creativity and technology takes center stage.";
  const audio = new Audio('/keyboard-sound.mp3'); // Create a new audio object

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex === text.length) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          // Autoplay was prevented, so we need to handle it here
          console.warn('Autoplay was prevented. Please interact with the page to enable audio playback.', error);
        });
      }
    }, 100); // Adjust the speed of typing here (in milliseconds)
    return () => {
      clearInterval(interval);
      audio.pause();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white font-bold text-3xl"
      >
        {typedText}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inline-block animate-blink"
        >
          |
        </motion.span>
      </motion.div>
    </div>
  );
};

export default IndexPage;