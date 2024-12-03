import type { Industry } from '../config/industries';
import { INDUSTRY_PROMPTS } from '../config/industries';

export function getSearchContext(industry?: Industry, additionalContext?: string): string {
  let context = '';
  
  if (industry) {
    context += INDUSTRY_PROMPTS[industry];
  }
  
  if (additionalContext) {
    context += `\n\n${additionalContext}`;
  }
  
  return context;
}