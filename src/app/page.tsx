import FaqContainer from './(home)/containers/faq'
import FooterContainer from './(home)/containers/footer'
import HeaderContainer from './(home)/containers/header'
import HeroVideoContainer from './(home)/containers/hero-video'
import InfiniteSliderContainer from './(home)/containers/infinite-slider'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <HeaderContainer />
      <InfiniteSliderContainer />
      <div className="max-w-6xl w-full mx-auto pt-16 px-3 md:px-0 md:pt-20">
        <HeroVideoContainer />
      </div>
      <div className="max-w-full w-full mx-auto py-8 px-2 bg-gradient-to-br from-black to-zinc-950 sm:bg-transparent sm:max-w-6xl sm:px-0">
        <FaqContainer />
        <FooterContainer />
      </div>
    </div>
  )
}
