import { motion } from 'framer-motion';
import Image from 'next/image';

const Intro = () => {
  return (
    <motion.div
      className="h-screen flex justify-center items-center bg-violet-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='relative top-24'
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={2000}
          height={2000}
        />
      </motion.div>
    </motion.div>
  );
};

export default Intro;