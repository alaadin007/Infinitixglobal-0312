import React from 'react';
import { Home, Maximize, BedDouble, Bath } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  price: number;
  location: string;
  features: string[];
  area: number;
  type: string;
  image: string;
}

export function PropertyCard({ title, price, location, features, area, type, image }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-sky-100">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-sky-950 mb-2">{title}</h3>
        <p className="text-2xl font-bold text-sky-600 mb-2">
          £{price.toLocaleString()}
        </p>
        <p className="text-sky-700 mb-4 flex items-center">
          <Home className="w-4 h-4 mr-2" />
          {location}
        </p>
        
        <div className="flex items-center justify-between text-sky-700 mb-4">
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1" />
            <span className="text-sm">{features[0]}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{features[1]}</span>
          </div>
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-1" />
            <span className="text-sm">{area} sq ft</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {features.slice(2).map((feature, index) => (
            <span 
              key={index}
              className="bg-sky-50 text-sky-700 px-2 py-1 rounded-full text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}