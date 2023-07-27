"use client"
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import educationData from '/education.json';
import workData from '/work.json';
import certificationData from '/certification.json';
import Timeline from '../timeline';

export default function Qualification() {
  const [showEducationTimeline, setShowEducationTimeline] = useState(false);
  const [showWorkTimeline, setShowWorkTimeline] = useState(true);
  const [showCertificationTimeline, setShowCertificationTimeline] = useState(false);

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>
        <ul className="list-disc list-inside">
          <li>
            <button
              onClick={() => {
                setShowEducationTimeline(true);
                setShowWorkTimeline(false);
                setShowCertificationTimeline(false);
              }}
              className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Education
            </button>
          
          </li>
          <li>
            <button
              onClick={() => {
                setShowEducationTimeline(false);
                setShowWorkTimeline(true);
                setShowCertificationTimeline(false);
              }}
              className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Work
            </button>
          
          </li>
          <li>
            <button
              onClick={() => {
                setShowEducationTimeline(false);
                setShowWorkTimeline(false);
                setShowCertificationTimeline(true);
              }}
              className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Certifications
            </button>
          
          </li>
        </ul>
        <div>
        {showEducationTimeline && <Timeline data={educationData} />}
        {showWorkTimeline && <Timeline data={workData} />}
        {showCertificationTimeline && <Timeline data={certificationData} />}
        </div>
      </main>
    </div>
  );
}