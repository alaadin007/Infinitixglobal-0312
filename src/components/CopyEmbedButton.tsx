import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { generateEmbedCode, copyToClipboard } from '../utils/embedCode';
import type { Industry } from '../config/industries';
import { INDUSTRY_CONFIGS } from '../config/industries';
import { FOLLOW_UP_QUESTIONS } from '../config/followUpQuestions';

interface CopyEmbedButtonProps {
  industry: Industry;
}

export function CopyEmbedButton({ industry }: CopyEmbedButtonProps) {
  const [copied, setCopied] = useState(false);
  const config = INDUSTRY_CONFIGS[industry];
  const questions = FOLLOW_UP_QUESTIONS[industry];

  const handleCopy = async () => {
    try {
      const { styles, html } = generateEmbedCode(
        industry,
        config.title,
        config.placeholder,
        questions
      );

      const embedCode = `<!-- Add this to your WordPress Customizer Additional CSS -->
<style>
${styles}
</style>

<!-- Add this to your WordPress page using a Custom HTML block -->
${html}`;

      await copyToClipboard(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy embed code:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-white text-sm"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copy WordPress Code</span>
        </>
      )}
    </button>
  );
}