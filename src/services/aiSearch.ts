import OpenAI from 'openai';
import { API_CONFIG } from '../config/constants';
import type { SearchResponse, SearchError } from '../types/search';
import { INDUSTRY_PROMPTS, type Industry } from '../config/industries';

const openai = new OpenAI({
  apiKey: API_CONFIG.openai.key,
  dangerouslyAllowBrowser: true
});

interface AISearchOptions {
  industry?: Industry;
  context?: string;
}

export async function aiSearch(query: string, options: AISearchOptions = {}): Promise<SearchResponse> {
  try {
    let enhancedPrompt = query;

    // Add industry-specific context if provided
    if (options.industry) {
      enhancedPrompt = `${INDUSTRY_PROMPTS[options.industry]}\n\nUser Query: ${query}`;
    }

    // Add additional context if provided
    if (options.context) {
      enhancedPrompt = `${options.context}\n\n${enhancedPrompt}`;
    }

    const completion = await openai.chat.completions.create({
      model: API_CONFIG.openai.model,
      messages: [
        {
          role: 'system',
          content: 'You are an AI assistant specialized in providing accurate, industry-specific information. Focus on delivering practical, actionable insights that demonstrate expertise in the field.'
        },
        {
          role: 'user',
          content: enhancedPrompt
        }
      ],
      max_tokens: API_CONFIG.openai.maxTokens,
      temperature: API_CONFIG.openai.temperature
    });

    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      throw new Error('No response received from AI');
    }

    return {
      text: response.trim(),
      created: Date.now(),
      done: true
    };
  } catch (error: any) {
    console.error('AI Search Error:', error);
    
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