import HeroVideoDialog from "@/components/magic-ui/hero-video-dialog";

export default function HeroVideoContainer() {
  return (
    <div className="relative pb-16">
      <div className="w-full flex flex-col items-center space-y-6 pb-12">
        <h3 className="text-4xl bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] bg-clip-text text-transparent text-center font-bold px-3 sm:px-0 md:text-5xl">
          Depoimentos de Clientes
        </h3>
        <p className="w-full text-center text-base text-muted-foreground font-medium px-6 sm:max-w-5xl">
          Veja agora alguns de nossos depoimentos, incluindo um vídeo da nossa cliente Cristina que precisava fazer uma reforma em sua casa e através da portabilidade de empréstimo e com a ajuda da Smart Consig, conseguiu conquistar seus objetivos e melhorou sua vida financeira.
        </p>
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
