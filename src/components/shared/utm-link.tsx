import { useUtmParams } from "@/context/utm-context";
import { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface UtmLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const UtmLink = ({ href, children, ...props }: UtmLinkProps) => {
  const { utmSource, utmMedium, utmCampaign, utmContent, utmId } = useUtmParams();
  const router = useRouter();

  const addUtmParams = (url: string | URL) => {
    const urlObj = new URL(url.toString(), window.location.origin);
    if (utmSource) urlObj.searchParams.set("utm_source", utmSource);
    if (utmMedium) urlObj.searchParams.set("utm_medium", utmMedium);
    if (utmCampaign) urlObj.searchParams.set("utm_campaign", utmCampaign);
    if (utmContent) urlObj.searchParams.set("utm_content", utmContent);
    if (utmId) urlObj.searchParams.set("utm_id", utmId);
    return urlObj.toString();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(addUtmParams(href.toString()));
  };

  return (
    <a href={addUtmParams(href.toString())} {...props} onClick={handleClick}>
      {children}
    </a>
  );
};
