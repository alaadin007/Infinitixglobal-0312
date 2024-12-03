import { API_BASE_URL, API_KEY } from '../config/constants';
import type { SearchResponse, SearchError } from '../types/search';

export async function searchQuery(query: string): Promise<SearchResponse> {
  if (!API_KEY) {
    throw new Error('API key is not configured. Please check your environment variables.');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/inference`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'togethercomputer/llama-2-70b-chat',
        prompt: `[INST] ${query} [/INST]`,
        max_tokens: 512,
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        repetition_penalty: 1,
        stop: ['[/INST]', '[INST]'],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.output?.text) {
      throw new Error('Invalid API response format');
    }

    return {
      text: data.output.text.trim(),
      created: Date.now(),
      done: true,
    };
  } catch (error) {
    console.error('Search API Error:', error);
    throw {
      message: error instanceof Error ? error.message : 'An unknown error occurred',
      status: error instanceof Error && error.message.includes('API Error') ? 400 : 500,
    } as SearchError;
  }
}