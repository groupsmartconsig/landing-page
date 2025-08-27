"use client"

import axios from 'axios';

import { ClientStates } from '@/app/api/brasilcard/types/client-states';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface ClientSolicitationData{
    name?: string
    cpf?: string, 
    identity_document_number?: string,
    identity_document_state?: string,
    cellphone?: string,
    email?: string,
    birth_date?: string,
    sex?: string,
    marital_status?: string,
    mother_name?: string,
    job?: string,
    job_company?: string,
    employment_status?: string,
    income?: string,
    zipcode?: string,
    city?: string,
    state?: string,
    type_street?: string,
    address?: string,
    number?: string,
    complement?: string,
    neighborhood?: string,
    politically_exposed_position?: boolean,
    politically_exposed_position_date?: string,
    politically_exposed_relative?: boolean,
}

type ClientSolicitationContextType = {
    clientData: ClientSolicitationData;
    setClientData: React.Dispatch<React.SetStateAction<ClientSolicitationData>>;
    resetClient: () => void;
};

const ClientSolicitationFormContext = createContext<ClientSolicitationContextType | undefined>(undefined);

export const ClientSolicitationProvider = ({ children }: { children: ReactNode }) => {
    const [clientData, setClientData] = useState<ClientSolicitationData>({} as ClientSolicitationData);
    const resetClient = () => setClientData({} as ClientSolicitationData);

    return (
        <ClientSolicitationFormContext.Provider value={{ clientData, setClientData, resetClient }}>
            {children}
        </ClientSolicitationFormContext.Provider>
    );
};

export const useClientSolicitationContext = (): ClientSolicitationContextType => {
    const context = useContext(ClientSolicitationFormContext);

    if (!context) {
        throw new Error('useClientSolicitationForm must be used within ClientSolicitationFormProvider');
    }
    
    return context;
};