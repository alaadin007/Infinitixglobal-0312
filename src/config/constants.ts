export const API_CONFIG = {
  openai: {
    key: import.meta.env.VITE_OPENAI_API_KEY,
    model: 'gpt-3.5-turbo',
    maxTokens: 500,
    temperature: 0.7
  }
} as const;