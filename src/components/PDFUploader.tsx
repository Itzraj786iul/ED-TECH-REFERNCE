import React, { useCallback } from 'react';
import { FileUp } from 'lucide-react';

interface PDFUploaderProps {
  onFileSelect: (file: File) => void;
}

export function PDFUploader({ onFileSelect }: PDFUploaderProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file?.type === 'application/pdf') {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full max-w-2xl p-8 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
    >
      <label className="flex flex-col items-center justify-center gap-4 cursor-pointer">
        <FileUp className="w-12 h-12 text-blue-500" />
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">
            Drop your PDF here or click to upload
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Supports PDF files up to 10MB
          </p>
        </div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileInput}
          className="hidden"
        />
      </label>
    </div>
  );
}