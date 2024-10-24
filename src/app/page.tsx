import Footer from './(home)/containers/footer'
import ContainerHeader from './(home)/containers/header'
import InfiniteSliderContainer from './(home)/containers/infinite-slider'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <ContainerHeader />
      <InfiniteSliderContainer />
      <div className="max-w-full w-full mx-auto py-8 px-2 bg-gradient-to-br from-black to-zinc-950 sm:bg-transparent sm:max-w-6xl sm:px-0">
        <Footer />
      </div>
    </div>
  )
}
