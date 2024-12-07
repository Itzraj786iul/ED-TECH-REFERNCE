import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  file: File;
  onTextExtracted: (text: string) => void;
}

export function PDFViewer({ file, onTextExtracted }: PDFViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [scale] = useState(1.5);

  useEffect(() => {
    const loadPDF = async () => {
      const fileReader = new FileReader();
      fileReader.onload = async function() {
        const typedarray = new Uint8Array(this.result as ArrayBuffer);
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        setNumPages(pdf.numPages);

        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item: any) => item.str).join(' ');
          fullText += pageText + ' ';
        }
        onTextExtracted(fullText);

        // Render first page
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise;
      };
      fileReader.readAsArrayBuffer(file);
    };

    loadPDF();
  }, [file, onTextExtracted, scale]);

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-4">
      <canvas ref={canvasRef} className="w-full" />
      {numPages > 0 && (
        <div className="mt-4 text-center text-gray-600">
          Page {currentPage} of {numPages}
        </div>
      )}
    </div>
  );
}