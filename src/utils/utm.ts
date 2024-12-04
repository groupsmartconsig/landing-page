"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const creationOrigin = "Api";

export const useUtmParams = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const utmParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_id"
      ];

      utmParams.forEach((param) => {
        const value = searchParams.get(param);
        if (value) {
          localStorage.setItem(param, value);
        }
      });
    }
  }, [searchParams]);
};

export const getUtmData = () => {
  return {
    utmSource: localStorage.getItem("utm_source") || "",
    utmMedium: localStorage.getItem("utm_medium") || "",
    utmCampaign: localStorage.getItem("utm_campaign") || "",
    utmContent: localStorage.getItem("utm_content") || "",
    utmId: localStorage.getItem("utm_id") || "",
  };
};
