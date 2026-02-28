'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useCompare } from '@/context/compare-context';

interface CompareBarProps {
  onCompareClick: () => void;
}

export function CompareBar({ onCompareClick }: CompareBarProps) {
  const { selectedIds, clearSelection } = useCompare();

  return (
    <AnimatePresence>
      {selectedIds.length > 0 ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-6 py-4 rounded-full shadow-2xl z-40 flex items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium">
              {selectedIds.length}
            </span>
            <span className="text-sm font-medium">properties selected</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onCompareClick}
              type="button"
              className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors"
            >
              Compare
            </button>
            <button
              onClick={clearSelection}
              type="button"
              className="text-zinc-400 hover:text-white transition-colors p-2"
              aria-label="Clear selection"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
