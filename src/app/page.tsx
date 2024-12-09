import Feature from "@/components/Feature"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
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
        </div>
      </div>
    </div>
  )
}

export default Home