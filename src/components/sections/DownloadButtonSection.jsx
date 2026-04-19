'use client'

import { Download } from 'lucide-react';
import { Button } from '../ui/button';

const DownloadButtonSection = ({ label, filename, content }) => {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-12 bg-surface">
      <div className="container-grid">
        <div className="text-center">
          <Button onClick={handleDownload} size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            {label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadButtonSection;
