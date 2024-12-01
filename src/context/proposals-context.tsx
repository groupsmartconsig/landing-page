import { Contracts } from '@/types/proposals';
import React, { createContext, ReactNode, useState } from 'react';

interface ProposalsContextType {
  proposals: Contracts | null;
  setProposals: React.Dispatch<React.SetStateAction<Contracts | null>>;
}

export const ProposalsContext = createContext<ProposalsContextType | undefined>(undefined);

export function ProposalsProvider({ children }: { children: ReactNode }) {
  const [proposals, setProposals] = useState<Contracts | null>(null);

  return (
    <ProposalsContext.Provider value={{ proposals, setProposals }}>
      {children}
    </ProposalsContext.Provider>
  );
}