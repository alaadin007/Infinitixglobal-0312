import React from 'react';
import { PropertyCard } from './PropertyCard';
import { propertyListings } from '../services/propertyData';

interface PropertyResultsProps {
  searchQuery: string;
}

export function PropertyResults({ searchQuery }: PropertyResultsProps) {
  if (!searchQuery) return null;

  // Simple search logic - in a real app this would be more sophisticated
  const london2BedProperties = propertyListings.london['2bed'];
  
  if (searchQuery.toLowerCase().includes('2 bed') && 
      searchQuery.toLowerCase().includes('london')) {
    return (
      <div>
        <h3 className="text-xl font-semibold text-sky-950 mb-4">
          Available 2-Bedroom Properties in London
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {london2BedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              price={property.price}
              location={property.location}
              features={property.features}
              area={property.area}
              type={property.type}
              image={property.images[0]}
            />
          ))}
        </div>
        <p className="mt-6 text-sky-700 text-sm">
          * These are example listings. Please contact us for current availability and pricing.
        </p>
      </div>
    );
  }

  return null;
}