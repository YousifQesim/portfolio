import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
export default function Timeline({ data }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px", // adjust this value to change when the animation is triggered
  });

  return (
    <div className="timeline" ref={ref}>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`timeline-item ${
            index % 2 === 0 ? "timeline-item--work" : "timeline-item--education"
          }`}
        >
          <div className="timeline-icon">
            {index % 2 === 0 ? (
              <i className="fas fa-briefcase"></i>
            ) : (
              <i className="fas fa-graduation-cap"></i>
            )}
          </div>
          <div className="timeline-content">
            <div className=" w-full">
              {item.url ? (
                <Link href={item.url} target="_blank">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="timeline-title text-white underline decoration-indigo-500 text-sm lg:text-xl "
                  >
                    {item.title}
                  
                  </motion.h3>
                  
                </Link>
              ) : (
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="timeline-title text-white text-sm m:text-[16px] lg:text-[20px] "
                >
                  {item.title}
                </motion.h3>
              )}
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="timeline-subtitle text-grayColor text-[12px] m:text-[14px] my-1"
              >
                {item.subtitle}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-timeColor text-[8px] m:text-[10px]"
              >
                {item.date}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
