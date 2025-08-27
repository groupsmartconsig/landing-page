import React from "react";

import { ClientSolicitationProvider } from "./contexts/client/client-context";
import { BrasilCardFooterContainer } from "./_components/footer/footer";
import { UtmProviderSuspense } from "@/context/utm-context";

export const metadata = {
    title: "SmartConSig | Parceria — Brasilcard",
    description: "",
};


export default function BrasilcardLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <UtmProviderSuspense>    
                <ClientSolicitationProvider>
                    {children}
                </ClientSolicitationProvider>
                <BrasilCardFooterContainer />
            </UtmProviderSuspense>
        </>
    );
}