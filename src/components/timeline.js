import React from 'react';

export default function Timeline({ data }) {
  return (
    <div className="timeline">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`timeline-item ${index % 2 === 0 ? 'timeline-item--work' : 'timeline-item--education'}`}
        >
          <div className="timeline-icon">
            {index % 2 === 0 ? <i className="fas fa-briefcase"></i> : <i className="fas fa-graduation-cap"></i>}
          </div>
          <div className="timeline-content">
            <div className='mx-4'>

            <h3 className="timeline-title text-white">{item.title}</h3>
            <h4 className="timeline-subtitle text-white">{item.subtitle}</h4>
            <p className='text-white'>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
