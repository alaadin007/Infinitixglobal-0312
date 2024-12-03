import type { Industry } from '../../config/industries';

interface SearchParams {
  query: string;
  industry: Industry;
  context?: string;
}

interface SearchResponse {
  text: string;
  suggestions?: string[];
}

const API_URL = 'https://api.infinitixglobal.com/search';

export async function searchAPI({ query, industry, context }: SearchParams): Promise<SearchResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        industry,
        context,
      }),
    });

    if (!response.ok) {
      throw new Error('Search request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Search API Error:', error);
    throw new Error('Failed to perform search');
  }
}