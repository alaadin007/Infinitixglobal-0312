import OpenAI from 'openai';
import { API_CONFIG } from '../config/constants';
import type { SearchResponse, SearchError } from '../types/search';

const openai = new OpenAI({
  apiKey: API_CONFIG.openai.key,
  dangerouslyAllowBrowser: true
});

export async function searchWithOpenAI(query: string): Promise<SearchResponse> {
  try {
    const completion = await openai.chat.completions.create({
      model: API_CONFIG.openai.model,
      messages: [
        { 
          role: 'system', 
          content: 'You are a helpful assistant providing clear, concise answers about various industry topics.' 
        },
        { 
          role: 'user', 
          content: query 
        }
      ],
      max_tokens: API_CONFIG.openai.maxTokens,
      temperature: API_CONFIG.openai.temperature
    });

    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      throw new Error('No response received from OpenAI');
    }

    return {
      text: response.trim(),
      created: Date.now(),
      done: true
    };
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    
    if (error instanceof OpenAI.APIError) {
      throw {
        message: error.message,
        status: error.status
      } as SearchError;
    }
    
    throw {
      message: error.message || 'An unknown error occurred',
      status: 500
    } as SearchError;
  }
}