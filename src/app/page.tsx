import dynamic from 'next/dynamic';

const HeaderContainer = dynamic(() => import(
  '@/components/shared/header'
).then(mod => mod.HeaderContainer), { ssr: true });

const InformativeContainer = dynamic(() => import(
  '@/components/shared/informative'
).then(mod => mod.InformativeContainer), { ssr: true });

const PortabilityContainer = dynamic(() => import(
  '@/components/shared/portability'
).then(mod => mod.PortabilityContainer), { ssr: true });

const SimulationContainer = dynamic(() => import(
  '@/components/shared/simulation'
).then(mod => mod.SimulationContainer), { ssr: true });

const InfiniteSliderBanksContainer = dynamic(() => import(
  '@/components/shared/infinite-slider-banks'
).then(mod => mod.InfiniteSliderBanksContainer), { ssr: true });

const HeroVideoContainer = dynamic(() => import(
  '@/components/shared/hero-video'
).then(mod => mod.HeroVideoContainer), { ssr: true });

const ReviewsContainer = dynamic(() => import(
  '@/components/shared/reviews'
).then(mod => mod.ReviewsContainer), { ssr: true });

const FaqContainer = dynamic(() => import(
  '@/components/shared/faq'
).then(mod => mod.FaqContainer), { ssr: true });

const FooterContainer = dynamic(() => import(
  '@/components/shared/footer'
).then(mod => mod.FooterContainer), { ssr: true });

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeaderContainer />
      <InformativeContainer />
      <PortabilityContainer />
      <SimulationContainer />
      <InfiniteSliderBanksContainer />
      <div className="max-w-6xl w-full mx-auto pt-16 px-3 md:px-0 md:pt-20 lg:max-w-7xl">
        <HeroVideoContainer />
      </div>
      <section className="pt-12 pb-16 bg-black">
        <ReviewsContainer />
      </section>
      <FaqContainer />
      <FooterContainer />
    </div>
  )
}