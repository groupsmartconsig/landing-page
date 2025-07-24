"use client"

import FacebookPixel from "@/components/shared/facebook-pixel";

import { useEffect } from "react";

export default function PublicServerCustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NODE_ENV !== "production") {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/eruda";
        script.onload = () => {
          // @ts-ignore
          window.eruda && window.eruda.init();
        };
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <>
      {children}
      <FacebookPixel pixelId="1124010946274670" />
    </>
  )
}