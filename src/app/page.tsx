"use client"

import LandingPage from "./(landing-page)/page";

import { UtmProviderSuspense } from "@/context/utm-context";

export default function HomePage() {
  return (
    <UtmProviderSuspense>
      <LandingPage />
    </UtmProviderSuspense>
  )
}