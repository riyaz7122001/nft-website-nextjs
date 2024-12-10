import Analytics from "@/components/Analytics"
import CallToAction from "@/components/CallToAction"
import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
import GetApp from "@/components/GetApp"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Testimonials from "@/components/Testimonial"

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden relative">
      <div className={`px-6 flex justify-center items-center `}>
        <div className={`xl:max-w-[1400px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={`px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1400px] w-full`}>
          <Hero />
        </div>
      </div>

      <div className={`px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1400px] w-full`}>
          <Feature />
          <Analytics />
          <GetApp />
          <Testimonials />
          <CallToAction />
          <Footer />
        </div>
      </div>
      <div className="absolute z-[1] w-[40%] h-[60%] right-[-30%] top-[30%] green__gradient"></div>
    </div>
  )
}

export default Home