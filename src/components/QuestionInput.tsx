import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface QuestionInputProps {
  onAsk: (question: string) => void;
  disabled: boolean;
}

export function QuestionInput({ onAsk, disabled }: QuestionInputProps) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onAsk(question);
      setQuestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={
            disabled
              ? 'Please upload a PDF first'
              : 'Ask a question about your PDF...'
          }
          disabled={disabled}
          className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={disabled || !question.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-600 disabled:text-gray-400"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}