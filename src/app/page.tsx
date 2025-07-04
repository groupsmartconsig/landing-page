"use client"

import InstitutionalPage from "./(institutional-page)/institucional/page";

import { UtmProviderSuspense } from "@/context/utm-context";

export default function HomePage() {
  return (
    <UtmProviderSuspense>
      <InstitutionalPage />
    </UtmProviderSuspense>
  )
}