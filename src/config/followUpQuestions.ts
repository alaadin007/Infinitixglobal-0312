import type { Industry } from './industries';

export const FOLLOW_UP_QUESTIONS: Record<Industry, string[]> = {
  legal: [
    'What are the types of child custody?',
    'How is child support calculated?',
    'What is mediation in family law?',
    'How long does divorce take?'
  ],
  medical: [
    'What are common preventive screenings?',
    'How often should I have a check-up?',
    'What vaccinations do I need?',
    'How to maintain heart health?'
  ],
  aesthetics: [
    'Tell me about Botox treatments',
    'What are the options for cheek fillers?',
    'How much are lip fillers?',
    'How long do treatments last?'
  ],
  dental: [
    'How often should I get teeth cleaned?',
    'What causes tooth sensitivity?',
    'Benefits of dental implants?',
    'How to prevent cavities?'
  ],
  financial: [
    'How to start retirement planning?',
    'What tax deductions am I eligible for?',
    'How to improve credit score?',
    'Best investment strategies?'
  ],
  realestate: [
    'Show me 2 bed properties in London',
    'How to get pre-approved for mortgage?',
    'What affects property value?',
    'Tips for first-time buyers?'
  ],
  fitness: [
    'Best exercises for weight loss?',
    'How to build muscle effectively?',
    'Recommended workout frequency?',
    'Nutrition tips for athletes?'
  ],
  education: [
    'How to improve study habits?',
    'Best learning techniques?',
    'Online vs traditional learning?',
    'Career development paths?'
  ],
  tech: [
    'Cloud vs on-premise solutions?',
    'Cybersecurity best practices?',
    'AI implementation strategies?',
    'Digital transformation tips?'
  ],
  hospitality: [
    'Customer service best practices?',
    'Restaurant management tips?',
    'Hotel operation efficiency?',
    'Staff training programs?'
  ]
} as const;