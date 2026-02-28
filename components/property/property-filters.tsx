'use client';

import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import type { FilterState } from '@/types/property';

interface PropertyFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function PropertyFilters({ filters, onFiltersChange, sortBy, onSortChange }: PropertyFiltersProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
          We help you find the<br />home that will be yours
        </h2>
        <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
          Our projects are about harmony, style and care that everyone lives in what is really important to them.
        </p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <button
            onClick={() => onFiltersChange({ ...filters, activeType: 'Buy' })}
            type="button"
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filters.activeType === 'Buy' ? 'border border-zinc-200 bg-zinc-50 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50'}`}
          >
            Buy
          </button>
          <button
            onClick={() => onFiltersChange({ ...filters, activeType: 'Rent' })}
            type="button"
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filters.activeType === 'Rent' ? 'border border-zinc-200 bg-zinc-50 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50'}`}
          >
            Rent
          </button>
          <button
            onClick={() => onFiltersChange({ ...filters, activeType: 'New developments' })}
            type="button"
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filters.activeType === 'New developments' ? 'border border-zinc-200 bg-zinc-50 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50'}`}
          >
            New developments
          </button>
          <button
            onClick={() => onFiltersChange({ ...filters, activeType: 'Commercial properties' })}
            type="button"
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filters.activeType === 'Commercial properties' ? 'border border-zinc-200 bg-zinc-50 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50'}`}
          >
            Commercial properties
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
          <div className="relative">
            <select
              value={filters.country}
              onChange={(e) => onFiltersChange({ ...filters, country: e.target.value })}
              className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              <option>All countries</option>
              <option>USA</option>
              <option>Caribbean</option>
              <option>Portugal</option>
              <option>Mexico</option>
              <option>Greece</option>
              <option>Spain</option>
              <option>UK</option>
              <option>UAE</option>
              <option>Canada</option>
              <option>France</option>
              <option>Italy</option>
              <option>Singapore</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={filters.propertyType}
              onChange={(e) => onFiltersChange({ ...filters, propertyType: e.target.value })}
              className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              <option>All types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={filters.priceRange}
              onChange={(e) => onFiltersChange({ ...filters, priceRange: e.target.value })}
              className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              <option>All prices</option>
              <option>Under $200,000</option>
              <option>$200,000 - $500,000</option>
              <option>$500,000 - $1,000,000</option>
              <option>Over $1,000,000</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={filters.size}
              onChange={(e) => onFiltersChange({ ...filters, size: e.target.value })}
              className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              <option>All sizes (m²)</option>
              <option>Under 100 m²</option>
              <option>100 - 300 m²</option>
              <option>300 - 500 m²</option>
              <option>Over 500 m²</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={filters.bedrooms}
              onChange={(e) => onFiltersChange({ ...filters, bedrooms: e.target.value })}
              className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              <option>Bedrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={filters.bathrooms}
              onChange={(e) => onFiltersChange({ ...filters, bathrooms: e.target.value })}
              className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              <option>Bathrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-zinc-100">
          <button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900" type="button">
            <SlidersHorizontal className="w-4 h-4" /> More options
          </button>
          <button
            onClick={() => onFiltersChange({
              country: 'All countries',
              propertyType: 'All types',
              priceRange: 'All prices',
              size: 'All sizes (m²)',
              bedrooms: 'Bedrooms',
              bathrooms: 'Bathrooms',
              activeType: filters.activeType
            })}
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900"
          >
            Clear filters
          </button>
        </div>
      </div>
    </section>
  );
}
