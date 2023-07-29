import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

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
        className="text-white bg-violet-600 hover:bg-violet-800 transition ease-in-out delay-10 duration-200 gap-2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2.5 mt-4 text-center inline-flex items-center"
      >
        Know Me By Video
        <Image
                    src="/click.svg"
                    alt="click logo"
                    width={20}
                    height={20}
                    priority
                  />
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