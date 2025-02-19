import dynamic from 'next/dynamic';

const HeaderContainer = dynamic(() => import(
  '@/components/shared/header'
).then(mod => mod.HeaderContainer), { ssr: true });

const ExclusiveBenefitsSection = dynamic(() => import(
  '@/components/shared/exclusive-benefits'
).then(mod => mod.ExclusiveBenefitsSection), { ssr: true });

const CompanyStatsSection = dynamic(() => import(
  '@/components/shared/company-stats'
).then(mod => mod.CompanyStatsSection), { ssr: true });

const LoanProcessSection = dynamic(() => import(
  '@/components/shared/loan-process'
).then(mod => mod.LoanProcessSection), { ssr: true });

const CompanyMissionSection = dynamic(() => import(
  '@/components/shared/company-mission'
).then(mod => mod.CompanyMissionSection));

const LGPDSection = dynamic(() => import(
  '@/components/shared/lgpd-section'
).then(mod => mod.LGPDSection), { ssr: true });

const InfiniteSliderBanksContainer = dynamic(() => import(
  '@/components/shared/infinite-slider-banks'
).then(mod => mod.InfiniteSliderBanksContainer), { ssr: true });

const InfiniteSliderBanksDesktopContainer = dynamic(() => import(
  '@/components/shared/infinite-slider-banks-desktop'
).then(mod => mod.InfiniteSliderBanksDesktopContainer), { ssr: true });

const HeroVideoContainer = dynamic(() => import(
  '@/components/shared/hero-video'
).then(mod => mod.HeroVideoContainer), { ssr: true });

const ReviewsContainer = dynamic(() => import(
  '@/components/shared/reviews'
).then(mod => mod.ReviewsContainer), { ssr: true });

const FooterContainer = dynamic(() => import(
  '@/components/shared/footer'
).then(mod => mod.FooterContainer), { ssr: true });

export const revalidate = 21600 // 6 horas em segundos

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeaderContainer />
      <ExclusiveBenefitsSection />
      <CompanyMissionSection />
      <CompanyStatsSection />
      <LoanProcessSection />
      <LGPDSection />
      <div className="w-full block md:hidden">
        <InfiniteSliderBanksContainer />
      </div>
      <div className="hidden md:block w-full">
        <InfiniteSliderBanksDesktopContainer />
      </div>
      <div className='bg-medium-dark'>
        <section className="max-w-6xl w-full mx-auto pt-16 px-3 md:px-0 md:pt-20 lg:max-w-7xl">
          <HeroVideoContainer />
        </section>
      </div>
      <section className="pt-12 pb-16 bg-medium-dark md:py-16">
        <ReviewsContainer />
      </section>
      <FooterContainer />
    </div>
  )
}
