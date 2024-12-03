import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { generateEmbedCode } from '../../utils/embedCode';
import type { Industry } from '../../config/industries';

interface CopyButtonProps {
  industry: Industry;
  title: string;
  placeholder: string;
  questions: string[];
}

export function CopyButton({ industry, title, placeholder, questions }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = generateEmbedCode(industry, title, placeholder, questions);
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full px-4 py-2 text-sm text-gray-700"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copy Embed Code</span>
        </>
      )}
    </button>
  );
}