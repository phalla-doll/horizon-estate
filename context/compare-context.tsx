'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface CompareContextType {
  selectedIds: number[];
  toggleCompare: (id: number) => void;
  clearSelection: () => void;
  isSelected: (id: number) => boolean;
}

const CompareContext = createContext<CompareContextType | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleCompare = useCallback((id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) return prev.filter(pId => pId !== id);
      if (prev.length >= 4) {
        alert("You can compare up to 4 properties at a time.");
        return prev;
      }
      return [...prev, id];
    });
  }, []);

  const clearSelection = useCallback(() => setSelectedIds([]), []);
  const isSelected = useCallback((id: number) => selectedIds.includes(id), [selectedIds]);

  return (
    <CompareContext.Provider value={{ selectedIds, toggleCompare, clearSelection, isSelected }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) throw new Error('useCompare must be used within CompareProvider');
  return context;
}
