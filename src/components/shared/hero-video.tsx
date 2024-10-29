'use client'

import HeroVideoDialog from "@/components/magic-ui/hero-video-dialog";

import { SimulationMobileButton } from "@/components/shared/simulation-mobile-button";

export function HeroVideoContainer() {
  return (
    <div className="relative pb-16">
      <div className="max-w-[322px] mx-auto w-full flex flex-col justify-center space-y-2 pb-12 md:max-w-full md:items-center md:space-y-6">
        <h3 className="text-2xl text-primary font-bold sm:px-0 md:text-5xl">
          Depoimentos de Clientes
        </h3>
        <p className="w-full text-base text-muted-foreground font-medium sm:max-w-5xl md:text-2xl md:max-w-4xl">
          Veja agora alguns de nossos depoimentos, incluindo um vídeo da nossa cliente Cristina, que precisava fazer uma reforma 
          em sua casa. Através da portabilidade de empréstimo e com a ajuda da Smart Consig, conseguiu conquistar seus objetivos 
          e melhorou sua vida financeira.
        </p>

        <div className="w-full pt-6 sm:max-w-xs sm:px-0 md:max-w-sm md:py-6 lg:max-w-md">
          <SimulationMobileButton 
            title="Quero conquistar meus objetivos" 
            className="md:w-full md:text-lg md:font-semibold"
          />
        </div>
      </div>

      <HeroVideoDialog
        className="block z-10"
        animationStyle="top-in-bottom-out"
        videoSrc="video.mp4"
        thumbnailSrc="video-thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
