import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IndexPage = () => {
  const [typedText, setTypedText] = useState('');
  const text =
    "Welcome to Yusif Qasim's Portfolio website, where the fusion of creativity and technology takes center stage.";

  // Add the audio source URL here
  const audioURL = '/keyboard-sound.mp3';
  let audio;

  useEffect(() => {
    let currentIndex = 0;
    audio = new Audio(audioURL);

    const interval = setInterval(() => {
      setTypedText(text.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(interval);
        // Pause the audio when the typing animation is finished
        audio.pause();
      } else {
        // Play the audio when typing each character
        audio.play();
      }
    }, 100); // Adjust the speed of typing here (in milliseconds)

    return () => {
      clearInterval(interval);
      // Stop the audio and clean up when the component unmounts
      audio.pause();
      audio = null;
    };
  }, []);

  // Function to handle user interaction and start audio
  const handleInteraction = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      onClick={handleInteraction} // Add onClick to enable audio on user interaction
    >
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
