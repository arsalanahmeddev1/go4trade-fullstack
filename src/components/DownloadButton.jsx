// DownloadButton.jsx
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/terms.pdf'; // PDF path from public folder
    link.download = 'terms.pdf'; // Desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download Terms PDF
    </button>
  );
};

export default DownloadButton;
