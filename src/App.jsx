import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SlideShow from './components/SlideShow'
import Image from './components/Image'
import { bannerItems } from './constants'

function App() {
  return (
    <div className='flex flex-col justify-between'>
      <Navbar />
      <SlideShow arrows={false}>
        {bannerItems.map((item, index)=>(
          <div key={index}>
              <Image imgSrc={item.src} ratio={"aspect-20x9"} />
          </div>
        ))}
      </SlideShow>
      <div className="max-w-7xl mx-auto py-20 px-6 w-full">
        <HeroSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
