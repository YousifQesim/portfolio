"use client"
import { useState } from 'react';
import Spinner from './spinner';

function DownloadButton({ children }) {
  const [pdfUrl, setPdfUrl] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = async () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_self');
      return;
    }

    setIsDownloading(true);

    const response = await fetch('/YusifQasimCv.pdf');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    setPdfUrl(url);
    setIsDownloading(false);
    window.open(url, '_blank');
  };

  return (
    <>
      {pdfUrl ? (
        <a href={pdfUrl} download className="text-white bg-violet-600 hover:bg-violet-800 transition ease-in-out delay-10 duration-200 gap-2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2.5 mt-4 text-center inline-flex items-center ">
          {children}
        </a>
      ) : (
        <button type="button" onClick={handleClick} disabled={isDownloading} className="text-white bg-violet-600 hover:bg-violet-800 transition ease-in-out delay-10 duration-200 gap-2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2.5 mt-4 text-center inline-flex items-center ">
          {isDownloading ? <Spinner/> : children}
        </button>
      )}
    </>
  );
}

export default DownloadButton;