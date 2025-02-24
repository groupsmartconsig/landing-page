"use client";

import { LoaderIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { createContext, Suspense, useContext, useEffect, useState } from "react";

export const creationOrigin = "Api";

interface UtmContextProps {
  utmSource: string,
  utmMedium: string,
  utmCampaign: string,
  utmContent: string,
  utmId: string,
}

const UtmContext = createContext({} as UtmContextProps);

export const UtmProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const [utmData, setUtmData] = useState({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    utmId: "",
  });

  useEffect(() => {
    const utmParams = {
      utmSource: searchParams.get("utm_source") || "",
      utmMedium: searchParams.get("utm_medium") || "",
      utmCampaign: searchParams.get("utm_campaign") || "",
      utmContent: searchParams.get("utm_content") || "",
      utmId: searchParams.get("utm_id") || "",
    };

    localStorage.setItem("utm_campaign", utmParams.utmCampaign);
    localStorage.setItem("utm_content", utmParams.utmContent);
    localStorage.setItem("utm_source", utmParams.utmSource);
    localStorage.setItem("utm_id", utmParams.utmId);

    setUtmData(utmParams);
  }, [searchParams]);

  return <UtmContext.Provider value={utmData}>{children}</UtmContext.Provider>;
};

export const UtmProviderSuspense = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full overflow-hidden">
        <LoaderIcon className="size-8 animate-spin" />
      </div>
    }>
      <UtmProvider>{children}</UtmProvider>
    </Suspense>
  );
};

export const useUtmParams = () => {
  return useContext(UtmContext);
};

export const getUtmData = () => {
  const context = useContext(UtmContext);
  if (!context) {
    throw new Error("getUtmData deve ser usado dentro do UtmProvider.");
  }
  return context;
};
