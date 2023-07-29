import { motion } from "framer-motion";
import { useState, useRef } from "react";

const VideoPopup = ({ videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleOpen = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
    // Pause the video when the overlay is closed
    videoRef.current.pause();
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Play Video
      </button>
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleClose}
          />
          <div className="relative z-10">
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl"
            >
              &times;
            </button>
            <video
              ref={videoRef}
              className="w-full"
              src={videoUrl}
              controls
              autoPlay
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoPopup;