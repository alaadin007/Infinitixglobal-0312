import React from 'react';
import { TreatmentCard } from './TreatmentCard';
import { aestheticsTreatments } from '../services/aestheticsData';

interface AestheticsResultsProps {
  searchQuery: string;
}

export function AestheticsResults({ searchQuery }: AestheticsResultsProps) {
  if (!searchQuery) return null;

  const query = searchQuery.toLowerCase();
  let treatments = [];
  let title = '';
  let introText = '';

  if (query.includes('botox')) {
    treatments = aestheticsTreatments.botox;
    title = 'Serenity Spa\'s Botox Treatments';
    introText = 'Our expert practitioners at Serenity Spa & Beauty provide premium Botox treatments using only the highest quality products. Each treatment includes a complimentary consultation.';
  } else if (query.includes('cheek') && query.includes('filler')) {
    treatments = aestheticsTreatments.fillers.cheek;
    title = 'Luxury Cheek Enhancement';
    introText = 'Experience natural-looking volume enhancement with our premium dermal fillers. Our skilled aestheticians specialize in creating subtle, beautiful results.';
  } else if (query.includes('lip') && query.includes('filler')) {
    treatments = aestheticsTreatments.fillers.lips;
    title = 'Premium Lip Enhancement';
    introText = 'Achieve the perfect pout with our expertly administered lip fillers. We use only premium products for safe, stunning results.';
  }

  if (treatments.length === 0) return null;

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-xl rounded-xl p-6 border border-sky-100">
      <h3 className="text-xl font-semibold text-sky-950 mb-2">{title}</h3>
      <p className="text-sky-700 mb-6">{introText}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {treatments.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            {...treatment}
          />
        ))}
      </div>

      <div className="mt-6 bg-sky-50 rounded-lg p-4">
        <p className="text-sky-700 text-sm">
          Book a free consultation with our expert practitioners to discuss your treatment options. All prices include aftercare and follow-up appointments.
        </p>
      </div>
    </div>
  );
}