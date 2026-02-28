'use client';

import { ChevronDown } from 'lucide-react';
import { PropertyCard } from './property-card';
import type { Property } from '@/types/property';

interface PropertyGridProps {
  properties: Property[];
  onContactClick: () => void;
}

export function PropertyGrid({ properties, onContactClick }: PropertyGridProps) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h3 className="text-2xl font-medium">New properties</h3>
        <div className="relative">
          <select className="appearance-none border border-zinc-200 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-white">
            <option value="default">Sort by: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onContactClick={onContactClick}
            isCompared={false}
            onCompareToggle={() => {}}
          />
        ))}
      </div>
    </section>
  );
}
