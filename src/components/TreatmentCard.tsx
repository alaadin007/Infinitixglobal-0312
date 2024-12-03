import React from 'react';
import { Clock, Sparkles, CalendarCheck } from 'lucide-react';

interface TreatmentCardProps {
  name: string;
  price: number;
  duration: string;
  description: string;
  results: string;
  image: string;
  area?: string;
  volume?: string;
}

export function TreatmentCard({ 
  name, 
  price, 
  duration, 
  description, 
  results, 
  image,
  area,
  volume
}: TreatmentCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-sky-100 hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {area || volume}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-sky-950 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-sky-600 mb-2">
          £{price}
        </p>
        <p className="text-sky-700 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sky-700 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarCheck className="w-4 h-4 mr-1" />
            <span className="text-sm">Lasts {results}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sky-600 text-sm">
            <Sparkles className="w-4 h-4 mr-1" />
            <span>Free consultation</span>
          </div>
          <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}