import Navigation from "../Header/Navigation";
import bg from "../../assets/image/background.png";

function Hero() {
  return (
    <section className="relative w-full bg-center bg-no-repeat bg-cover h-[100vh]" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start w-full h-full text-left text-white">
        <div className="px-6 sm:ml-8 md:ml-16 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] font-albert mt-[-50px] sm:mt-[-50px] md:mt-[-100px]">
          <h1 className="text-[16px] text-[#4BAF47] mb-4 sm:mb-8">CLEAN AND GREEN SOLUTIONS</h1>
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-[800] leading-tight">
            Empowering Africa's <br /> Sustainable Future
          </h1>
          <p className="mb-6 text-[18px] break-words w-[80%] sm:text-xl">
            Driving innovation in renewable energy, <span className="block sm:inline">climate change resilience,</span> and the green economy.
          </p>
          <div className="space-x-10 ">
            <button className="px-6 py-3 text-[16px] font-[500] text-white rounded-lg bg-[#49AF45] hover:bg-[#1d8319] hover:outline-none">
              Get Started
            </button>
            <button className="px-6 py-3 font-[500] semibold text-white bg-transparent border-1 border-white rounded-lg text- hover:bg-green-500 hover:outline-none text-[16px]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
