import FaqContainer from './(home)/containers/faq'
import FooterContainer from './(home)/containers/footer'
import HeaderContainer from './(home)/containers/header'
import HeroVideoContainer from './(home)/containers/hero-video'
import InfiniteSliderContainer from './(home)/containers/infinite-slider'
import PortabilityContainer from './(home)/containers/portability'
import ReviewsContainer from './(home)/containers/reviews'
import SimulationContainer from './(home)/containers/simulation'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <HeaderContainer />
      <PortabilityContainer />
      <SimulationContainer />
      <InfiniteSliderContainer />
      <div className="max-w-6xl w-full mx-auto pt-16 px-3 md:px-0 md:pt-20">
        <HeroVideoContainer />
      </div>
      <div className="w-full py-8 px-2 bg-gradient-to-br from-black to-zinc-950">
        <section className="pt-12 pb-16 bg-gradient-to-br from-black to-zinc-950 sm:bg-transparent">
          <ReviewsContainer />
        </section>
        <div className="sm:bg-transparent sm:max-w-6xl sm:mx-auto sm:px-0">
          <FaqContainer />
          <FooterContainer />
        </div>
      </div>
    </div>
  )
}
