import { Proposal } from '@/types/proposals';
import React, { createContext, ReactNode, useState } from 'react';

interface ProposalsContextType {
  proposals: Proposal[];
  setProposals: React.Dispatch<React.SetStateAction<Proposal[]>>;
}

export const ProposalsContext = createContext<ProposalsContextType | undefined>(undefined);

export function ProposalsProvider({ children }: { children: ReactNode }) {
  const [proposals, setProposals] = useState<Proposal[]>([]);

  return (
    <ProposalsContext.Provider value={{ proposals, setProposals }}>
      {children}
    </ProposalsContext.Provider>
  );
}