import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline({ data }) {
  return (
    <VerticalTimeline>
      {data.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.date}
          iconStyle={{ background: 'rgb(91 33 182)', color: '#6e57e0'}}
          contentArrowStyle={{ borderRight: '7px solid green' }}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
          <p>{item.content}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
