import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function NumberCounters() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setYears(2);
      setProjects(10);
      setCertifications(5);
    }
  }, [inView]);

  return (
    <div className="flex gap-10 justify-center mt-6" ref={ref}>
      <div className="text-center">
        <CountUp end={years} duration={2} suffix="+">
          {({ countUpRef }) => (
            <h1 className="text-white font-bold text-xl" ref={countUpRef} />
          )}
        </CountUp>
        <span className="text-xs">
          <p>Years</p>
          <p>Experience</p>
        </span>
      </div>
      <div className="text-center">
        <CountUp end={projects} duration={2} suffix="+">
          {({ countUpRef }) => (
            <h1 className="text-white font-bold text-xl" ref={countUpRef} />
          )}
        </CountUp>
        <span className="text-xs">
          <p>Project</p>
          <p>Completed</p>
        </span>
      </div>
      <div className="text-center">
        <CountUp end={certifications} duration={2} suffix="+">
          {({ countUpRef }) => (
            <h1 className="text-white font-bold text-xl" ref={countUpRef} />
          )}
        </CountUp>
        <span className="text-xs">
          <p>Web Development</p>
          <p>Certifications</p>
        </span>
      </div>
    </div>
  );
}

export default NumberCounters;