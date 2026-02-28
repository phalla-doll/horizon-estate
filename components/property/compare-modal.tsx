'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Bed, Bath, Square, MapPin } from 'lucide-react';
import type { Property } from '@/types/property';
import { useCompare } from '@/context/compare-context';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  properties: Property[];
}

export function CompareModal({ isOpen, onClose, properties }: CompareModalProps) {
  const { selectedIds, toggleCompare } = useCompare();

  const propertyMap = useMemo(
    () => new Map(properties.map(p => [p.id, p])),
    [properties]
  );

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl w-full max-w-6xl p-6 md:p-8 relative my-8"
          >
            <button
              onClick={onClose}
              type="button"
              className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-medium mb-8">Compare Properties</h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-zinc-200 w-1/5">Feature</th>
                    {selectedIds.map(id => {
                      const prop = propertyMap.get(id);
                      return (
                        <th key={id} className="p-4 border-b border-zinc-200 w-1/5 align-top">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                            <Image
                              src={prop?.images[0] || ''}
                              alt={prop?.title || ''}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <button
                              onClick={() => toggleCompare(id)}
                              type="button"
                              className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center hover:bg-white text-zinc-900"
                              aria-label="Remove from comparison"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                          <h4 className="font-medium text-lg">{prop?.title}</h4>
                          <p className="text-zinc-500 text-sm font-normal">{prop?.location}</p>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Price</td>
                    {selectedIds.map(id => (
                      <td key={`price-${id}`} className="p-4 border-b border-zinc-100 font-medium text-lg">{propertyMap.get(id)?.price}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Rating</td>
                    {selectedIds.map(id => (
                      <td key={`rating-${id}`} className="p-4 border-b border-zinc-100">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                          <span className="font-medium">{propertyMap.get(id)?.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Area</td>
                    {selectedIds.map(id => (
                      <td key={`area-${id}`} className="p-4 border-b border-zinc-100">{propertyMap.get(id)?.area}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Bedrooms</td>
                    {selectedIds.map(id => (
                      <td key={`beds-${id}`} className="p-4 border-b border-zinc-100">{propertyMap.get(id)?.beds}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Bathrooms</td>
                    {selectedIds.map(id => (
                      <td key={`baths-${id}`} className="p-4 border-b border-zinc-100">{propertyMap.get(id)?.baths}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Floors</td>
                    {selectedIds.map(id => (
                      <td key={`floors-${id}`} className="p-4 border-b border-zinc-100">{propertyMap.get(id)?.floors}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Type</td>
                    {selectedIds.map(id => (
                      <td key={`type-${id}`} className="p-4 border-b border-zinc-100">{propertyMap.get(id)?.type}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            {selectedIds.length === 0 ? (
              <div className="text-center py-12 text-zinc-500">
                No properties selected for comparison.
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
