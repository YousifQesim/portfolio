import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Timeline({ data }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // adjust this value to change when the animation is triggered
  });

  return (
    <div className="timeline" ref={ref}>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`timeline-item ${index % 2 === 0 ? 'timeline-item--work' : 'timeline-item--education'}`}
        >
          <div className="timeline-icon">
            {index % 2 === 0 ? <i className="fas fa-briefcase"></i> : <i className="fas fa-graduation-cap"></i>}
          </div>
          <div className="timeline-content">
            <div className='mx-4'>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="timeline-title text-white"
              >
                {item.title}
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="timeline-subtitle text-white"
              >
                {item.subtitle}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='text-white'
              >
                {item.content}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}