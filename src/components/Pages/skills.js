"use client"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skillsData from "/skills.json";
import { useEffect } from 'react';
function Skills() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen" ref={ref}>
      <div className="container mx-auto mt-20 flex justify-center items-center flex-col h-screen ">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <motion.div
          className="grid md:grid-cols-4 grid-cols-3 gap-8 gap-x-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="p-4"
              variants={logoVariants}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="h-12 w-12 flex items-center">
                  <motion.img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={35}
                    height={35}
                    className="mx-auto my-0"
                    variants={logoVariants}
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xs text-white">{skill.name}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;