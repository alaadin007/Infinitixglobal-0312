import type { Industry } from '../config/industries';

const INDUSTRY_COLORS = {
  medical: {
    from: '#34d399',
    to: '#059669'
  },
  aesthetics: {
    from: '#e561a7',
    to: '#a166d9'
  },
  dental: {
    from: '#3b82f6',
    to: '#2563eb'
  },
  legal: {
    from: '#818cf8',
    to: '#4f46e5'
  }
} as const;

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error('Failed to copy text:', error);
    throw new Error('Failed to copy to clipboard');
  }
}

export function generateEmbedCode(
  industry: Industry,
  title: string,
  placeholder: string,
  questions: string[]
): { styles: string; html: string } {
  const colors = INDUSTRY_COLORS[industry] || INDUSTRY_COLORS.medical;
  
  const styles = `
.${industry}-search-container {
  background: linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%);
  border-radius: 24px;
  padding: 32px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  color: white;
}

.${industry}-search-box {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 16px 20px;
  margin: 24px 0;
}

.${industry}-search-box input {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  width: 100%;
  padding: 8px;
}

.${industry}-search-box input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.${industry}-questions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.${industry}-question-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 100px;
  color: white;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background-color 0.2s;
}

.${industry}-question-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 640px) {
  .${industry}-search-container {
    padding: 20px;
    border-radius: 16px;
  }
  
  .${industry}-questions {
    grid-template-columns: 1fr;
  }
}`.trim();

  const html = `
<div class="${industry}-search-container">
  <h2 style="font-size: 28px; margin: 0;">${title}</h2>
  
  <div class="${industry}-search-box">
    <input type="text" placeholder="${placeholder}">
    <div style="text-align: right; font-size: 14px;">
      AI-powered search ✨
    </div>
  </div>
  
  <div>
    <h3 style="font-size: 16px; margin: 0 0 12px 0;">
      💬 Related Questions
    </h3>
    <div class="${industry}-questions">
      ${questions.map(q => `<button class="${industry}-question-btn">${q}</button>`).join('\n      ')}
    </div>
  </div>
</div>

<script src="https://cdn.infinitixglobal.com/search-embed.js"></script>
<script>
  new InfinitixSearch(document.querySelector('.${industry}-search-container'), {
    industry: '${industry}',
    title: '${title}',
    placeholder: '${placeholder}'
  });
</script>`.trim();

  return { styles, html };
}