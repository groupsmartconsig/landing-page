

import React from "react";

import { ClientSolicitationProvider } from "./contexts/client/client-context";
import { BrasilCardFooterContainer } from "./_components/footer/footer";

export const metadata = {
    title: "SmartConSig | Parceria — Brasilcard",
    description: "",
};


export default function BrasilcardLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <ClientSolicitationProvider>
                {children}
            </ClientSolicitationProvider>
            <BrasilCardFooterContainer />
        </>
    );
}