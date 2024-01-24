"use client";

interface DownloadButtonProps {
  resumeUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  resumeUrl,
  fileName,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = fileName;
    link.type = 'application/pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadButton;
