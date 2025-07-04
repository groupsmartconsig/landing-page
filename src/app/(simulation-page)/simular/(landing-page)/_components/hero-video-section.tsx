'use client'

import HeroVideoDialog from "@/components/magic-ui/hero-video-dialog";

export function SimulationPageHeroVideoSection() {
  return (
    <div className="relative pb-16">
      <div className="flex justify-center items-center py-6 md:pt-0 md:pb-12">
        <h3 className="max-w-60 text-center text-2xl text-danger-red font-bold sm:max-w-full sm:px-0 md:text-5xl">
          Conheça a história de Cristina
        </h3>
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
