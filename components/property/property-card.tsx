'use client';

import { memo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Heart, Star, Bed, Bath, Square, MapPin } from 'lucide-react';
import { Tooltip } from '@/components/ui/tooltip';
import type { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
  onContactClick: () => void;
  isCompared: boolean;
  onCompareToggle: () => void;
}

const PropertyCard = memo(function PropertyCard({
  property,
  onContactClick,
  isCompared,
  onCompareToggle
}: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image
          src={property.images[currentImage]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500"
          referrerPolicy="no-referrer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={prevImage}
            type="button"
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            type="button"
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {property.images.map((_, idx) => (
            <div
              key={`image-${property.id}-${idx}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>

        <button
          onClick={toggleFavorite}
          type="button"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors z-10"
          aria-label="Add to favorites"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        <label
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors z-10 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            checked={isCompared}
            onChange={onCompareToggle}
            className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
            aria-label="Compare property"
          />
        </label>
      </div>

      <div className="flex justify-between items-start mb-1">
        <h4 className="font-medium text-lg">{property.title}</h4>
        <span className="font-medium text-lg">{property.price}</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-zinc-500 text-sm">{property.location}</p>
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
          <span className="text-sm font-medium">{property.rating}</span>
          <span className="text-xs text-zinc-400 ml-1">({property.reviewCount})</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-zinc-600">
        <Tooltip content="Square meters">
          <div className="flex items-center gap-1.5">
            <Square className="w-3.5 h-3.5" />
            <span>{property.area}</span>
          </div>
        </Tooltip>
        <Tooltip content="Floors">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{property.floors}</span>
          </div>
        </Tooltip>
        <Tooltip content="Bedrooms">
          <div className="flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5" />
            <span>{property.beds}</span>
          </div>
        </Tooltip>
        <Tooltip content="Bathrooms">
          <div className="flex items-center gap-1.5">
            <Bath className="w-3.5 h-3.5" />
            <span>{property.baths}</span>
          </div>
        </Tooltip>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onContactClick(); }}
        type="button"
        className="mt-4 w-full border border-zinc-200 text-zinc-900 py-2 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
      >
        Contact Agent
      </button>
    </motion.div>
  );
});

export { PropertyCard };
